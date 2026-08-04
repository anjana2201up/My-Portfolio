
"use client";
import React, { useEffect, useRef } from 'react';

export default function Contact() {
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
      <section id="contact" className="section contact-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">I'm always open to discussing new opportunities, collaborations, or just having a chat about tech!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">sharmaanjana5965@gmail.com</span>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <a href="https://www.linkedin.com/in/anjanaharma001/" target="_blank" className="contact-value link-val">anjanaharma001</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <a href="https://github.com/anjana2201up" target="_blank" className="contact-value link-val">anjana2201up</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">India</span>
              </div>
            </div>
            <div className="availability-badge">
              <span className="av-dot"></span>
              Available for Full-Time Roles &amp; Internships
            </div>
          </div>
          <div className="contact-form" style={{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","textAlign":"center","padding":"4rem 2rem"}}>
            <h3 style={{"marginBottom":"1.5rem","color":"var(--text-light)","fontSize":"1.8rem","fontWeight":"700"}}>Let's Work Together!</h3>
            <p style={{"marginBottom":"2.5rem","color":"var(--text-muted)","fontSize":"1.1rem","maxWidth":"400px"}}>Please fill out my contact form to send me a message directly. I will get back to you as soon as possible!</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcXrHB-IQ306IoOAsbl0LCTOVWNtF-2TdTADXEZbppNasjQw/viewform" target="_blank" className="btn btn-primary submit-btn" style={{"textDecoration":"none","width":"auto","padding":"1.2rem 3rem","fontSize":"1.1rem"}}>
              <span className="btn-text" style={{"marginRight":"10px"}}>Open Contact Form</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}