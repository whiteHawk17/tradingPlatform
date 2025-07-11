import React from "react";
function CreateTicket() {
  return (
    <div className="container ">
      <div className="row p-2 mt-3">
        <div className="mb-2">
          <h2 className="text-muted fs-5">To create a ticket, select a relevant topic</h2>
        </div>
      </div>
      <div className="row p-2 flex-wrap" style={{flexDirection: 'column'}}>
        <div className="col-12 mb-3">
          <h4 className="fs-6 mb-2"><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
          <div className="d-flex flex-wrap gap-2">
            <a href="" className="text-decoration-none">individual</a>
            <a href="" className="text-decoration-none">Minor</a>
            <a href="" className="text-decoration-none">Non Resident Indian (NRI)</a>
            <a href="" className="text-decoration-none">Company, Partnership, HUF and LLP</a>
            <a href="" className="text-decoration-none">Glossary</a>
          </div>
        </div>
        <div className="col-12 mb-3">
          <h4 className="fs-6 mb-2"><i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4>
          <div className="d-flex flex-wrap gap-2">
            <a href="" className="text-decoration-none">Your Profile</a>
            <a href="" className="text-decoration-none">Account modification</a>
            <a href="" className="text-decoration-none">Client Master Report (CMR) and Depository Participant (DP)</a>
            <a href="" className="text-decoration-none">Nomination</a>
            <a href="" className="text-decoration-none">Transfer and conversion of securities</a>
          </div>
        </div>
        <div className="col-12 mb-3">
          <h4 className="fs-6 mb-2"><i className="fa fa-bar-chart" aria-hidden="true"></i> Kite</h4>
          <div className="d-flex flex-wrap gap-2">
            <a href="" className="text-decoration-none">IPO</a>
            <a href="" className="text-decoration-none">Trading FAQs</a>
            <a href="" className="text-decoration-none">Margin Trading Facility (MTF) and Margins</a>
            <a href="" className="text-decoration-none">Charts and orders</a>
            <a href="" className="text-decoration-none">Alerts and Nudges</a>
            <a href="" className="text-decoration-none">General</a>
          </div>
        </div>
      </div>
      <div className="row p-2 mb-3 flex-wrap" style={{flexDirection: 'column'}}>
        <div className="col-12 mb-3">
          <h4 className="fs-6 mb-2"><i className="fa fa-credit-card-alt" aria-hidden="true"></i> Funds</h4>
          <div className="d-flex flex-wrap gap-2">
            <a href="" className="text-decoration-none">Add money</a>
            <a href="" className="text-decoration-none">Withdraw money</a>
            <a href="" className="text-decoration-none">Add bank accounts</a>
            <a href="" className="text-decoration-none">eMandates</a>
          </div>
        </div>
        <div className="col-12 mb-3">
          <h4 className="fs-6 mb-2"><i className="fa fa-search" aria-hidden="true"></i> Console</h4>
          <div className="d-flex flex-wrap gap-2">
            <a href="" className="text-decoration-none">Portfolio</a>
            <a href="" className="text-decoration-none">Corporate actions</a>
            <a href="" className="text-decoration-none">Funds statement</a>
            <a href="" className="text-decoration-none">Reports</a>
            <a href="" className="text-decoration-none">Profile</a>
            <a href="" className="text-decoration-none">Segments</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
