import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./login.css";
import "./index.css";

const login_url = "http://localhost:8017/authenticate";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);



  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      window.location.replace("/");
    }
  }, []);

  useEffect(() => {
    setShowError(false);
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          } else {
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeInSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const showErrorMessage = (message) => {
    console.log("Setting error message:", message);
    setErrorMessage(message);
    setShowError(true);
};



  const handleLogin = async (e) => {
    e.preventDefault();
    const params = { email: email, password: password };
    const formattedEmail = email.replace(/\s+/g, '');
    localStorage.setItem("email", formattedEmail);

    fetch(login_url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
  })
      .then(response => response.json())
      .then(data => {
          if (data.status !== 401) {
            document.cookie = "token=" + data.token + "; path=/";
            window.location.replace("/");
          } else {
              console.log("bad email and password");
              showErrorMessage("Invalid email or password");
          }
      })
      .catch(error => {
          console.error('Error:', error);
          showErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <section className="login fade-in-section">
      <h6><span>Log In </span><span>Sign Up</span></h6>
                  <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                  <label for="reg-log"></label>
      <div className="card-3d-wrap">
        <div className="card-3d-wrapper">
          <form onSubmit={handleLogin} className = "card-front">
          
            
            
            <div
              role="alert"
              id="errorAlert"
              className={`alert alert-warning ${errorMessage ? "show" : ""}`}
          >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
              </svg>
              <span key={errorMessage} id="errorMessage">{errorMessage}</span>
          </div>
          <h4>Log In</h4>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
           
            
        </form>
        <form className="card-back">
        
        
        
        <h4>Sign In</h4>
    

        <button type="submit">Login</button>
        
        </form>
      </div>
      </div>
    </section>
  );
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default Login;
