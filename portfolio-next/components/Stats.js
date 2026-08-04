
"use client";
import React, { useEffect, useRef } from 'react';

export default function Stats() {
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
      <section id="stats" className="section stats-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// coding stats</span>
          <h2 className="section-title">My Coding Journey</h2>
        </div>
        <div className="platforms-grid">
          
          <div className="platform-card leetcode-card">
            <div className="platform-logo">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#FFA116"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              <span>LeetCode</span>
            </div>
            <div className="platform-username">@sharmaanjana</div>
            <div className="stats-row">
              <div className="stat"><span className="stat-val" id="lc-solved">...</span><span className="stat-label">Solved</span></div>
              <div className="stat"><span className="stat-val" id="lc-easy">...</span><span className="stat-label">Easy</span></div>
              <div className="stat"><span className="stat-val" id="lc-medium">...</span><span className="stat-label">Medium</span></div>
              <div className="stat"><span className="stat-val" id="lc-hard">...</span><span className="stat-label">Hard</span></div>
            </div>
            <div className="difficulty-bar">
              <div className="diff-segment easy-segment" style={{"width":"40%"}}><span>Easy</span></div>
              <div className="diff-segment medium-segment" style={{"width":"46.7%"}}><span>Medium</span></div>
              <div className="diff-segment hard-segment" style={{"width":"13.3%"}}><span>Hard</span></div>
            </div>
            <a href="https://leetcode.com/u/sharmaanjana/" target="_blank" className="platform-link">View Profile →</a>
          </div>

          
          <div className="platform-card github-card">
            <div className="platform-logo">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub</span>
            </div>
            <div className="platform-username">@anjana2201up</div>
            <div className="stats-row">
              <div className="stat"><span className="stat-val" id="gh-repos">34</span><span className="stat-label">Repositories</span></div>
              <div className="stat"><span className="stat-val" id="gh-followers">120</span><span className="stat-label">Followers</span></div>
              <div className="stat"><span className="stat-val" id="gh-stars">45</span><span className="stat-label">Stars</span></div>
            </div>
            <div className="github-contrib-grid">
              <img src="https://ghchart.rshah.org/10b981/anjana2201up" alt="GitHub Contributions" style={{"width":"100%","borderRadius":"8px","marginTop":"10px"}} />
            </div>
            <a href="https://github.com/anjana2201up" target="_blank" className="platform-link">View Profile ↗</a>
          </div>

          
          <div className="platform-card codolio-card">
            <div className="platform-logo">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#F57C06"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              <span>Codolio</span>
            </div>
            <div className="platform-username">@anjana_sharma</div>
            <div className="codolio-achievements">
              <div className="achievement-item"><span className="achievement-icon">🏆</span><span className="achievement-text">View Full Profile</span></div>
            </div>
            <div className="codolio-platforms">
              <span className="cp-platform">LeetCode</span>
              <span className="cp-platform">Codeforces</span>
              <span className="cp-platform">CodeChef</span>
              <span className="cp-platform">GFG</span>
            </div>
            <a href="https://codolio.com/profile/anjana_sharma" target="_blank" className="platform-link">View Profile →</a>
          </div>
        </div>
        
        <div className="github-stats-row">
          <img src="https://github-readme-stats.vercel.app/api?username=anjana2201up&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=10b981&icon_color=eab308&text_color=475569" alt="GitHub Stats" className="github-stat-img" onerror="this.style.display='none'" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=anjana2201up&theme=default&hide_border=true&background=ffffff&ring=10b981&fire=eab308&currStreakLabel=10b981" alt="GitHub Streak" className="github-stat-img" onerror="this.style.display='none'" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=anjana2201up&layout=compact&theme=default&hide_border=true&bg_color=ffffff&title_color=10b981&text_color=475569" alt="Top Languages" className="github-stat-img" onerror="this.style.display='none'" />
        </div>
      </div>
    </section>
    </div>
  );
}