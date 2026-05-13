import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiShield, FiPackage, FiHeadphones } from "react-icons/fi";
import "./Section3.css";

const features = [
  {
    id: 1,
    icon: <FiCheckCircle size={40} className="feature-icon" />,
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  {
    id: 2,
    icon: <FiShield size={40} className="feature-icon" />,
    title: "Warranty Protection",
    subtitle: "Over 2 years",
  },
  {
    id: 3,
    icon: <FiPackage size={40} className="feature-icon" />,
    title: "Free Shipping",
    subtitle: "Order over 150 $",
  },
  {
    id: 4,
    icon: <FiHeadphones size={40} className="feature-icon" />,
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
  },
];

const Section3 = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`section3 ${visible ? "s3-visible" : ""}`}>
      <div className="s3-inner">
        {features.map((item, i) => (
          <div
            key={item.id}
            className="s3-item"
            style={{ "--i": i }}
          >
            <div className="s3-icon">{item.icon}</div>
            <div className="s3-text">
              <h4 className="s3-title">{item.title}</h4>
              <p className="s3-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;