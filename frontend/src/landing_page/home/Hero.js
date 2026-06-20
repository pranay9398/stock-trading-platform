import React from "react";

function Hero() {
  return (
    <section className="hero-section">
      <div className="z-container">
        <img src="/images/homeHero.png" alt="Zerodha Trading Platform" className="hero-section__img" />
        <h1 className="hero-section__title">Invest in everything</h1>
        <p className="hero-section__sub">Online platform to invest in stocks, derivatives, mutual funds, ETFs, and more.</p>
        <a href="/signup" className="z-btn z-btn--primary z-btn--lg">Signup for free</a>
      </div>
    </section>
  );
}

export default Hero;
