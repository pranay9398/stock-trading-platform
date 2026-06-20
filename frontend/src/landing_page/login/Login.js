import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://stock-trading-platform-ldq4.onrender.com/login",
        {
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );
      if (data.success) {
        window.location.href = "https://stock-trading-platform-kfqu.vercel.app";
      } else {
        setError(data.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Welcome back</h1>
        <p className="signup-card__sub">Login to your trading account</p>
        {error && <p style={{ color: "#e53e3e", marginBottom: "12px", fontSize: "0.875rem" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-card__submit" disabled={loading}>
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>
        <p className="signup-card__footer">
          Don't have an account? <a href="/signup">Sign up →</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
