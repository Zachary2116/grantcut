import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './services.css';

function App() {
  /* ---------------- Intersection Observer ---------------- */
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-section, .info-box');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target); // reveal once and keep visible
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------------- Form Submission ---------------- */
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('access_key', '65841ce8-cafc-4c2d-b1e3-b18c1dc403c4');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    }).then(r => r.json());

    if (res.success) {
      Swal.fire({ title: 'Message sent!', text: 'We’ll reply within 24 hours.', icon: 'success' });
      e.target.reset();
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <>
      {/* Hero */}
      <section className="hero fade-in-section">
        <h1 className="headline"> Vision Funded. </h1>
         <h1 className="headline">Impact Unleashed.</h1> 
         <p className="subline">
          We build a live, custom demo for your business in two days. Keep it only if you <strong>love</strong> it—no risk, no payment needed.
        </p>
        <ul className="highlights">
        <li> Lightning‑fast Next.js & Tailwind pages</li>
          <li> Optional AI chatbot, booking & review widgets</li>
          <li> SSL‑secured, mobile‑first & ADA‑friendly</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="info-section fade-in-section" id="how">
        <h2>How Your Site Revamp Works</h2>
        <div className="info-grid">
          <div className="info-box">
            <h3>1. Quick Audit & Pitch</h3>
            <p>We send a 5‑line critique plus a promise: a no‑obligation demo in 48 hours.</p>
          </div>
          <div className="info-box">
            <h3>2. 48‑Hour Demo Build</h3>
            <p>Your logo, colours, and copy dropped into our polished template library—complete with an interactive feature of your choice.</p>
          </div>
          <div className="info-box">
            <h3>3. Demo Call</h3>
            <p>Live walkthrough on Zoom. Love it? Pick a plan and we go live. Not for you? We deactivate the site—no strings.</p>
          </div>
          <div className="info-box">
            <h3>4. Launch & Support</h3>
            <p>Connect your domain, analytics, and emails in days—not weeks. We stay on as your on‑call web team.</p>
          </div>
        </div>
      </section>
     {/* Plans & Pricing */}
     <section className="pricing-section fade-in-section" id="pricing">
        <h2>Simple, Affordable Plans</h2>
        <div className="pricing-grid">
          <div className="process-card">
            <h3>Starter</h3>
            <p className="price">$99 setup<br/>$29&nbsp;/&nbsp;mo</p>
            <ul>
              <li>3‑page site + hosting</li>
              <li>1 content edit / month</li>
              <li>Email & chat support</li>
            </ul>
            <a href="contact" className="cta">Start Demo</a>
          </div>
          <div className="process-card popular">
            <h3>Growth</h3>
            <p className="price">$199 setup<br/>$39&nbsp;/&nbsp;mo</p>
            <ul>
              <li>Up to 8 pages</li>
              <li>AI chatbot & lead forms</li>
              <li>SEO basics & image optimization</li>
              <li>2 edits / month</li>
            </ul>
            <a href="contact" className="cta">Start Demo</a>
          </div>
          <div className="process-card">
            <h3>Authority</h3>
            <p className="price">$299 setup<br/>$49&nbsp;/&nbsp;mo</p>
            <ul>
              <li>Unlimited pages + blog CMS</li>
              <li>E‑commerce or booking engine</li>
              <li>Quarterly CRO & SEO reviews</li>
              <li>Priority support</li>
            </ul>
            <a href="contact" className="cta">Start Demo</a>
          </div>
        </div>
      </section>

      {/* Website Feature Call‑out */}
      <section className="website-revamp fade-in-section">
        <h2>Features That Win Trust</h2>
        <p>Every SiteRevamp build ships with the tools small businesses need to turn visitors into customers.</p>
        <div className="revamp-grid">
          <div className="revamp-card">⚡ 2‑week Next.js rebuild (after demo)</div>
          <div className="revamp-card">🤖 AI chat & FAQ bot</div>
          <div className="revamp-card">🚀 Google Lighthouse 95+ scores</div>
          <div className="revamp-card">🔐 Free SSL & privacy policy</div>
          <div className="revamp-card">📈 Built‑in analytics dashboard</div>
          <div className="revamp-card">🛎️ Easy self‑edit CMS (Notion/Sanity)</div>
        </div>
      </section>


      {/* Contact */}
      <section className="contact fade-in-section">
        <form onSubmit={onSubmit}>
          <h2>Reach Out About Your Organization</h2>
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" className="field" placeholder="Jane Doe" required />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" className="field" placeholder="you@domain.com" required />
          </div>
          <div className="input-box">
            <label htmlFor="message">Tell us about your project</label>
            <textarea id="message" name="message" className="field mess" placeholder="Brief description…" required />
          </div>
          <button type="submit" className="cta">Start the Conversation</button>
        </form>
      </section>
    </>
  );
}

export default App;
