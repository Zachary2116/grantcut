{/*  import { useState } from "react";
import 'login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        onLogin(data.token);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
};




export default App;
*/}





import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './login.css';
import './index.css';

function Login() {
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
          { threshold: 0.12 } // Trigger when 12% of the section is visible
        );

        fadeInSections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        Swal.fire("Login Clicked!", "Form submitted", "success");
    };

    return (
        <section className="login fade-in-section">
            <form onSubmit={handleSubmit}>


                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" defaultChecked name="remember" /> Remember me
                    </label>
                </div>

                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </section>
    );
}

export default Login;
