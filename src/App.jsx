import './App.css';
import logo from './assets/logo_transparent.png';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const rectangles = document.querySelectorAll('.rectangle');
    const missionSection = document.querySelector('.mission-section');
    const masks = document.querySelectorAll('.mask');

    // Observer for fade-in sections
    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          } else {
            entry.target.classList.remove('fade-in-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeInSections.forEach((section) => fadeInObserver.observe(section));

    // Observer for rectangles
    const rectangleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
          }
        });
      },
      { threshold: 0.5 }
    );

    rectangles.forEach((rect) => rectangleObserver.observe(rect));

    // Observer for masks
    const maskObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            masks.forEach((mask) => mask.classList.add('visible'));
          } else {
            masks.forEach((mask) => mask.classList.remove('visible'));
          }
        });
      },
      { threshold: 0.3 }
    );

    maskObserver.observe(missionSection);

    // Cleanup all observers on unmount
    return () => {
      fadeInObserver.disconnect();
      rectangleObserver.disconnect();
      maskObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero-section hero-section-fade">
        {/* Hero Content */}
        <div className="fade-in-section">
          <div>
          {/* <img src={logo} className="logo" alt="GrantCut Logo" /> */}
            <h1 className='hero-section-title'>GRANTCUT</h1>
            <div className="triangle"></div>
          </div>
          <div className="card"></div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="mission-section">
        <div className="mask mask-left"></div>
        <div className="mask mask-right"></div>
        <div className="shoot-in-right">
          <h2>Our Mission</h2>
          <p>
            At GrantCut, our mission is to empower businesses by providing tools and support to help them secure funding and achieve their goals. We believe in simplifying the grant process for everyone.
          </p>
          <a href="/mission">
            <button className="modern-button">Mission</button>
          </a>
        </div>
      </section>
      
      <section className="services-section">
        <div className="services-container fade-in-section">
          <h2 className="services-title">
            Personalized Grant Writing Strategies for your Organizationg.
          </h2>
        </div>
        <div className="services-container">
          <div className="service fade-in-section">
            <h3> Grant Discovery & Matching</h3>
            <p>
            Finding the right grants can be overwhelming. 
            We identify funding opportunities that align with your mission,
             ensuring you only apply for grants that 
             best fit your organization’s needs.
            </p>
          </div>
          <div className="service fade-in-section">
            <h3>Hassle-Free Grant Writing</h3>
            <p>
            We handle the entire application process, 
            from drafting proposals to submission.
             Our service ensures accuracy, compliance, 
             and a higher chance of approval—without 
             adding extra work to your team.
            </p>
          </div>
          <div className="service fade-in-section">
            <h3>Sustainable & Ethical Funding</h3>
            <p>
            We prioritize non-profits and businesses that align with sustainability and ethical development. Our mission is to support those making a real impact in their communities.
            </p>
          </div>
          <div className="service fade-in-section">
            <h3>Support Beyond Submission</h3>
            <p>
            Our work doesn’t stop at submission. We track application statuses, provide follow-ups, and help with renewals, ensuring long-term funding success for your organization.
            </p>
          </div>
        </div>
      </section>

            {/* Journal Section */}
            <section className="consultation-section ">
        <div className="fade-in-section">
          <h2>Contact Us For More Details</h2>
          <p>
            We are currently open for more partnerships. Please click the button below for more information on how to reach us.
          </p>
          <a href="/contact">
            <button className="modern-button2">Email Us Now!</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default App