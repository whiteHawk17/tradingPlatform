import React from "react";
function Team() {
  return (
    <div className="container ">
      <div className="row flex-wrap align-items-center p-3 mb-4" style={{flexDirection: 'row'}}>
        <div className="mb-3">
          <h1 className="text-center">People</h1>
        </div>
        <div className="col-12 col-md-6 mt-3 text-muted text-center d-flex flex-column align-items-center">
          <img
            src="media/images/vinay.jpg"
            alt="img"
            className="rounded-circle border border-dark"
            style={{ width: "160px", height: "160px", objectFit: "cover", margin: "0 auto" }}
          />
          <h3 className="mt-3 fs-5">Vinay Shobran</h3>
          <p>Developer</p>
        </div>
        <div className="col-12 col-md-6 mt-3 text-muted p-3 fs-6">
          <p>
            Vinay is a Computer Science student at Delhi Technological
            University (DTU), passionate about web development and creating
            clean, functional websites.
          </p>
          <p>
            He enjoys experimenting with design, building side projects, and
            learning new tools and technologies.<br/><br/>
            Playing badminton is his zen.
          </p>
          <p>
            Connect on  <a href="" className='text-decoration-none'>Homepage</a> /  
             <a href='' className="text-decoration-none"> X</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
