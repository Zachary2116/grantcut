import React, { useEffect } from 'react';

import './contactApp.css';
import './index.css';

function App() {
    useEffect(() => {
        const fadeInSections = document.querySelectorAll('.fade-in-section');
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
              } else {
                entry.target.classList.remove('fade-in-visible'); // Reset when out of view
              }
            });
          },
          { threshold: 0.12 } // Trigger when 10%s of the section is visible
        );
    
        fadeInSections.forEach((section) => observer.observe(section));
    
        return () => observer.disconnect(); // Cleanup observer on unmount
      }, []);
       
  return (
    <div className="contact-page contact-header fade-in-section">

      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Please contact us at
        grantcutmarketing@gmail.com

      </p>

  </div>
);
}

export default App;
