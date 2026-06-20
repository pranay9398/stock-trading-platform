import React from "react";

function Hero() {
  const quickLinks = ["Track account opening","Track segment activation","Intraday margins","Kite user manual"];
  const featured   = ["Current Takeovers and Delisting - January 2024","Latest Intraday leverages - MIS & CO","NSE/BSE Announcements & Circulars","SEBI guidelines for trading"];

  return (
    <section id="supportHero">
      <div className="z-container">
        <div id="supportWrapper" style={{ justifyContent: "space-between", marginBottom: "32px" }}>
          <h4 style={{ color: "#fff", fontWeight: 700, margin: 0 }}>Support Portal</h4>
          <a href="#" style={{ color: "rgba(255,255,255,.85)", fontWeight: 500 }}>Track Tickets →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "20px" }}>Search for an answer or browse help topics to create a ticket</h2>
            <div id="supportWrapper" style={{ margin: "0 0 24px" }}>
              <input placeholder="Eg. how do I activate F&O" id="support-search" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {quickLinks.map((link) => (
                <a key={link} href="#" style={{ background: "rgba(255,255,255,.15)", color: "#fff", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", border: "1px solid rgba(255,255,255,.2)" }}>{link}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ color: "#fff", marginBottom: "16px" }}>Featured</h3>
            <ol style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {featured.map((item) => (
                <li key={item}><a href="#" style={{ color: "rgba(255,255,255,.85)", fontSize: "0.95rem" }}>{item}</a></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
