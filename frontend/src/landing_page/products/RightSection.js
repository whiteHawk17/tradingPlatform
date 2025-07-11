import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  // Responsive: image on top, then text below on mobile
  return (
    <div className="container p-5">
      <div className="row d-flex align-items-center flex-column flex-md-row">
        <div className="col-md-6 col-12 p-3 d-flex justify-content-center order-1 order-md-1">
          <img src={imageURL} style={{maxWidth: '98vw', width: '100%', height: 'auto', borderRadius: 12, margin: '0 0 1rem 0'}} />
        </div>
        <div className="col-md-6 col-12 p-3 mt-3 mt-md-5 order-0 order-md-0">
          <h1 style={{fontSize: '1.3rem'}}>{productName}</h1>
          <p style={{fontSize: '1rem'}}>{productDescription}</p>
          <div>
            <a href={learnMore} style={{textDecoration: "none"}}>
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
