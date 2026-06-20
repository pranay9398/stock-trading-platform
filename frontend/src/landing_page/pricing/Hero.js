import React from "react";

function Hero() {
  return (
    <>
      <section className="pricing-hero">
        <div className="z-container">
          <h1>Pricing</h1>
          <p>Free equity investments and flat ₹20 intraday and F&amp;O trades</p>
        </div>
      </section>
      <section className="pricing-cards">
        <div className="pricing-cards__grid">
          <div className="pricing-card">
            <img src="/images/pricingEquity.svg" alt="Free equity delivery" />
            <h3>Free equity delivery</h3>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>
          </div>
          <div className="pricing-card">
            <img src="/images/intradayTrades.svg" alt="Intraday and F&O" />
            <h3>Intraday and F&amp;O trades</h3>
            <p>Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
          </div>
          <div className="pricing-card">
            <img src="/images/pricingMF.svg" alt="Free direct MF" />
            <h3>Free direct MF</h3>
            <p>All direct mutual fund investments are absolutely free — ₹0 commissions &amp; DP charges.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
