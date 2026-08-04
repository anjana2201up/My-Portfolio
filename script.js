/* =====================================================
   ANJANA KUMARI - 3D PORTFOLIO | script.js
   ===================================================== */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// ============================================================
// 1. LOADING SCREEN
// ============================================================
(function() {
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loader-progress');
  let pct = 0;
  const iv = setInterval(() => {
    pct = Math.min(pct + Math.random() * 15, 95);
    progress.style.width = pct + '%';
  }, 100);
  let loaderHidden = false;
  function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;
    clearInterval(iv);
    progress.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('hidden');
      startAnimations();
    }, 400);
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    hideLoader();
  } else {
    window.addEventListener('DOMContentLoaded', hideLoader);
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 1500); // 1.5s max loading time to ensure it never gets stuck
  }
})();

// ============================================================
// 2. THREE.JS 3D BACKGROUND
// ============================================================
function init3D() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Particle field
  const particleCount = 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  const palette = [
    [0.66, 0.33, 0.97],  // purple
    [0.93, 0.28, 0.60],  // pink
    [0.02, 0.71, 0.84],  // cyan
    [0.98, 0.62, 0.03],  // amber
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
    sizes[i] = Math.random() * 2 + 0.5;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Floating geometric shapes
  const shapes = [];
  const shapeGeometries = [
    new THREE.IcosahedronGeometry(0.3, 0),
    new THREE.OctahedronGeometry(0.25, 0),
    new THREE.TetrahedronGeometry(0.3, 0),
    new THREE.BoxGeometry(0.3, 0.3, 0.3),
  ];

  for (let i = 0; i < 6; i++) {
    const geo = shapeGeometries[i % shapeGeometries.length];
    const mat = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0x10b981 : 0x3b82f6 /* Light theme shapes */,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 5
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.008,
      rotY: (Math.random() - 0.5) * 0.008,
      floatY: Math.random() * Math.PI * 2,
      floatSpeed: 0.003 + Math.random() * 0.005,
    };
    scene.add(mesh);
    shapes.push(mesh);
  }

  // Add 3D Robots
  for (let i = 0; i < 3; i++) {
    const robot = new THREE.Group();
    
    // Head
    const headGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const headMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 0.3;
    robot.add(head);

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.3, 0.4, 0.15);
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    robot.add(body);

    // Arms
    const armGeo = new THREE.BoxGeometry(0.1, 0.3, 0.1);
    const armMat = new THREE.MeshBasicMaterial({ color: 0xeab308, wireframe: true });
    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.25, 0, 0);
    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.25, 0, 0);
    robot.add(leftArm, rightArm);

    robot.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4
    );
    
    robot.userData = {
      rotX: (Math.random() - 0.5) * 0.01,
      rotY: (Math.random() - 0.5) * 0.02,
      floatY: Math.random() * Math.PI * 2,
      floatSpeed: 0.005 + Math.random() * 0.005,
    };
    
    scene.add(robot);
    shapes.push(robot);
  }


  // Mouse tracking
  let mouse = { x: 0, y: 0 };
  document.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Rotate particle field slowly
    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;

    // Camera parallax
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    // Animate shapes
    shapes.forEach((shape) => {
      shape.rotation.x += shape.userData.rotX;
      shape.rotation.y += shape.userData.rotY;
      shape.userData.floatY += shape.userData.floatSpeed;
      shape.position.y += Math.sin(shape.userData.floatY) * 0.002;
    });

    renderer.render(scene, camera);
  }

  animate();
}

try { init3D(); } catch(e) { console.warn('Three.js init failed:', e); }

// ============================================================
// 2.5 MATRIX RAINING CODE
// ============================================================
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=<>?{}[]';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#a855f7'; // Purple text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
initMatrix();

// ============================================================
// 3. CUSTOM CURSOR
// ============================================================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
});

