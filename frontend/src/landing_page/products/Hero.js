import React from 'react';
function Hero() {
    // Responsive heading style
    const headingStyle = {
        fontSize: window.innerWidth <= 600 ? '2rem' : '44px',
        fontWeight: 700,
        marginBottom: window.innerWidth <= 600 ? '0.7em' : '',
        marginTop: window.innerWidth <= 600 ? '0.7em' : '',
        lineHeight: 1.2
    };
    const subheadingStyle = {
        fontSize: window.innerWidth <= 600 ? '1.1rem' : '20px',
        marginBottom: window.innerWidth <= 600 ? '0.5em' : '',
        marginTop: window.innerWidth <= 600 ? '0.5em' : '',
        color: '#6c757d'
    };
    return ( 
        <div className='container border-bottom mb-5 '>
        <div className='row text-center mt-5 p-5'>
            <h1 style={headingStyle}>Zerodha Products</h1>
            <h3 style={subheadingStyle} className='text-muted mb-3 mt-2'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='text-muted mb-5'>Check out our <a href='' className='text-decoration-none'> investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
        </div>
     );
}

export default Hero;