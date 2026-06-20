import React from "react";

function Pricing() {
  return (
    <section className="home-pricing">
      <div className="home-pricing__grid">
        <div>
          <h2 className="home-pricing__title">Unbeatable pricing</h2>
          <p className="home-pricing__desc">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="/pricing" className="education-section__link">See Pricing <span>→</span></a>
        </div>
        <div className="home-pricing__cards">
          <div className="home-pricing__card">
            <div className="price">₹0</div>
            <div className="price-label">Free equity delivery &amp; direct mutual funds</div>
          </div>
          <div className="home-pricing__card">
            <div className="price">₹20</div>
            <div className="price-label">Intraday and F&amp;O trades</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
