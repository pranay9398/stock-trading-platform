import React from "react";

function Footer() {
  const company = ["About", "Products", "Pricing", "Referral programme", "Careers", "Zerodha.tech", "Press & media", "Zerodha cares (CSR)"];
  const support  = ["Contact", "Support portal", "Z-Connect blog", "List of charges", "Downloads & resources"];
  const account  = ["Open an account", "Fund transfer", "60 day challenge"];

  return (
    <footer className="z-footer">
      <div className="z-footer__top">
        <div className="z-footer__brand">
          <img src="/images/logo.svg" alt="Zerodha" />
          <p>&copy; 2010 – 2024, Zerodha Broking Ltd.<br />All rights reserved.</p>
        </div>
        <div className="z-footer__col">
          <h4>Company</h4>
          <ul>{company.map((item) => <li key={item}><a href="#">{item}</a></li>)}</ul>
        </div>
        <div className="z-footer__col">
          <h4>Support</h4>
          <ul>{support.map((item) => <li key={item}><a href="#">{item}</a></li>)}</ul>
        </div>
        <div className="z-footer__col">
          <h4>Account</h4>
          <ul>{account.map((item) => <li key={item}><a href="#">{item}</a></li>)}</ul>
        </div>
      </div>
      <div className="z-footer__divider">
        <div className="z-footer__legal">
          <p>Zerodha Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration no.: INZ000031633. CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238. Registered Address: #153/154, 4th Cross, Dollars Colony, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. KYC is one time exercise while dealing in securities markets.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
