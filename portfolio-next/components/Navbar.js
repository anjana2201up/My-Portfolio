
"use client";
import React, { useEffect } from 'react';
export default function Navbar() {
  useEffect(() => {
    // Add scroll listener for sticky nav
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className="navbar" id="navbar">
    <div className="nav-logo">
      <span className="logo-bracket">&lt;</span>AK<span className="logo-bracket">/&gt;</span>
    </div>
    <ul className="nav-links" id="nav-links">
      <li><a href="#hero" className="nav-link active" data-section="hero">Home</a></li>
      <li><a href="#about" className="nav-link" data-section="about">About</a></li>
      <li><a href="#malaysia" className="nav-link" data-section="malaysia">Malaysia</a></li>
      <li><a href="#skills" className="nav-link" data-section="skills">Skills</a></li>
      <li><a href="#projects" className="nav-link" data-section="projects">Projects</a></li>
      <li><a href="#certificates" className="nav-link" data-section="certificates">Certificates</a></li>
      <li><a href="#stats" className="nav-link" data-section="stats">Stats</a></li>
      <li><a href="#contact" className="nav-link" data-section="contact">Contact</a></li>
    </ul>
    <button className="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  );
}