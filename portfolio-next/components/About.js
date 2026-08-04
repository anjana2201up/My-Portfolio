
"use client";
import React, { useEffect, useRef } from 'react';

export default function About() {
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
      <section id="about" className="section about-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// about me</span>
          <h2 className="section-title">Who Am I?</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-paragraph">
              I'm <strong>Anjana Kumari</strong>, a dedicated Computer Science student and full-stack developer driven by a passion for technology and problem-solving. I thrive at the intersection of elegant code and real-world impact.
            </p>
            <p className="about-paragraph">
              With a strong foundation in <strong>Data Structures &amp; Algorithms</strong>, I regularly sharpen my skills on competitive programming platforms. I enjoy building scalable web applications using modern technologies like <strong>React, Node.js, and Java</strong>.
            </p>
            <p className="about-paragraph">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or mentoring fellow students in DSA concepts.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">🎓</span>
                <div>
                  <span className="detail-label">Education</span>
                  <span className="detail-value">Computer Science Engineering</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value">India</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">💼</span>
                <div>
                  <span className="detail-label">Status</span>
                  <span className="detail-value">Open to Opportunities</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🏆</span>
                <div>
                  <span className="detail-label">Focus</span>
                  <span className="detail-value">Full Stack + DSA</span>
                </div>
              </div>
            </div>
            <div className="about-links">
              <a href="https://github.com/anjana2201up" target="_blank" className="social-chip github-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://leetcode.com/u/sharmaanjana/" target="_blank" className="social-chip leetcode-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                LeetCode
              </a>
              <a href="https://codolio.com/profile/anjana_sharma" target="_blank" className="social-chip codolio-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                Codolio
              </a>
              <a href="https://www.linkedin.com/in/anjanaharma001/" target="_blank" className="social-chip linkedin-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="about-visual">
            <div className="code-card">
              <div className="code-card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-title">anjana.json</span>
              </div>
              <pre className="code-content"><code>{
  <span className="json-key">"name"</span>: <span className="json-string">"Anjana Kumari"</span>,
  <span className="json-key">"role"</span>: <span className="json-string">"Full Stack Developer"</span>,
  <span className="json-key">"education"</span>: <span className="json-string">"B.Tech CSE"</span>,
  <span className="json-key">"location"</span>: <span className="json-string">"India"</span>,
  <span className="json-key">"languages"</span>: [
    <span className="json-string">"Java"</span>, <span className="json-string">"Python"</span>,
    <span className="json-string">"JavaScript"</span>, <span className="json-string">"C++"</span>
  ],
  <span className="json-key">"interests"</span>: [
    <span className="json-string">"DSA"</span>,
    <span className="json-string">"Web Development"</span>,
    <span className="json-string">"Competitive Programming"</span>
  ],
  <span className="json-key">"github"</span>: <span className="json-string">"anjana2201up"</span>,
  <span className="json-key">"leetcode"</span>: <span className="json-string">"sharmaanjana"</span>,
  <span className="json-key">"openToWork"</span>: <span className="json-bool">true</span>
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}