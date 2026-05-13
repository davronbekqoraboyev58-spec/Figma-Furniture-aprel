import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">Funiro.</h2>
          <p className="footer-address">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-col">
          <h4 className="footer-col-title">Help</h4>
          <ul>
            <li><Link to="/payment">Payment Options</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h4 className="footer-col-title">Newsletter</h4>
          <div className="footer-form">
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}