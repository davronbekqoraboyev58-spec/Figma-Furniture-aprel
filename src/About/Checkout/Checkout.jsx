import React from "react";
import { Link } from "react-router-dom";
import img57 from "../../assets/img57.jpg";
import "./Checkout.css";

const Checkout = () => {
  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <div className="checkout-hero-overlay" />
        <img src={img57} alt="Checkout background" className="checkout-hero-bg" />
        <div className="checkout-hero-content">
          <p className="checkout-breadcrumbs">
            <Link to="/">Home</Link> <span>&gt;</span> <span>Checkout</span>
          </p>
          <h1>Checkout</h1>
        </div>
      </section>

      <section className="checkout-container">
        <div className="checkout-form-panel">
          <div className="checkout-heading">
            <h2>Billing details</h2>
          </div>

          <form className="checkout-form">
            <div className="field-row">
              <label>
                First Name
                <input type="text" placeholder="First Name" />
              </label>
              <label>
                Last Name
                <input type="text" placeholder="Last Name" />
              </label>
            </div>

            <label>
              Company Name (Optional)
              <input type="text" placeholder="Company Name" />
            </label>

            <label>
              Country / Region
              <select>
                <option>Sri Lanka</option>
                <option>Indonesia</option>
                <option>India</option>
              </select>
            </label>

            <label>
              Street address
              <input type="text" placeholder="Street address" />
            </label>

            <div className="field-row">
              <label>
                Town / City
                <input type="text" placeholder="Town / City" />
              </label>
              <label>
                Province
                <select>
                  <option>Western Province</option>
                  <option>Central Province</option>
                </select>
              </label>
            </div>

            <label>
              ZIP code
              <input type="text" placeholder="ZIP code" />
            </label>

            <label>
              Phone
              <input type="tel" placeholder="Phone" />
            </label>

            <label>
              Email address
              <input type="email" placeholder="Email address" />
            </label>

            <label>
              Additional information
              <textarea placeholder="Additional information" rows="4" />
            </label>
          </form>
        </div>

        <aside className="checkout-summary-panel">
          <div className="checkout-summary-card">
            <h3>Product</h3>
            <div className="checkout-product-row">
              <span>Asgaard sofa × 1</span>
              <strong>Rs. 250,000.00</strong>
            </div>
            <div className="checkout-product-row alt">
              <span>Subtotal</span>
              <strong>Rs. 250,000.00</strong>
            </div>
            <div className="checkout-product-row total">
              <span>Total</span>
              <strong>Rs. 250,000.00</strong>
            </div>

            <div className="checkout-payment">
              <label className="payment-option">
                <input type="radio" name="payment" defaultChecked />
                <div>
                  <span>Direct Bank Transfer</span>
                  <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                </div>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" />
                <div>
                  <span>Cash On Delivery</span>
                  <p>Pay when your order is delivered to your door.</p>
                </div>
              </label>
            </div>

            <button className="checkout-submit">Place order</button>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
