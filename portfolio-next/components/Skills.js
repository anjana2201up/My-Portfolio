
"use client";
import React, { useEffect, useRef } from 'react';

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reveal animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate numbers if it's the hero or stats section
          if (entry.target.id === 'hero' || entry.target.id === 'stats') {
             entry.target.querySelectorAll('.stat-number, .pstat-number').forEach(el => {
                if (el.dataset.animated) return;
                el.dataset.animated = "true";
                const targetVal = el.dataset.target || "0";
                const hasPlus = targetVal.includes('+');
                const target = parseInt(targetVal);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                const timer = setInterval(() => {
                  current = Math.min(current + step, target);
                  el.textContent = Math.round(current) + (hasPlus ? '+' : '');
                  if (current >= target) clearInterval(timer);
                }, 16);
             });
          }
          
          // Animate skills if it's skills section
          if (entry.target.id === 'skills') {
            entry.target.querySelectorAll('.skill-progress').forEach(el => {
               el.style.width = el.getAttribute('data-width');
            });
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="reveal">
      <section id="skills" className="section skills-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// technical skills</span>
          <h2 className="section-title">My Toolkit</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title"><span className="category-icon">💻</span> Languages</h3>
            <div className="skill-chips">
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /><span>Java</span><div className="chip-bar"><div className="chip-fill" style={{"width":"90%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" /><span>Python</span><div className="chip-bar"><div className="chip-fill" style={{"width":"85%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /><span>JavaScript</span><div className="chip-bar"><div className="chip-fill" style={{"width":"88%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" /><span>C++</span><div className="chip-bar"><div className="chip-fill" style={{"width":"80%"}}></div></div></div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title"><span className="category-icon">⚡</span> Frontend</h3>
            <div className="skill-chips">
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /><span>React</span><div className="chip-bar"><div className="chip-fill" style={{"width":"85%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /><span>HTML5</span><div className="chip-bar"><div className="chip-fill" style={{"width":"90%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /><span>CSS3</span><div className="chip-bar"><div className="chip-fill" style={{"width":"88%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /><span>Bootstrap</span><div className="chip-bar"><div className="chip-fill" style={{"width":"75%"}}></div></div></div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title"><span className="category-icon">🔧</span> Backend &amp; DB</h3>
            <div className="skill-chips">
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /><span>Node.js</span><div className="chip-bar"><div className="chip-fill" style={{"width":"80%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /><span>MongoDB</span><div className="chip-bar"><div className="chip-fill" style={{"width":"82%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /><span>MySQL</span><div className="chip-bar"><div className="chip-fill" style={{"width":"78%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" /><span>Express.js</span><div className="chip-bar"><div className="chip-fill" style={{"width":"75%"}}></div></div></div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title"><span className="category-icon">🛠️</span> Tools</h3>
            <div className="skill-chips">
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /><span>Git</span><div className="chip-bar"><div className="chip-fill" style={{"width":"88%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /><span>GitHub</span><div className="chip-bar"><div className="chip-fill" style={{"width":"85%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" /><span>VS Code</span><div className="chip-bar"><div className="chip-fill" style={{"width":"80%"}}></div></div></div>
              <div className="skill-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" /><span>Linux</span><div className="chip-bar"><div className="chip-fill" style={{"width":"72%"}}></div></div></div>
            </div>
          </div>
        </div>
        <div className="dsa-banner">
          <div className="dsa-banner-content">
            <div className="dsa-banner-icon">🧮</div>
            <div className="dsa-banner-text">
              <h3>DSA &amp; Competitive Programming</h3>
              <p>Strong grip on Data Structures (Arrays, Trees, Graphs, DP) and Algorithm design. Active on LeetCode, Codeforces, and CodeChef.</p>
            </div>
            <div className="dsa-topics">
              <span className="dsa-topic">Arrays</span>
              <span className="dsa-topic">Trees</span>
              <span className="dsa-topic">Graphs</span>
              <span className="dsa-topic">DP</span>
              <span className="dsa-topic">Greedy</span>
              <span className="dsa-topic">Backtracking</span>
              <span className="dsa-topic">Sorting</span>
              <span className="dsa-topic">Binary Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}