import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const { data } = await axios.post(
        "http://localhost:8000/signin",
        {
          username: form.username,
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );
      if (data.success) {
        window.location.href = "http://localhost:3001";
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Open your account</h1>
        <p className="signup-card__sub">Join 1.3+ crore investors on India's largest stock broker</p>
        {error && <p style={{ color: "red", marginBottom: "8px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginBottom: "8px" }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="signup-name">Full Name</label>
          <input id="signup-name" type="text" name="username" placeholder="Nithin Kamath" value={form.username} onChange={handleChange} required />
          <label htmlFor="signup-email">Email Address</label>
          <input id="signup-email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          <label htmlFor="signup-phone">Mobile Number</label>
          <input id="signup-phone" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
          <label htmlFor="signup-password">Create Password</label>
          <input id="signup-password" type="password" name="password" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} required />
          <button type="submit" className="signup-card__submit">Create Free Account</button>
        </form>
        <p className="signup-card__footer">Already have an account? <Link to="/login">Login →</Link></p>
        <p className="signup-card__footer" style={{ marginTop: "8px", fontSize: "0.75rem" }}>
          By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;
