import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./login.css";
import "./index.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        onLogin(response.data.token);
        Swal.fire("Success", "Login successful!", "success");
      }
    } catch (error) {
      Swal.fire("Error", "Invalid credentials", "error");
    }
  };

  return (
    <section className="login fade-in-section">
      <form onSubmit={handleLogin}>
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
