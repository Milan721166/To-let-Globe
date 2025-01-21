import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
            <hr></hr>
          <h4>REACH US</h4>
          <p>📞 +91-8707727347</p>
          <p>📧 hello@toletglobe.in</p>
          <p>📍 D1/122 Vipul Khand, Gomtinagar, Lucknow, Uttar Pradesh</p>
        </div>
        <div className="footer-section">
        <hr></hr>
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#property">Property</a></li>
          </ul>
        </div>
        <div className="footer-section">
        <hr></hr>
          <h4>SERVICES</h4>
          <ul>
            <li><a href="#pg">Paying Guest</a></li>
            <li><a href="#flat">Flat and House</a></li>
            <li><a href="#office">Office</a></li>
            <li><a href="#shops">Shops and Godown</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
        <hr></hr>
          <img src="image.png" alt="To-Let Logo" className="footer-logo" />
          <p>One-stop solution for all your brokerage-free rental needs</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2023 To-Let Globe -- Lucknow</p>
      </div>
    </footer>
  );
}

export default Footer;
