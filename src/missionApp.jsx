import React, { useEffect } from 'react';

import './missionApp.css';
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
    <div>
      <section className="hero-section">
        <div className='fade-in-section'>
        <h1>SUPPORTING  </h1>
        <h1>NON PROFITS</h1>
        <h1> + SMALL </h1>
        <h1>BUSINESS</h1>
        <p>
          At GrantCut, we are committed to helping non-profit organizations and small to medium-sized enterprises secure grants with minimal effort on their part.
        </p>
        </div>
      </section>

      <section className="content-section  fade-in-section">
        <h2>Mission Statement</h2>
        <p>
          We assist non-profit organizations in obtaining state-level grants with minimal effort on their side. Our focus is on ethical, smaller NPOs that face staffing difficulties in applying for grants. We help these organizations find and secure grants that align with their work and values, without requiring additional manpower from their teams.
        </p>
        <p>
          In addition, GrantCut extends its services to small and medium-sized private enterprises that need assistance applying for grants. All organizations we work with must share our commitment to sustainable development and missions that bring significant benefits to their communities.
        </p>

        <h2>Our Vision</h2>
        <p>
          Starting locally, we aim to connect with small to medium-sized non-profit organizations through cold-email outreach and social media campaigns. By building strong partnerships with these organizations, we strive to create a lasting impact.
        </p>

        <h2>Resources</h2>
        <p>
          Explore these websites for additional information on grants:
        </p>
        <ul>
          <li><a href="https://grants.gov/" target="_blank" rel="noopener noreferrer">grants.gov</a></li>
          <li><a href="https://grantsgovprod.wordpress.com/2021/03/17/how-to-determine-eligibility-for-federal-funding-opportunities/" target="_blank" rel="noopener noreferrer">How to Determine Eligibility for Federal Funding Opportunities</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
