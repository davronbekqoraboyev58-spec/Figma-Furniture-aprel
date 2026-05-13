import React, { useState } from "react";
import { FiShare2, FiShuffle } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Product.css";
import img55 from "../../assets/img55.png";

const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: "discount",
    badgeText: "-30%",
    img: img55,
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: null,
    badge: null,
    badgeText: null,
    img: img55,
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: "discount",
    badgeText: "-50%",
    img: img55,
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: null,
    badge: "new",
    badgeText: "New",
    img: img55,
  },
  {
    id: 5,
    name: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: null,
    badge: null,
    badgeText: null,
    img: img55,
  },
  {
    id: 6,
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    originalPrice: null,
    badge: "new",
    badgeText: "New",
    img: img55,
  },
  {
    id: 7,
    name: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: "discount",
    badgeText: "-50%",
    img: img55,
  },
  {
    id: 8,
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: null,
    badge: "new",
    badgeText: "New",
    img: img55,
  },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="products-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="products-card-img-wrapper">
        <img src={product.img} alt={product.name} />

        {product.badge && (
          <span
            className={`products-badge ${
              product.badge === "new" ? "products-badge-new" : "products-badge-discount"
            }`}
          >
            {product.badgeText}
          </span>
        )}

        <div className="products-card-overlay">
          <button className="products-btn-add-cart">Add to cart</button>
          <div className="products-overlay-actions">
            <button>
              <FiShare2 size={14} />
              Share
            </button>
            <button>
              <FiShuffle size={14} />
              Compare
            </button>
            <button>
              <AiOutlineHeart size={14} />
              Like
            </button>
          </div>
        </div>
      </div>

      <div className="products-card-body">
        <p className="products-card-name">{product.name}</p>
        <p className="products-card-desc">{product.desc}</p>
        <div className="products-card-pricing">
          <span className="products-price-current">{product.price}</span>
          {product.originalPrice && (
            <span className="products-price-original">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="products-show-more-wrap">
        <button className="products-btn-show-more">Show More</button>
      </div>
    </section>
  );
}