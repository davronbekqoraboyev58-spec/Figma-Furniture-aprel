import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./AboutMain.css";

const images = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
];

const sizes = ["L", "XL", "XS"];
const colors = ["#8b7fce", "#222222", "#c9a84c"];


const parsePrice = (price) => Number(String(price).replace(/[^0-9]/g, "")) || 0;
const formatPrice = (value) => new Intl.NumberFormat("id-ID").format(value);

const AboutMain = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [compared, setCompared] = useState(false);
  const [imgAnim, setImgAnim] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const obs = (ref, setter) =>
      new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true); }, { threshold: 0.15 });
    const o1 = obs(leftRef, setLeftVisible);
    const o2 = obs(rightRef, setRightVisible);
    if (leftRef.current) o1.observe(leftRef.current);
    if (rightRef.current) o2.observe(rightRef.current);
    return () => { o1.disconnect(); o2.disconnect(); };
  }, []);

  const changeImg = (i) => {
    if (i === activeImg) return;
    setImgAnim(true);
    setTimeout(() => {
      setActiveImg(i);
      setImgAnim(false);
    }, 200);
  };

  const handleCart = () => {
    const product = {
      id: 1,
      name: "Asgaard sofa",
      desc: "Stylish sofa for modern interiors",
      price: "Rp 2.500.000",
      image: images[activeImg],
      size: selectedSize,
      color: selectedColor,
      qty,
    };

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.size === product.size && item.color === product.color);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === product.size && item.color === product.color
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { ...product }];
    });

    setAddedToCart(true);
    setCartOpen(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleCompare = () => {
    setCompared((v) => !v);
  };

  const goToCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
    if (window.location.pathname !== '/checkout') {
      window.location.href = '/checkout';
    }
  };

  const handleQtyChange = (id, size, color, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemove = (id, size, color) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.size === size && item.color === color)));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0);

  return (
    <section className="about-main">
      {/* ── LEFT: Images ── */}
      <div ref={leftRef} className={`am-gallery ${leftVisible ? "am-visible" : ""}`}>
        {/* Thumbnails */}
        <div className="am-thumbs">
          {images.map((src, i) => (
            <button
              key={i}
              className={`am-thumb ${activeImg === i ? "thumb-active" : ""}`}
              onClick={() => changeImg(i)}
            >
              <img src={src} alt={`thumb-${i}`} />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="am-main-img-wrap">
          <img
            src={images[activeImg]}
            alt="product"
            className={`am-main-img ${imgAnim ? "img-fade-out" : "img-fade-in"}`}
          />
        </div>
      </div>

      {/* ── RIGHT: Info ── */}
      <div ref={rightRef} className={`am-info ${rightVisible ? "am-visible" : ""}`}>
        <h1 className="am-title">Asgaard sofa</h1>
        <p className="am-price">Rs. 250,000.00</p>

        {/* Stars */}
        <div className="am-rating">
          <div className="am-stars">
            {[1,2,3,4].map((i) => (
              <FaStar key={i} className="am-star filled" size={16} />
            ))}
            <FaStarHalfAlt className="am-star half" size={16} />
          </div>
          <span className="am-reviews">5 Customer Review</span>
        </div>

        <p className="am-desc">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
          stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound.
        </p>

        <div className="am-divider" />

        {/* Size */}
        <div className="am-option-group">
          <span className="am-option-label">Size</span>
          <div className="am-sizes">
            {sizes.map((s) => (
              <button
                key={s}
                className={`size-btn ${selectedSize === s ? "size-active" : ""}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="am-option-group">
          <span className="am-option-label">Color</span>
          <div className="am-colors">
            {colors.map((c) => (
              <button
                key={c}
                className={`color-btn ${selectedColor === c ? "color-active" : ""}`}
                style={{ background: c }}
                onClick={() => setSelectedColor(c)}
                aria-label={`Color ${c}`}
              />
            ))}
          </div>
        </div>

        {/* Qty + Cart + Compare */}
        <div className="am-actions">
          <div className="am-qty">
            <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span className="qty-val">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
          </div>

          <button
            className={`btn-cart ${addedToCart ? "cart-added" : ""}`}
            onClick={handleCart}
          >
            {addedToCart ? "✓ Added!" : "Add To Cart"}
          </button>

          <button
            className="btn-cart btn-checkout"
            onClick={goToCheckout}
          >
            Checkout
          </button>

          <button
            className={`btn-compare ${compared ? "compare-active" : ""}`}
            onClick={handleCompare}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
              <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
            </svg>
            {compared ? "Compared" : "Compare"}
          </button>
        </div>

        <div className="am-divider" />

        {/* Meta */}
        <div className="am-meta">
          <div className="am-meta-row">
            <span className="meta-key">SKU</span>
            <span className="meta-sep">:</span>
            <span className="meta-val">SS001</span>
          </div>
          <div className="am-meta-row">
            <span className="meta-key">Category</span>
            <span className="meta-sep">:</span>
            <span className="meta-val">Sofas</span>
          </div>
          <div className="am-meta-row">
            <span className="meta-key">Tags</span>
            <span className="meta-sep">:</span>
            <span className="meta-val">Sofa, Chair, Home, Shop</span>
          </div>
          <div className="am-meta-row">
            <span className="meta-key">Share</span>
            <span className="meta-sep">:</span>
            <div className="meta-share">
              <a href="#" className="share-icon" aria-label="Facebook"><FaFacebookF size={16} /></a>
              <a href="#" className="share-icon" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
              <a href="#" className="share-icon" aria-label="Twitter"><FaTwitter size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={`am-cart-backdrop ${cartOpen ? "open" : ""}`} onClick={() => setCartOpen(false)} />
      <aside className={`am-cart-sidebar ${cartOpen ? "open" : ""}`}>
        <div className="am-cart-header">
          <div>
            <p className="cart-title">Shopping Cart</p>
            <p className="cart-count">{cartCount} item{cartCount === 1 ? "" : "s"}</p>
          </div>
          <button className="cart-close" onClick={() => setCartOpen(false)}>×</button>
        </div>

        <div className="am-cart-body">
          {cartItems.length === 0 ? (
            <div className="am-cart-empty">No items yet. Add the sofa to your cart.</div>
          ) : (
            cartItems.map((item) => (
              <div className="am-cart-item" key={`${item.id}-${item.size}-${item.color}`}>
                <img className="am-cart-thumb" src={item.image} alt={item.name} />
                <div className="am-cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.size}, {item.color}</p>
                  <div className="am-cart-meta">
                    <span>{item.price}</span>
                    <div className="am-cart-qty">
                      <button onClick={() => handleQtyChange(item.id, item.size, item.color, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleQtyChange(item.id, item.size, item.color, 1)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="am-cart-remove" onClick={() => handleRemove(item.id, item.size, item.color)}>×</button>
              </div>
            ))
          )}
        </div>

        <div className="am-cart-footer">
          <div className="am-cart-total">
            <span>Subtotal</span>
            <strong>Rp {formatPrice(cartTotal)}</strong>
          </div>
          <div className="am-cart-actions">
            <button className="am-cart-btn" onClick={() => setCartOpen(true)}>View Cart</button>
            <button
              className="am-cart-btn am-cart-btn-primary"
              onClick={goToCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default AboutMain;