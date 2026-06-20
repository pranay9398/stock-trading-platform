import React from "react";

const universeItems = [
  { img: "/images/smallcaseLogo.png", name: "Smallcase", desc: "Thematic investment platform" },
  { img: "/images/sensibullLogo.svg", name: "Sensibull", desc: "Options trading platform" },
  { img: "/images/streakLogo.png", name: "Streak", desc: "Algo trading platform" },
  { img: "/images/zerodhaFundhouse.png", name: "Zerodha Fundhouse", desc: "Asset management" },
  { img: "/images/goldenpiLogo.png", name: "GoldenPi", desc: "Bonds & fixed income" },
  { img: "/images/dittoLogo.png", name: "Ditto", desc: "Insurance simplified" },
];

function Universe() {
  return (
    <section className="universe-section">
      <div className="z-container">
        <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience with our partner platforms</p>
        <div className="universe-grid">
          {universeItems.map((item) => (
            <div className="universe-card" key={item.name}>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "48px" }}>
          <a href="/signup" className="z-btn z-btn--primary z-btn--lg">Signup for free</a>
        </div>
      </div>
    </section>
  );
}

export default Universe;
