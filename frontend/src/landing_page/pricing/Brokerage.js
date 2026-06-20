import React from "react";

const rows = [
  { segment: "Equity Delivery",  brokerage: "Zero",        stt: "0.1% on buy & sell",            exchange: "NSE: 0.00345% | BSE: 0.00375%", dp: "₹13.5 + GST" },
  { segment: "Equity Intraday",  brokerage: "₹20 or 0.03%", stt: "0.025% on sell side",          exchange: "NSE: 0.00345% | BSE: 0.00375%", dp: "Not applicable" },
  { segment: "Equity Futures",   brokerage: "₹20 or 0.03%", stt: "0.01% on sell side",           exchange: "NSE: 0.002%",                    dp: "Not applicable" },
  { segment: "Equity Options",   brokerage: "Flat ₹20",    stt: "0.05% on sell side (premium)",  exchange: "NSE: 0.053%",                    dp: "Not applicable" },
  { segment: "Currency Futures", brokerage: "₹20 or 0.03%", stt: "—",                            exchange: "NSE: 0.00090%",                  dp: "Not applicable" },
  { segment: "Commodity",        brokerage: "₹20 or 0.03%", stt: "0.01% on sell (non-agri)",     exchange: "MCX: 0.0021%",                   dp: "Not applicable" },
];

function Brokerage() {
  return (
    <section className="brokerage-section">
      <div className="brokerage-section__inner">
        <h2>Brokerage charges</h2>
        <p style={{ marginBottom: "28px", color: "var(--z-text-muted)" }}>Detailed breakdown of all charges across segments</p>
        <table className="brokerage-table">
          <thead>
            <tr>
              <th>Segment</th><th>Brokerage</th><th>STT / CTT</th><th>Exchange txn</th><th>DP charges</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.segment}>
                <td><strong>{r.segment}</strong></td>
                <td>{r.brokerage === "Zero" ? <span className="zero-badge">₹0</span> : <span className="flat-badge">{r.brokerage}</span>}</td>
                <td>{r.stt}</td><td>{r.exchange}</td><td>{r.dp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "28px", display: "flex", gap: "24px" }}>
          <a href="#" className="education-section__link">Brokerage calculator →</a>
          <a href="#" className="education-section__link">Full list of charges →</a>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
