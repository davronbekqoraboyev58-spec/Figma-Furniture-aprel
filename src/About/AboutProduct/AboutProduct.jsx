import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiShare2, FiShuffle } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./AboutProduct.css";

const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=500&q=80",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
  },
];

/* ── Share / Compare / Heart icons ── */

/* ── Single Card ── */
const ProductCard = ({ product, index, onAddToCart, isInCart }) => {
  const [liked, setLiked] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleCart = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const added = isInCart || justAdded;
  const buttonLabel = justAdded ? "✓ Added" : isInCart ? "In cart" : "Add to cart";

  return (
    <div
      ref={ref}
      className={`ap-card ${visible ? "ap-card-visible" : ""}`}
      style={{ "--i": index }}
    >
      <div className="ap-img-wrap">
        <img src={product.image} alt={product.name} className="ap-img" loading="lazy" />

        {product.badge && (
          <span className={`ap-badge ${product.badgeType === "new" ? "badge-new" : "badge-discount"}`}>
            {product.badge}
          </span>
        )}

        <div className="ap-overlay">
          <div className="ap-actions">
            <button className="ap-action-btn"><FiShare2 size={14} /> Share</button>
            <button className="ap-action-btn"><FiShuffle size={14} /> Compare</button>
            <button className="ap-action-btn" onClick={() => setLiked(!liked)}>
              {liked ? <AiFillHeart size={14} /> : <AiOutlineHeart size={14} />} Like
            </button>
          </div>
        </div>
      </div>

      <div className="ap-body">
        <h3 className="ap-name">{product.name}</h3>
        <p className="ap-desc">{product.desc}</p>
        <div className="ap-pricing">
          <span className="ap-price">{product.price}</span>
          {product.oldPrice && <span className="ap-old">{product.oldPrice}</span>}
        </div>
        <button className={`ap-btn-cart ${added ? "cart-added" : ""}`} onClick={handleCart}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

const parsePrice = (price) => {
  const value = Number(String(price).replace(/[^0-9]/g, ""));
  return Number.isNaN(value) ? 0 : value;
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

/* ── Main ── */
const AboutProduct = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleQtyChange = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.qty,
    0
  );

  return (
    <section className="about-product">
      <div className="ap-header-row">
        <h2
          ref={titleRef}
          className={`ap-title ${titleVisible ? "title-visible" : ""}`}
        >
          Related Products
        </h2>
        <button className="ap-cart-toggle" onClick={() => setCartOpen((open) => !open)}>
          Cart ({cartCount})
        </button>
      </div>

      <div className="ap-grid">
        {products.map((p, i) => (
          <ProductCard
            key={p.id}
            product={p}
            index={i}
            onAddToCart={handleAddToCart}
            isInCart={cartItems.some((item) => item.id === p.id)}
          />
        ))}
      </div>

      <div className={`ap-show-more ${titleVisible ? "btn-visible" : ""}`}>
        <button
          className="ap-show-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className={`cart-backdrop ${cartOpen ? "open" : ""}`} onClick={() => setCartOpen(false)} />
      <aside className={`about-cart-sidebar ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <div>
            <p className="cart-label">Shopping Cart</p>
            <p className="cart-count">{cartCount} item{cartCount === 1 ? "" : "s"}</p>
          </div>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            ×
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">Your cart is empty. Add a product to see it here.</div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img className="cart-item-thumb" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <div className="cart-item-meta">
                    <span>{item.price}</span>
                    <div className="cart-qty">
                      <button onClick={() => handleQtyChange(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleQtyChange(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="cart-remove" onClick={() => handleRemove(item.id)}>×</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Subtotal</span>
            <strong>Rp {formatCurrency(subtotal)}</strong>
          </div>
          <div className="cart-actions">
            <button className="cart-btn" onClick={() => setCartOpen(true)}>View Cart</button>
            <button
              type="button"
              className="cart-btn cart-btn-primary"
              onClick={() => {
                setCartOpen(false);
                navigate('/checkout');
                if (window.location.pathname !== '/checkout') {
                  window.location.href = '/checkout';
                }
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default AboutProduct;