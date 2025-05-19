import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', form);
    // Add login logic here
    navigate('/home'); // Redirect to Home page
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-logo">MyInstagram</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="auth-divider">
          <div className="line"></div>
          <div className="or">OR</div>
          <div className="line"></div>
        </div>
        <div className="auth-footer">
          <p>
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
