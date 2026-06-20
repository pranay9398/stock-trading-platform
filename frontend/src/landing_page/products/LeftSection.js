import React from "react";

function LeftSection({ imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <section className="product-row">
      <div className="product-row__grid">
        <div className="product-row__img">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="product-row__content">
          <span className="product-row__tag">Product</span>
          <h2 className="product-row__name">{productName}</h2>
          <p className="product-row__desc">{productDesription}</p>
          <div className="product-row__actions">
            {tryDemo !== undefined && <a href={tryDemo || "#"} className="z-btn z-btn--primary">Try Demo</a>}
            {learnMore !== undefined && <a href={learnMore || "#"} className="z-btn z-btn--outline">Learn More</a>}
          </div>
          {(googlePlay !== undefined || appStore !== undefined) && (
            <div className="store-badges" style={{ marginTop: "20px" }}>
              {googlePlay !== undefined && <a href={googlePlay || "#"} className="store-badge">📱 Google Play</a>}
              {appStore !== undefined && <a href={appStore || "#"} className="store-badge">🍎 App Store</a>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
