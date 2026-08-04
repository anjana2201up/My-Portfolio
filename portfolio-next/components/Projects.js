
"use client";
import React, { useEffect, useRef } from 'react';

export default function Projects() {
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
      <section id="projects" className="section projects-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// projects</span>
          <h2 className="section-title">What I've Built</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon">📅</div>
                <div className="project-links">
                  <a href="https://github.com/anjana2201up" target="_blank" className="project-link" title="View Code">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop" alt="TaskForge Scheduler" className="project-img" />
              <h3 className="project-title">TaskForge Scheduler</h3>
              <p className="project-desc">A comprehensive scheduling application that helps manage tasks effectively. Features a modern interface for tracking productivity and deadlines.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <span className="project-featured-badge">Featured</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon">🎨</div>
                <div className="project-links">
                  <a href="https://github.com/anjana2201up" target="_blank" className="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" alt="PortFolio Builder" className="project-img" />
              <h3 className="project-title">PortFolio Builder</h3>
              <p className="project-desc">A tool to quickly generate and customize professional portfolios. Built with flexible UI components and dynamic layouts.</p>
              <div className="project-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon">🚆</div>
                <div className="project-links">
                  <a href="https://github.com/anjana2201up" target="_blank" className="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=600&auto=format&fit=crop" alt="Railway Management System" className="project-img" />
              <h3 className="project-title">Railway Management System</h3>
              <p className="project-desc">A robust backend system for handling railway ticketing, scheduling, and user management. Includes secure role-based access control.</p>
              <div className="project-tech">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">JSP</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon">🧮</div>
                <div className="project-links">
                  <a href="https://github.com/anjana2201up" target="_blank" className="project-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop" alt="DSA Nexus" className="project-img" />
              <h3 className="project-title">DSA Nexus</h3>
              <p className="project-desc">A platform dedicated to solving and visualizing Data Structures and Algorithms problems. Includes categorized challenges.</p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">C++</span>
                <span className="tech-tag">HTML5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-cta">
          <a href="https://github.com/anjana2201up" target="_blank" className="btn btn-outline">
            View All Projects on GitHub
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}