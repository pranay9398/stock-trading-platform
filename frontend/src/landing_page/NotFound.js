import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="z-btn z-btn--primary">← Back to Home</Link>
    </div>
  );
}

export default NotFound;
