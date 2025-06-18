import React from "react";
function Team() {
  return (
    <div className="container ">
      <div className="row p-5   mb-5">
        <div className="mb-5  ">
          <h1 className="text-center  ">People</h1>
        </div>

        <div className="col-6 mt-5  text-muted text-center">
          <img
            src="media/images/vinay.jpg"
            alt="img"
            className="rounded-circle border border-dark"
            style={{ width: "60%" }}
          />
          <h3 className="mt-3 fs-4">Vinay Shobran</h3>
          <p>Developer</p>
        </div>
        <div className="col-6 mt-5 text-muted p-5 fs-6">
          <p>
            Vinay is a Computer Science student at Delhi Technological
            University (DTU), passionate about web development and creating
            clean, functional websites.
          </p>

          <p>
            He enjoys experimenting with design, building side projects, and
            learning new tools and technologies.
            <br/><br/>
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