function animateCursor() {
  followerX += (cursorX - followerX) * 0.12;
  followerY += (cursorY - followerY) * 0.12;
  if (cursor) {
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
  }
  if (follower) {
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousedown', () => cursor && cursor.classList.add('clicking'));
document.addEventListener('mouseup', () => cursor && cursor.classList.remove('clicking'));

document.querySelectorAll('a, button, .skill-chip, .project-card, .platform-card, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor && cursor.classList.add('hovering');
    follower && follower.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursor && cursor.classList.remove('hovering');
    follower && follower.classList.remove('hovering');
  });
});

// ============================================================
// 4. NAVBAR
// ============================================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  updateActiveNavLink();
});

hamburger && hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const bars = hamburger.querySelectorAll('span');
  bars[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
  bars[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
  bars[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section');
  const scrollPos = window.scrollY + window.innerHeight / 2;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ============================================================
// 5. TYPED TEXT EFFECT
// ============================================================
const roles = [
  'Full Stack Developer',
  'DSA Enthusiast',
  'Competitive Programmer',
  'Problem Solver',
  'Open Source Contributor',
];

let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-role');

function typeRole() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 400);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeRole, 1800);
      return;
    }
  }
  setTimeout(typeRole, isDeleting ? 50 : 85);
}

// ============================================================
// 6. COUNTER ANIMATION
// ============================================================
function animateCounters(parent) {
  parent.querySelectorAll('.stat-number, .pstat-number').forEach(el => {
    const target = parseInt(el.dataset.target || 0);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current);
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// ============================================================
// 7. INTERSECTION OBSERVER (reveal + counters + skill bars)
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars when skills section is visible
      if (entry.target.classList.contains('skills-section')) {
        document.querySelectorAll('.chip-fill').forEach(bar => {
          bar.style.width = bar.style.width; // trigger CSS transition
        });
      }
      // Animate counters
      if (entry.target.id === 'hero' || entry.target.id === 'stats') {
        animateCounters(entry.target);
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .project-card, .skill-category, .platform-card, .contact-card').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Also observe hero section for counters
const heroSection = document.getElementById('hero');
if (heroSection) revealObserver.observe(heroSection);

// Stats section counters
const statsSection = document.getElementById('stats');
if (statsSection) revealObserver.observe(statsSection);

// ============================================================
// 8. GITHUB CONTRIBUTION GRID (generated)
// ============================================================
function buildContributionGrid() {
  const grid = document.getElementById('contribution-grid');
  if (!grid) return;
  const weeks = 26;
  const days = 7;
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const cell = document.createElement('div');
      cell.classList.add('contrib-cell');
      const r = Math.random();
      let level;
      if (r < 0.35) level = 0;
      else if (r < 0.6) level = 1;
      else if (r < 0.8) level = 2;
      else if (r < 0.93) level = 3;
      else level = 4;
      cell.classList.add('contrib-' + level);
      cell.title = level === 0 ? 'No contributions' : `${level * Math.floor(Math.random()*3+1)} contributions`;
      grid.appendChild(cell);
    }
  }
}
buildContributionGrid();

// ============================================================
// 9. CONTACT FORM
// ============================================================
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
const submitBtn = document.getElementById('submit-btn');

// HTML Form handles submission automatically

// ============================================================
// 10. SCROLL PROGRESS INDICATOR (small gradient line at top)
// ============================================================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed; top: 0; left: 0; height: 2px; width: 0%;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  z-index: 99999; transition: width 0.1s ease; pointer-events: none;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPct = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPct + '%';
});

// ============================================================
// 11. START ANIMATIONS
// ============================================================
function startAnimations() {
  typeRole();
  // Trigger skill bars after a short delay
  setTimeout(() => {
    document.querySelectorAll('.chip-fill').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => { bar.style.width = width; }, 100);
    });
  }, 500);
}

// ============================================================
// 12. SMOOTH SCROLL for nav links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// 13. PARALLAX TILT on project cards
// ============================================================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ============================================================
// 14. GLOWING EFFECT on platform cards
// ============================================================
document.querySelectorAll('.platform-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(168,85,247,0.08), rgba(13,17,23,1) 70%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

// ============================================================
// 15. SKILL BARS ANIMATION on intersection
// ============================================================
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.chip-fill').forEach((bar, i) => {
        const w = bar.getAttribute('style').match(/width:\s*(\d+)%/);
        if (w) {
          bar.style.width = '0%';
          setTimeout(() => { bar.style.width = w[1] + '%'; }, i * 100);
        }
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillsObserver.observe(el));

