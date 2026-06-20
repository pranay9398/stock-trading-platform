import React from "react";

function Team() {
  return (
    <section className="team-section">
      <div className="z-container">
        <div className="team-section__header">
          <h2>People</h2>
          <p style={{ color: "var(--z-text-muted)" }}>The team behind Zerodha</p>
        </div>
        <div className="team-section__card">
          <div className="team-section__photo">
            <img src="/images/nithinKamath.jpg" alt="Nithin Kamath" />
            <h4>Nithin Kamath</h4>
            <p>Founder, CEO</p>
          </div>
          <div className="team-section__bio">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
