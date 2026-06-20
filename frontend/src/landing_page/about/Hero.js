import React from "react";

function Hero() {
  return (
    <>
      <section className="about-hero">
        <div className="z-container">
          <span className="about-hero__tag">Our Story</span>
          <h1>We pioneered the discount broking model in India.<br />Now, we are breaking ground with our technology.</h1>
          <p style={{ color: "var(--z-text-muted)", maxWidth: "560px", margin: "16px auto 0" }}>Since 2010, Zerodha has been on a mission to break all barriers traders and investors face in India.</p>
        </div>
      </section>
      <section className="about-story">
        <div className="about-story__grid">
          <div>
            <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div>
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p><a href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
