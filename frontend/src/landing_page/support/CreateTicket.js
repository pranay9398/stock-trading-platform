import React from "react";

const categories = [
  { title: "Account Opening",    links: ["How to open an account?","Documents required","Account opening status","NRI account opening"] },
  { title: "Trading & Markets",  links: ["Place an order","Order types","Intraday trading","F&O trading"] },
  { title: "Funds & Charges",    links: ["Add funds","Withdraw funds","Brokerage charges","DP charges"] },
  { title: "Console & Reports",  links: ["Tax P&L report","Holdings report","Ledger report","Contract notes"] },
  { title: "Payments & Billing", links: ["Payment methods","Failed payments","Refunds","GST invoice"] },
  { title: "Mutual Funds",       links: ["Invest in mutual funds","SIP on Coin","Redemption process","Fund performance"] },
];

function CreateTicket() {
  return (
    <section className="support-categories">
      <div className="z-container">
        <h2 style={{ textAlign: "center", marginBottom: "8px" }}>Browse help topics</h2>
        <p style={{ textAlign: "center", marginBottom: "48px", color: "var(--z-text-muted)" }}>
          Can't find what you're looking for? <a href="#" style={{ color: "var(--z-primary)", fontWeight: 600 }}>Create a ticket →</a>
        </p>
        <div className="support-categories__grid">
          {categories.map((cat) => (
            <div className="support-card" key={cat.title}>
              <h4>{cat.title}</h4>
              {cat.links.map((link) => <a href="#" key={link}>{link}</a>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
