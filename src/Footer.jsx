import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5174/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear input field
      } else {
        setMessage('Failed to subscribe. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error submitting email. Please try again.');
    }
  };

  return (
    <footer className="footer">
      {/* Left Section: Email Subscription 
      <div className="footer-section footer-left">
        <h3>Contact Us</h3>
        <ul>
            <a href="/contact">Contact</a>
          </ul>

        {message && <p className="message">{message}</p>}
      </div>
*/}
      {/* Middle Section: Navigation Links */}
      <div className="footer-section footer-middle">
        <div>
          <h4>Learn</h4>
          <ul>
            <li><a href="/team">About</a></li>
            <li><a href="/journal">Journal</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Right Section: Social Media */}
      <div className="footer-section footer-right">
        <h4>Connect</h4>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/106052360/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
