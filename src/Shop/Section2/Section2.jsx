import React, { useState, useEffect, useRef } from "react";
import { FiShare2, FiShuffle } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Section2.css";

const products = [
  {
    id: 1,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
  {
    id: 2,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=400&q=80",
  },
  {
    id: 3,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
  },
  {
    id: 4,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  },
  {
    id: 5,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.600.000",
    badge: "-30%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
  {
    id: 6,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=400&q=80",
  },
  {
    id: 7,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
  },
  {
    id: 8,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  },
  {
    id: 9,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
  {
    id: 10,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=400&q=80",
  },
  {
    id: 11,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
  },
  {
    id: 12,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  },
  {
    id: 13,
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.600.000",
    badge: "-30%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
  {
    id: 14,
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=400&q=80",
  },
  {
    id: 15,
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    badgeType: "discount",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
  },
  {
    id: 16,
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  },
];

const ITEMS_PER_PAGE = 8;
const TOTAL_PAGES = 3;

/* ── Single card ── */
const ProductCard = ({ product, index }) => {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <div
      ref={cardRef}
      className={`product-card ${visible ? "card-visible" : ""}`}
      style={{ "--delay": `${index * 80}ms` }}
    >
      <div className="card-image-wrap">
        <img src={product.image} alt={product.name} className="card-img" loading="lazy" />

        {product.badge && (
          <span className={`card-badge ${product.badgeType === "new" ? "badge-new" : "badge-discount"}`}>
            {product.badge}
          </span>
        )}

        {/* Overlay */}
        <div className="card-overlay">
          <button className={`btn-add-cart ${addedToCart ? "added" : ""}`} onClick={handleAddToCart}>
            {addedToCart ? "✓ Added" : "Add to cart"}
          </button>
          <div className="card-actions">
            <button className="action-btn">
              <FiShare2 size={14} /> Share
            </button>
            <button className="action-btn">
              <FiShuffle size={14} /> Compare
            </button>
            <button className="action-btn like-btn" onClick={() => setLiked(!liked)}>
              {liked ? <AiFillHeart size={14} /> : <AiOutlineHeart size={14} />} Like
            </button>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-name">{product.name}</h3>
        <p className="card-desc">{product.desc}</p>
        <div className="card-pricing">
          <span className="card-price">{product.price}</span>
          {product.oldPrice && (
            <span className="card-old-price">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Main Section2 ── */
const Section2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageKey, setPageKey] = useState(0);

  const handlePage = (page) => {
    setCurrentPage(page);
    setPageKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="section2">
      <div key={pageKey} className="product-grid">
        {products.map((p, i) => (
          <ProductCard key={`${p.id}-${pageKey}`} product={p} index={i} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? "page-active" : ""}`}
            onClick={() => handlePage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="page-btn page-next"
          onClick={() => handlePage(Math.min(currentPage + 1, TOTAL_PAGES))}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Section2;