import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted', form);
    // Add signup logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-logo">MyInstagram</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <div className="auth-divider">
          <div className="line"></div>
          <div className="or">OR</div>
          <div className="line"></div>
        </div>
        <div className="auth-footer">
          <p>
            Have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
