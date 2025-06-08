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


<section class="content-section fade-in-section">
<div class="inner">
  <h2>Our Mission</h2>

  <p><strong>GrantCut exists to remove the structural and administrative barriers that keep worthy initiatives from thriving.</strong> We blend data‑driven grant discovery, expert storytelling, and long‑term relationship management so nonprofits and socially conscious small businesses can focus on their core purpose—creating sustainable, positive change—while we secure the resources they need to do it.</p>


  <h3>What drives us</h3>
  <ul>
    <li><strong>Impact over paperwork.</strong> Every hour you spend navigating forms or compliance is an hour not spent serving your community. We streamline those tasks—search, eligibility checks, narrative drafting, budgets, revisions, follow‑ups—so your team can stay mission‑focused.</li>
    <li><strong>Ethical, sustainable funding.</strong> We prioritize opportunities that align with equitable development goals and environmentally responsible practices, ensuring that financial growth never compromises people or planet.</li>
   
    <li><strong>Partnership, not just paperwork.</strong> From the first discovery call through post‑award reporting and renewal cycles, we stay in the trenches with you, serving as an extension of your team.</li>
  </ul>


  <h3>How we deliver</h3>
  <ul>
    <li><strong>Smart Grant Discovery &amp; Matching</strong> – AI‑assisted search plus human curation identifies the best‑fit funding streams for your unique mission. In addition we are working on<bold class= "bold">  an AI service</bold> that can <bold class= "bold">automate the grant writing process</bold>,streamlining and expediting grant writing, allowing you to apply to more grants than usual.</li>
    <li><strong>Hassle‑Free Grant Writing</strong> – Seasoned writers craft compelling, metrics‑driven narratives that resonate with reviewers and comply with every guideline.</li>
    <li><strong>Ongoing Compliance &amp; Renewals</strong> – Automated deadline tracking and proactive check‑ins keep awards active and future funding pipelines warm.</li>
  
  </ul>


  <p><strong>Our pledge:</strong> We will cut through complexity, champion transparency, and advocate fiercely for the changemakers we serve. When you partner with GrantCut, you gain more than a grant writer—you gain a strategic ally committed to unlocking sustainable funding so your vision can scale and endure.</p>
  </div>
</section>


    </div>
  );
}

export default App;
