import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark text-white p-5'>
            <p><small>Copyright reserved by HRX photography @ {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;