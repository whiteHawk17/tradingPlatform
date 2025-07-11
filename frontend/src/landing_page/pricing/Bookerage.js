import React from "react";
function Bookerage() {
  return (
    <div className="container">
      <div className="row text-muted border-top mt-5">
        {/* Headings row */}
        <div className="col-md-8 col-12 d-flex align-items-center justify-content-start">
          <h3 className="fs-5" style={{color: '#1976d2', marginBottom: 0}}>Brokerage calculator</h3>
        </div>
        <div className="col-md-4 col-12 d-flex align-items-center justify-content-md-end justify-content-start mt-2 mt-md-0">
          <a href="" className="text-decoration-none">
            <h3 className="fs-5" style={{color: '#1976d2', marginBottom: 0}}>List of charges</h3>
          </a>
        </div>
        {/* List row */}
        <div className="col-md-8 col-12">
          <ul style={{textAlign: "left", lineHeight: "2.1", fontSize: '15px', marginBottom: 0}} className="text-muted w-100 mt-3 mt-md-2">
            <li> Call & Trade and RMS auto-squareoff: Additional charges of 750 + GST per order.</li>
            <li> Digital contract notes will be sent via e-mail.</li>
            <li> Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
            <li> For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>
            <li> For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
            <li> If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
          </ul>
        </div>
        {/* Empty col for alignment on desktop */}
        <div className="col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}

export default Bookerage;
