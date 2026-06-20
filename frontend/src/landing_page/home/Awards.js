import React from "react";

const products = ["Futures and Options","Stocks & IPOs","Commodity derivatives","Direct mutual funds","Currency derivatives","Bonds and Govt. Securities"];

function Awards() {
  return (
    <section className="awards-section">
      <div className="awards-section__grid">
        <div className="awards-section__img">
          <img src="/images/largestBroker.svg" alt="Largest Broker in India" />
        </div>
        <div className="awards-section__content">
          <span className="awards-section__badge">Trusted by millions</span>
          <h2 className="awards-section__title">Largest stock broker in India</h2>
          <p className="awards-section__desc">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <ul className="awards-section__list">{products.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="awards-section__press">
            <img src="/images/pressLogos.png" alt="Press logos" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
