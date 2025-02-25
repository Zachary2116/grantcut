import React, { useState } from "react";
import {useEffect } from "react";
import './journalApp.css'

const JournalPage = () => 
    { useEffect(() => {
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
  const [updates, setUpdates] = useState([
    {
      title: "Website Launch",
      date: "February 19, 2025",
      content: "We're excited to announce the launch of our new website!"
    },
    
  ]);

  return (
    <section className="journal-page fade-in-section">
    <div>
      <h1>GrantCut News</h1>
      <p>Stay up-to-date with the latest news and announcements from our organization.</p>
      <div className="journal-entries">
        {updates.map((update, index) => (
          <div key={index} className="journal-entry">
            <h2>{update.title}</h2>
            <small>{update.date}</small>
            <p>{update.content}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default JournalPage;