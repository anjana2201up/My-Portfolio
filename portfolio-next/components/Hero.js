
"use client";
import React, { useEffect, useRef } from 'react';

export default function Hero() {
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
      <section id="hero" className="section hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        <h1 className="hero-title">
          <span className="title-greeting">Hello, I'm</span>
          <span className="title-name">Anjana Kumari</span>
          <span className="title-role" id="typed-role"></span>
        </h1>
        <p className="hero-desc">
          A passionate Computer Science student and Full-Stack Developer with a love for solving complex problems through elegant code. Competitive programmer | DSA enthusiast | Open Source contributor.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number" data-target="500+">0</span><span>+</span>
            <span className="stat-label">DSA Problems</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number" data-target="6+">0</span><span>+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number" data-target="3+">0</span><span>+</span>
            <span className="stat-label">Platforms</span>
          </div>
        </div>
      </div>
      <div className="hero-avatar-wrap">
        <div className="avatar-glow"></div>
        <div className="avatar-ring"></div>
        <div className="avatar-container">
          <img src="images/profile.png" alt="Anjana Kumari" className="avatar-img" />
        </div>
        <div className="avatar-badge-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          Problem Solver
        </div>
        <div className="avatar-badge-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          Full Stack Dev
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
    </div>
  );
}