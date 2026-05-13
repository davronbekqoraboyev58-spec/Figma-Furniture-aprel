import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./AboutSection.css";

const tabs = ["Description", "Additional Information", "Reviews [5]"];

const reviews = [
  { id: 1, name: "Sarah M.", rating: 5, text: "Absolutely love this sofa! The quality is outstanding and it looks exactly as pictured. Very comfortable and well-made." },
  { id: 2, name: "James K.", rating: 4, text: "Great sofa, very sturdy and the fabric feels premium. Delivery was quick and assembly was straightforward." },
  { id: 3, name: "Priya L.", rating: 5, text: "Exceeded my expectations. The craftsmanship is top-notch and it fits perfectly in my living room." },
  { id: 4, name: "Tom R.", rating: 4, text: "Solid purchase. Comfortable seating and the color matches the website photos accurately." },
  { id: 5, name: "Elena V.", rating: 5, text: "Beautiful design, premium materials. Got so many compliments from guests already!" },
];

const StarIcon = ({ filled }) => (
  filled ? <FaStar className="review-star star-filled" size={14} /> : <FaRegStar className="review-star" size={14} />
);

const additionalInfo = [
  { label: "Weight",    value: "12 KG" },
  { label: "Dimensions", value: "280 × 85 × 76 cm" },
  { label: "Material",  value: "Premium fabric, solid wood" },
  { label: "Color",     value: "Cream white" },
  { label: "Warranty",  value: "2 years" },
  { label: "Assembly",  value: "Required" },
];

/* ── Fade-in hook ── */
const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

/* ── Image card ── */
const ImgCard = ({ src, alt, delay }) => {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`as-img-card ${visible ? "img-card-visible" : ""}`}
      style={{ "--delay": delay }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [contentKey, setContentKey] = useState(0);

  const handleTab = (i) => {
    if (i === activeTab) return;
    setActiveTab(i);
    setContentKey((k) => k + 1);
  };

  return (
    <section className="about-section">
      {/* ── Tabs ── */}
      <div className="as-tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`as-tab ${activeTab === i ? "tab-active" : ""}`}
            onClick={() => handleTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      <div key={contentKey} className="as-content">

        {/* DESCRIPTION */}
        {activeTab === 0 && (
          <div className="as-description">
            <p className="as-text">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo
              speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
              the show on the road.
            </p>
            <p className="as-text">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
              engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is
              a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
              and extended highs for a sound that is both articulate and pronounced. The analogue knobs
              allow you to fine tune the controls to your personal preferences while the
              guitar-influenced leather strap enables easy and stylish travel.
            </p>

            <div className="as-images">
              <ImgCard
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                alt="Sofa front view"
                delay="0ms"
              />
              <ImgCard
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80"
                alt="Sofa side view"
                delay="120ms"
              />
            </div>
          </div>
        )}

        {/* ADDITIONAL INFORMATION */}
        {activeTab === 1 && (
          <div className="as-additional">
            <table className="as-table">
              <tbody>
                {additionalInfo.map((row, i) => (
                  <tr key={row.label} style={{ "--row-i": i }}>
                    <td className="table-key">{row.label}</td>
                    <td className="table-val">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === 2 && (
          <div className="as-reviews">
            {reviews.map((r, i) => (
              <div
                key={r.id}
                className="review-card"
                style={{ "--row-i": i }}
              >
                <div className="review-header">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <p className="review-name">{r.name}</p>
                    <div className="review-stars">
                      {Array.from({ length: 5 }, (_, j) => (
                        <StarIcon key={j} filled={j < r.rating} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;