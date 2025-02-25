import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
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
      const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "65841ce8-cafc-4c2d-b1e3-b18c1dc403c4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Sent",
            text: "Message sent Successfully!",
            icon: "success"
          });
        }
      };
    return (
      <section className="contact fade-in-section" >
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter your name" name = 'name' required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter your email" name = 'email' required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name = 'message' className="field mess" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit-button">Send Message</button>
        </form>
      </section>
    );

}

export default App;
