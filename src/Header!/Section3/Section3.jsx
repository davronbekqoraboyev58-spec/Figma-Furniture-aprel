import { useState } from "react";
import "./Section3.css";
import img56 from "../../assets/img56.png";

const rooms = [
  {
    id: 1,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
    image: img56,
  },
  {
    id: 2,
    number: "02",
    category: "Living Room",
    title: "Pure Harmony",
    image: img56,
  },
  {
    id: 3,
    number: "03",
    category: "Dining Room",
    title: "Warm Gather",
    image: img56,
  },
  {
    id: 4,
    number: "04",
    category: "Kitchen",
    title: "Clean Slate",
    image: img56,
  },
];

export default function Section3() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => Math.max(0, p - 1));
  const next = () => setActive((p) => Math.min(rooms.length - 1, p + 1));

  return (
    <section className="rooms-section">
      {/* Left text block */}
      <div className="rooms-text">
        <h2 className="rooms-heading">
          50+ Beautiful rooms <br /> inspiration
        </h2>
        <p className="rooms-sub">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button className="rooms-btn">Explore More</button>
      </div>

      {/* Slider */}
      <div className="rooms-slider">
        {rooms.map((room, i) => {
          const offset = i - active;
          // only show current and next card fully
          const visible = offset === 0 || offset === 1;
          return (
            <div
              key={room.id}
              className={`room-card ${offset === 0 ? "active" : ""} ${
                offset === 1 ? "next" : ""
              } ${!visible ? "hidden" : ""}`}
              style={{ "--offset": offset }}
            >
              <img src={room.image} alt={room.title} className="room-img" />
              <div className="room-label">
                <span className="room-num">
                  {room.number} <span className="room-line">——</span>{" "}
                  {room.category}
                </span>
                <div className="room-footer">
                  <h3 className="room-title">{room.title}</h3>
                  <button className="room-arrow" onClick={next}>
                    →
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Nav arrow */}
        <button
          className="slider-nav-btn"
          onClick={next}
          disabled={active >= rooms.length - 1}
        >
          ›
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {rooms.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? "dot-active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}