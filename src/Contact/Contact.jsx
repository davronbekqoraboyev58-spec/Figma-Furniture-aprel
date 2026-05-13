import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiClock, FiMail, FiShield, FiTruck, FiBox, FiHeadphones } from "react-icons/fi";
import Header from "../Header!/Header";
import Footer from "../Header!/Footer/Footer";
import img57 from "../assets/img57.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <section className="contact-hero" style={{ backgroundImage: `url(${img57})` }}>
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content container">
          <p className="contact-hero-subtitle">Contact</p>
          <h1 className="contact-hero-title">Get In Touch With Us</h1>
          <nav className="contact-breadcrumb">
            <Link to="/" className="contact-breadcrumb-link">Home</Link>
            <span> / </span>
            <span className="contact-breadcrumb-current">Contact</span>
          </nav>
        </div>
      </section>

      <section className="contact-main container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">
                <FiMapPin />
              </div>
              <div>
                <h3>Address</h3>
                <p>250 St Ave Avenue, New York NY10009, United States</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FiPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>Mobile : (+84) 548-6789</p>
                <p>Hotline : (+84) 548-6789</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <FiClock />
              </div>
              <div>
                <h3>Working Time</h3>
                <p>Monday - Friday: 8:00 - 22:00</p>
                <p>Saturday - Sunday: 8:00 - 21:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us A Message</h2>
            <p>For more information about our products or services, feel free to drop us an email. Our staff always is there to help you out.</p>
            <form className="contact-form">
              <div className="contact-form-row">
                <label>
                  Your name
                  <input type="text" placeholder="Abc" className="contact-input" />
                </label>
                <label>
                  Email address
                  <input type="email" placeholder="Abc@gmail.com" className="contact-input" />
                </label>
              </div>
              <label>
                Subject
                <input type="text" placeholder="This is optional" className="contact-input" />
              </label>
              <label>
                Message
                <textarea placeholder="Hi I'd like to ask about" className="contact-textarea" rows="5" />
              </label>
              <button type="submit" className="button-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="contact-features">
          <div className="feature-card">
            <div className="feature-icon"><FiShield /></div>
            <div>
              <h4>High Quality</h4>
              <p>Crafted from top materials</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiBox /></div>
            <div>
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiTruck /></div>
            <div>
              <h4>Free Shipping</h4>
              <p>Order over $150</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FiHeadphones /></div>
            <div>
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
