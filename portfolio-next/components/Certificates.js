
"use client";
import React, { useEffect, useRef } from 'react';

export default function Certificates() {
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
      <section id="certificates" className="section certificates-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">// certifications</span>
          <h2 className="section-title">Certificates &amp; Achievements</h2>
          <p className="section-subtitle">Verified certifications will appear here as an auto-scrolling, hover-to-pause 3D showcase.</p>
        </div>
                <div className="cert-track-wrap">
          <div className="cert-track" id="cert-track">
            
            <a href="images/AI Oracle Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/AI Oracle Certificate.jpg" alt="AI Oracle Certificate" />
                <h4>AI Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/Code Clash Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/Code Clash Certificate.jpg" alt="Code Clash Certificate" />
                <h4>Code Clash Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/DBMS Oracle Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/DBMS Oracle Certificate.jpg" alt="DBMS Oracle Certificate" />
                <h4>DBMS Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/MOOC Certification.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/MOOC Certification.jpg" alt="MOOC Certification" />
                <h4>MOOC Certification</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2024-11-15 at 12.02.54 AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2024-11-15 at 12.02.54 AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2024-11-15 at 12.02.55 AM (1).jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2024-11-15 at 12.02.55 AM (1).jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2024-11-15 at 12.02.55 AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2024-11-15 at 12.02.55 AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2026-01-21 at 9.07.07 PM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2026-01-21 at 9.07.07 PM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2026-07-26 at 12.13.56 AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2026-07-26 at 12.13.56 AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/certificate-CERT-1773140976878.png" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/certificate-CERT-1773140976878.png" alt="Certificate" />
                <h4>Certification</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/certificateofcprogramming.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/certificateofcprogramming.jpg" alt="Certificate of C Programming" />
                <h4>C Programming</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/infosys certificate2.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys certificate2.jpg" alt="Infosys Certificate 2" />
                <h4>Infosys Certificate 2</h4>
                <p>Infosys</p>
              </div>
            </a>
            <a href="images/infosys cetrificate1.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys cetrificate1.jpg" alt="Infosys Certificate 1" />
                <h4>Infosys Certificate 1</h4>
                <p>Infosys</p>
              </div>
            </a>

            
            <a href="images/AI Oracle Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/AI Oracle Certificate.jpg" alt="AI Oracle Certificate" />
                <h4>AI Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/Code Clash Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/Code Clash Certificate.jpg" alt="Code Clash Certificate" />
                <h4>Code Clash Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/DBMS Oracle Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/DBMS Oracle Certificate.jpg" alt="DBMS Oracle Certificate" />
                <h4>DBMS Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/MOOC Certification.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/MOOC Certification.jpg" alt="MOOC Certification" />
                <h4>MOOC Certification</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2024-11-15 at 12.02.54 AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2024-11-15 at 12.02.54 AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2024-11-15 at 12.02.55 AM (1).jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2024-11-15 at 12.02.55 AM (1).jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2024-11-15 at 12.02.55 AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2024-11-15 at 12.02.55 AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2026-01-21 at 9.07.07 PM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2026-01-21 at 9.07.07 PM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp Image 2026-07-26 at 12.13.56 AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp Image 2026-07-26 at 12.13.56 AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/certificate-CERT-1773140976878.png" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/certificate-CERT-1773140976878.png" alt="Certificate" />
                <h4>Certification</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/certificateofcprogramming.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/certificateofcprogramming.jpg" alt="Certificate of C Programming" />
                <h4>C Programming</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/infosys certificate2.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys certificate2.jpg" alt="Infosys Certificate 2" />
                <h4>Infosys Certificate 2</h4>
                <p>Infosys</p>
              </div>
            </a>
            <a href="images/infosys cetrificate1.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys cetrificate1.jpg" alt="Infosys Certificate 1" />
                <h4>Infosys Certificate 1</h4>
                <p>Infosys</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}