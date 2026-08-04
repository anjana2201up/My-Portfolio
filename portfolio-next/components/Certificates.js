
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
            
            <a href="images/AI_Oracle_Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/AI_Oracle_Certificate.jpg" alt="AI Oracle Certificate" />
                <h4>AI Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/Code_Clash_Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/Code_Clash_Certificate.jpg" alt="Code Clash Certificate" />
                <h4>Code Clash Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/DBMS_Oracle_Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/DBMS_Oracle_Certificate.jpg" alt="DBMS Oracle Certificate" />
                <h4>DBMS Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/MOOC_Certification.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/MOOC_Certification.jpg" alt="MOOC Certification" />
                <h4>MOOC Certification</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2024-11-15_at_12.02.54_AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2024-11-15_at_12.02.54_AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM_1_.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM_1_.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2026-01-21_at_9.07.07_PM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2026-01-21_at_9.07.07_PM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2026-07-26_at_12.13.56_AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2026-07-26_at_12.13.56_AM.jpeg" alt="Certificate" />
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
            <a href="images/infosys_certificate2.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys_certificate2.jpg" alt="Infosys Certificate 2" />
                <h4>Infosys Certificate 2</h4>
                <p>Infosys</p>
              </div>
            </a>
            <a href="images/infosys_cetrificate1.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys_cetrificate1.jpg" alt="Infosys Certificate 1" />
                <h4>Infosys Certificate 1</h4>
                <p>Infosys</p>
              </div>
            </a>

            
            <a href="images/AI_Oracle_Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/AI_Oracle_Certificate.jpg" alt="AI Oracle Certificate" />
                <h4>AI Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/Code_Clash_Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/Code_Clash_Certificate.jpg" alt="Code Clash Certificate" />
                <h4>Code Clash Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/DBMS_Oracle_Certificate.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/DBMS_Oracle_Certificate.jpg" alt="DBMS Oracle Certificate" />
                <h4>DBMS Oracle Certificate</h4>
                <p>Oracle</p>
              </div>
            </a>
            <a href="images/MOOC_Certification.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/MOOC_Certification.jpg" alt="MOOC Certification" />
                <h4>MOOC Certification</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2024-11-15_at_12.02.54_AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2024-11-15_at_12.02.54_AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM_1_.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM_1_.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2024-11-15_at_12.02.55_AM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2026-01-21_at_9.07.07_PM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2026-01-21_at_9.07.07_PM.jpeg" alt="Certificate" />
                <h4>Certificate</h4>
                <p>Achievement</p>
              </div>
            </a>
            <a href="images/WhatsApp_Image_2026-07-26_at_12.13.56_AM.jpeg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/WhatsApp_Image_2026-07-26_at_12.13.56_AM.jpeg" alt="Certificate" />
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
            <a href="images/infosys_certificate2.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys_certificate2.jpg" alt="Infosys Certificate 2" />
                <h4>Infosys Certificate 2</h4>
                <p>Infosys</p>
              </div>
            </a>
            <a href="images/infosys_cetrificate1.jpg" target="_blank" style={{"textDecoration":"none","color":"inherit"}}>
              <div className="cert-card">
                <img src="images/infosys_cetrificate1.jpg" alt="Infosys Certificate 1" />
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