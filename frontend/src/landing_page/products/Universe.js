
import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="text-center mb-5">
        <h1 className="fs-1 mb-4">The Zerodha Universe</h1>
        <p className="mb-">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-5 p-5">
        {[
          {
            src: "media/images/zerodhafundhouse.png",
            alt: "Zerodha Fund House",
            desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
          },
          {
            src: "media/images/streakLogo.png",
            alt: "Streak",
            desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
          },
          {
            src: "media/images/sensibullLogo.svg",
            alt: "Sensibull",
            desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
          },
          {
            src: "media/images/smallcaseLogo.png",
            alt: "Smallcase",
            desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
          },
          {
            src: "media/images/tijori.svg",
            alt: "Tijori",
            desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
          },
          {
            src: "media/images/dittoLogo.png",
            alt: "Ditto",
            desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
          },
        ].map((item, index) => (
          <div className="col-md-4 mb-5 px-4" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="img-fluid mb-3 mx-auto d-block"
              style={{ maxHeight: "50px", objectFit: "contain" }}
            />
            <p className="text-muted">{item.desc}</p>
          </div>
        ))}
        <button style={{width:"20%", margin: "0 auto"}} className='p-2 btn btn-primary fs-5'>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
