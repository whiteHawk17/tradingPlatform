import React from "react";

function Footer() {
  return (
    <footer className="bg-light footer">
      <div className="container border-top mt-5 ">
        <div className="footer-columns row mt-4" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.2rem'}}>
          <div className="footer-column col-12 col-md-3 text-center mb-3">
            <img
              src="media/images/logo.svg"
              style={{ width: "120px", margin: '0 auto' }}
              className="mb-2 footer-logo"
              alt="Zerodha Logo"
            />
            <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.
            </p>
            <div className="d-flex justify-content-center gap-2 mb-2">
              <i className="fa fa-instagram fa-lg text-muted" aria-hidden="true"></i>
              <i className="fa fa-facebook-square fa-lg text-muted" aria-hidden="true"></i>
              <i className='fa fa-linkedin fa-lg text-muted' aria-hidden='true'></i>
              <i className='fa fa-youtube-play fa-lg text-muted' aria-hidden='true'></i>
              <i className='fa fa-whatsapp fa-lg text-muted' aria-hidden='true'></i>
              <i className='fa fa-telegram fa-lg text-muted' aria-hidden='true'></i>
            </div>
          </div>
          <div className="footer-column col-6 col-md-3" style={{lineHeight:"1.7"}}>
            <p className="mb-2 fw-bold">Company</p>
            <ul>
              <li><a href="" className="text-muted">About</a></li>
              <li><a href="" className="text-muted">Products</a></li>
              <li><a href="" className="text-muted">Pricing</a></li>
              <li><a href="" className="text-muted">Referral programme</a></li>
              <li><a href="" className="text-muted">Careers</a></li>
              <li><a href="" className="text-muted">Zerodha.tech</a></li>
              <li><a href="" className="text-muted">Open source</a></li>
              <li><a href="" className="text-muted">Press & media</a></li>
              <li><a href="" className="text-muted">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>
          <div className="footer-column col-6 col-md-3" style={{lineHeight:"1.7"}}>
            <p className="mb-2 fw-bold">Support</p>
            <ul>
              <li><a href="" className="text-muted">Contact us</a></li>
              <li><a href="" className="text-muted">Support portal</a></li>
              <li><a href="" className="text-muted">Z-Connect blog</a></li>
              <li><a href="" className="text-muted">List of charges</a></li>
              <li><a href="" className="text-muted">Downloads & resources</a></li>
              <li><a href="" className="text-muted">Videos</a></li>
              <li><a href="" className="text-muted">Market overview</a></li>
              <li><a href="" className="text-muted">How to file a complaint?</a></li>
              <li><a href="" className="text-muted">Status of your complaints</a></li>
            </ul>
          </div>
          <div className="footer-column col-12 col-md-3" style={{lineHeight:"1.7"}}>
            <p className="mb-2 fw-bold">Account</p>
            <ul>
              <li><a href=" " className="text-muted">Open an account</a></li>
              <li><a href=" " className="text-muted">Fund transfer</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-muted" style={{ fontSize: "10.4px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
