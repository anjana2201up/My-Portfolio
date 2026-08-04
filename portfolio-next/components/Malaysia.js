
"use client";
import React, { useEffect, useRef } from 'react';

export default function Malaysia() {
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
      <section id="malaysia" className="section malaysia-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// featured adventures</span>
          <h2 className="section-title">Malaysia Journey</h2>
          <p className="section-subtitle">Academic Exchange &amp; Collaboration Visit — Lovely Professional University (LPU), India, hosted by MARA Corporation &amp; Universiti Kuala Lumpur (UniKL), 23 June 2026.</p>
        </div>
        <div className="malaysia-timeline">
          <span>Kuala Lumpur</span><span className="tl-dot"></span>
          <span>UniKL Campus Tour</span><span className="tl-dot"></span>
          <span>Innovation &amp; VR Lab</span><span className="tl-dot"></span>
          <span>Genting Cable Car</span>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="images/malaysia-thankyou.jpg" alt="Academic Exchange and Collaboration Visit banner" className="gallery-img" />
            <div className="gallery-caption"><strong>Academic Exchange &amp; Collaboration Visit</strong>LPU students hosted by MARA Corporation &amp; UniKL, 23 June 2026.</div>
          </div>
          <div className="gallery-item">
            <img src="images/malaysia-innovationlab.jpg" alt="UniKL innovation and AI lab tour" className="gallery-img" />
            <div className="gallery-caption"><strong>UniKL Innovation Lab</strong>Exploring AI, GIS and data dashboards during the campus tour.</div>
          </div>
          <div className="gallery-item">
            <img src="images/malaysia-touchscreen.jpg" alt="Interactive touchscreen exhibit at UniKL" className="gallery-img" />
            <div className="gallery-caption"><strong>Interactive Tech Exhibit</strong>Hands-on with an interactive touchscreen display on campus.</div>
          </div>
          <div className="gallery-item">
            <img src="images/malaysia-gaminglounge.jpg" alt="Esports and gaming lounge tour" className="gallery-img" />
            <div className="gallery-caption"><strong>Esports &amp; Simulation Lounge</strong>Group session in UniKL's gaming and simulation setup.</div>
          </div>
          <div className="gallery-item">
            <img src="images/malaysia-kltower.jpg" alt="Kuala Lumpur skyline with KL Tower and Merdeka 118" className="gallery-img" />
            <div className="gallery-caption"><strong>Kuala Lumpur Skyline</strong>KL Tower and the city skyline during a break from the program.</div>
          </div>
          <div className="gallery-item">
            <img src="images/malaysia-cablecar.jpg" alt="Genting cable car ride over the rainforest" className="gallery-img" />
            <div className="gallery-caption"><strong>Genting Cable Car</strong>Riding above the rainforest canopy with the group.</div>
          </div>
          <div className="gallery-item">
            <img src="images/malaysia-teamnight.jpg" alt="Group photo with the LPU delegation in the evening" className="gallery-img" />
            <div className="gallery-caption"><strong>Team Night Out</strong>The LPU delegation winding down after a full day of sessions.</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}