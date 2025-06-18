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

  return (
    <div className="container p-5">
      <div className="row ">
        <div className="col p-5">
          <img src={imageURL}  />
        </div>
        <div className="col p-5 mt-5">
          <h1>{productName}</h1>
          <p >{productDescription}</p>
          <div >
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:'50px',textDecoration:"none"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-4 '>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:'20px'}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
