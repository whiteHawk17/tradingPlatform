import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  // img scr,2 links , applestor,playstore,para

  // Responsive: image on top, then text, then badges horizontally below links on mobile
  return (
    <div className="container p-5">
      <div className="row d-flex align-items-center flex-column flex-md-row">
        <div className="col-md-6 col-12 p-3 d-flex justify-content-center order-1 order-md-0">
          <img src={imageURL} style={{maxWidth: '98vw', width: '100%', height: 'auto', borderRadius: 12, margin: '0 0 1rem 0'}} />
        </div>
        <div className="col-md-6 col-12 p-3 mt-3 mt-md-5 order-0 order-md-1">
          <h1 style={{fontSize: '1.3rem'}}>{productName}</h1>
          <p style={{fontSize: '1rem'}}>{productDescription}</p>
          <div className="d-flex flex-wrap gap-3 mb-2">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" style={{maxWidth: 120, width: '100%'}} />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" style={{maxWidth: 120, width: '100%'}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