// ============================================================
// 16. STATS COUNTER on section entry
// ============================================================
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#hero, #stats').forEach(el => {
  if (el) statsObserver.observe(el);
});

console.log('%c Anjana Kumari | Portfolio', 'color: #a855f7; font-size: 20px; font-weight: bold;');
console.log('%c Built with ❤️ using Three.js & Vanilla JS', 'color: #ec4899; font-size: 12px;');

// ============================================================
// 17. AURORA UPGRADE — extended 3D tilt for new/glass surfaces
// ============================================================
document.querySelectorAll('.gallery-item, .cert-card, .contact-card, .skill-category').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ============================================================
// 18. FOOTER YEAR (always accurate, never goes stale)
// ============================================================
const footerYearEl = document.getElementById('footer-year');
if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

// ============================================================
// 19. CERTIFICATE MARQUEE — duplicate track for seamless loop
//     (auto-runs once real certificate cards are added inside #cert-track)
// ============================================================
(function setupCertMarquee() {
  const track = document.getElementById('cert-track');
  if (!track) return; // no certificates loaded yet
  const cards = Array.from(track.children);
  cards.forEach(card => track.appendChild(card.cloneNode(true))); // seamless loop
})();

// ============================================================
// 20. PROJECT FILTERING
// ============================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    
    projectCards.forEach(card => {
      // Find the tech-tags inside the card
      const techTags = Array.from(card.querySelectorAll('.tech-tag')).map(t => t.textContent.toLowerCase());
      
      let match = false;
      if (filter === 'all') {
        match = true;
      } else if (filter === 'react' && (techTags.includes('react') || techTags.includes('node.js'))) {
        match = true;
      } else if (filter === 'java' && (techTags.includes('java') || techTags.includes('jsp'))) {
        match = true;
      } else if (filter === 'frontend' && (techTags.includes('html5') || techTags.includes('css3') || techTags.includes('javascript') || techTags.includes('react'))) {
        match = true;
      }
      
      if (match) {
        card.classList.remove('hidden');
        gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power2.in", onComplete: () => {
          card.classList.add('hidden');
        }});
      }
    });
  });
});

// ============================================================
// 21. GSAP SCROLL ANIMATIONS
// ============================================================
document.querySelectorAll('.section').forEach(section => {
  const header = section.querySelector('.section-header');
  if (header) {
    gsap.fromTo(header, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );
  }
});


// ============================================================
// NEW: FETCH REAL SOCIAL DATA
// ============================================================
async function fetchSocialData() {
  // 1. Fetch GitHub Data
  try {
    const ghRes = await fetch('https://api.github.com/users/anjana2201up');
    if (ghRes.ok) {
      const ghData = await ghRes.json();
      const elRepos = document.getElementById('gh-repos');
      const elFollowers = document.getElementById('gh-followers');
      if (elRepos) elRepos.innerText = ghData.public_repos;
      if (elFollowers) elFollowers.innerText = ghData.followers;
    }
  } catch(e) { console.error('Error fetching GitHub data:', e); }

  // 2. Fetch LeetCode Data (using unofficial API, might fail occasionally)
  try {
    const lcRes = await fetch('https://alfa-leetcode-api.onrender.com/sharmaanjana');
    if (lcRes.ok) {
      const lcData = await lcRes.json();
      const elSolved = document.getElementById('lc-solved');
      const elEasy = document.getElementById('lc-easy');
      const elMedium = document.getElementById('lc-medium');
      const elHard = document.getElementById('lc-hard');
      if (elSolved) elSolved.innerText = lcData.totalSolved || '...';
      if (elEasy) elEasy.innerText = lcData.easySolved || '...';
      if (elMedium) elMedium.innerText = lcData.mediumSolved || '...';
      if (elHard) elHard.innerText = lcData.hardSolved || '...';
    }
  } catch(e) { console.error('Error fetching LeetCode data:', e); }
}

fetchSocialData();

