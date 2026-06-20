import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <section className="product-row" style={{ background: "var(--z-bg-soft)" }}>
      <div className="product-row__grid reverse">
        <div className="product-row__content">
          <span className="product-row__tag">Product</span>
          <h2 className="product-row__name">{productName}</h2>
          <p className="product-row__desc">{productDesription}</p>
          <div className="product-row__actions">
            {learnMore !== undefined && <a href={learnMore || "#"} className="z-btn z-btn--outline">Learn More</a>}
          </div>
        </div>
        <div className="product-row__img">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
