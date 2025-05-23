import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Init intersection observer for animations
const initAnimations = () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections that should animate on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });
};

// Create root and render
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize animations after content is loaded
window.addEventListener('load', initAnimations);