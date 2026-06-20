import React from "react";

function Education() {
  return (
    <section className="education-section">
      <div className="education-section__grid">
        <div className="education-section__img">
          <img src="/images/education.svg" alt="Free market education" />
        </div>
        <div>
          <span className="education-section__label">Learn &amp; Grow</span>
          <h2 className="education-section__title">Free and open market education</h2>
          <div className="education-section__block">
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="#" className="education-section__link">Varsity <span>→</span></a>
          </div>
          <div className="education-section__block">
            <p>TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="#" className="education-section__link">TradingQ&amp;A <span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
