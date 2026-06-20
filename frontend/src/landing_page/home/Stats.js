import React from "react";

const trustPoints = [
  { title: "Customer-first always", desc: "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments." },
  { title: "No spam or gimmicks", desc: "No gimmicks, spam, \"gamification\", or annoying push notifications. High quality apps that you use at your pace." },
  { title: "The Zerodha universe", desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services." },
  { title: "Do better with money", desc: "With initiatives like Nudge and Kill Switch, we actively help you do better with your money." },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-section__grid">
        <div>
          <span className="stats-section__label">Why Zerodha</span>
          <h2 className="stats-section__title">Trust with confidence</h2>
          {trustPoints.map((pt) => (
            <div className="stats-section__item" key={pt.title}>
              <h3>{pt.title}</h3>
              <p>{pt.desc}</p>
            </div>
          ))}
        </div>
        <div className="stats-section__right">
          <img src="/images/ecosystem.png" alt="Zerodha ecosystem" />
          <div className="stats-section__links">
            <a href="/product">Explore our products <span>→</span></a>
            <a href="#">Try Kite demo <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
