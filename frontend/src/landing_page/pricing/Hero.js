import React from "react";
function Hero() {
  // Responsive heading style
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  const headingStyle = {
    fontSize: isMobile ? '2rem' : '44px',
    fontWeight: 700,
    marginBottom: isMobile ? '0.7em' : '',
    marginTop: isMobile ? '0.7em' : '',
    lineHeight: 1.2
  };
  const subheadingStyle = {
    fontSize: isMobile ? '1.1rem' : '20px',
    marginBottom: isMobile ? '0.5em' : '',
    marginTop: isMobile ? '0.5em' : '',
    color: '#6c757d'
  };
  const cardStyle = {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    margin: isMobile ? '0 0 24px 0' : '0 12px',
    padding: isMobile ? '18px 10px 24px 10px' : '32px 24px',
    minHeight: isMobile ? 0 : 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const imgStyle = {
    maxWidth: isMobile ? 60 : 80,
    marginBottom: 12,
    marginTop: isMobile ? 8 : 24
  };
  return (
    <div className="container ">
      <div className="row text-center mt-5 p-5 mb-5 ">
        <h1 style={headingStyle}>Pricing</h1>
        <p className='text-muted' style={subheadingStyle}>Free equity investments and flat ₹20 traday and F&O trades</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 text-center text-muted mt-5 px-2 align-items-stretch pricing-row-desktop">
        <div className="col d-flex flex-column align-items-center h-100" style={cardStyle}>
            <img src='media/images/pricingEquity.svg' alt='0Rs' style={imgStyle}/>
            <h2 style={{fontSize: '1.2rem', fontWeight: 600}}>Free equity delivery</h2>
            <p style={{fontSize: '1rem'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col d-flex flex-column align-items-center h-100" style={cardStyle}>
            <img src='media/images/intradayTrades.svg' alt='20Rs' style={imgStyle}/>
            <h2 style={{fontSize: '1.2rem', fontWeight: 600}}>Intraday and F&O trades</h2>
            <p style={{fontSize: '1rem'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col d-flex flex-column align-items-center h-100" style={cardStyle}>
            <img src='media/images/pricingEquity.svg' alt='0Rs' style={imgStyle}/>
            <h2 style={{fontSize: '1.2rem', fontWeight: 600}}>Free direct MF</h2>
            <p style={{fontSize: '1rem'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
