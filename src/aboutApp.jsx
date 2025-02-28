import React, { useEffect } from 'react';
import './aboutApp.css';
import './index.css';
import collaboration from './assets/collaborating2.jpg'
import testpic from './assets/cartoontest.jpg'
import zach from './assets/zach_picture.jpg'
import alex from './assets/alex_pic.jpg'
import zachd from './assets/zachd.jpg'
const teamMembers = [
    {
      name: 'Zach Zhao',
      position: 'Co-Founder',
      image: zach, // Replace with actual image URLs
      description: 'Zach is an undergraduate student at the University of Maryland. He focuses on technical aspects, grant sourcing, and outreach. In his spare time he loves playing with his cat and lifting weights',
    },
    {
      name: 'Alex Liu',
      position: 'Co-Founder',
      image: alex,
      description: 'Alex is a undergraduate student at the University of Texas at Austin. He focuses on outreach and grant writing. He also likes to lift weights in his spare time in addition to his video game hobby. ',
    },
    {
      name: 'Zach Dubilirer',
      position: 'Outreach Management',
      image: zachd,
      description: 'Zach is also an undergraduate freshman at the University of Maryland. He is currently focused on outreach. He loves to play tennis and welding in his free time.',
    },
]

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
            <div className="about-page">
              {/* Background Animation */}
              <div className="background-animation">
                <div className="shape circle"></div>
                <div className="shape square"></div>
                <div className="shape circle"></div>
                <div className="shape square"></div>
                <div className="shape circle"></div>
              </div>
        
              {/* Hero Section */}
              <section className="hero-section">
                <div className="">
                <h1 className =' fade-in-section'>Creative </h1>
                <h2>Problem Solvers</h2>
                </div>
              </section>
        
              {/* About Section */}
              <section className="about-section">
                <div className="about-text fade-in-section">
                  <h2>Who We Are</h2>
                  <p>
                    GrantCut was founded to assist small non-profits and businesses that struggle with the complexities of grant applications. We bring expertise, creativity, and a hands-on approach to every project we undertake.
                  </p>
                  <p>
                  At GrantCut, we specialize in bridging the gap between non-profits and grant opportunities. We create meaningful connections, solve challenges, and empower organizations to achieve more.
                </p>
                </div>
                <div className="about-image  fade-in-section">
                  <img
                    src={collaboration}
                    alt="Team collaborating"
                    className="image"
                  />
                </div>
              </section>
              
        
              {/* Values Section */}
              <section className="values-section">
                <h2 className=' fade-in-section'>Our Values</h2>
                <div className="values-grid  fade-in-section">
                  <div className="value">
                    <h3>Sustainability</h3>
                    <p>
                      We work with organizations that share our vision for sustainable development and impactful missions.
                    </p>
                  </div>
                  <div className="value">
                    <h3>Collaboration</h3>
                    <p>
                      Partnering closely with our clients, we ensure a seamless and transparent grant application process.
                    </p>
                  </div>
                  <div className="value">
                    <h3>Innovation</h3>
                    <p>
                      Our team continuously explores new opportunities and cutting-edge methods to secure funding for our clients.
                    </p>
                  </div>
                </div>
              </section>
              <section className="my-team-section">
      <h2 className="team-title fade-in-section">Meet Our Team</h2>
      <div className="team-grid  fade-in-section">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
              {/* Call to Action Section */}
              <section className="cta-section">
                <h2>Let’s Make an Impact Together</h2>
                <p>
                  Whether you’re a small non-profit or a growing business, GrantCut is here to help you navigate the grant process. Let’s achieve something incredible together.
                </p>
                <a  href="/contact"><button className="cta-button">Contact Us</button></a>
              </section>
            </div>
          );
}

export default App;
