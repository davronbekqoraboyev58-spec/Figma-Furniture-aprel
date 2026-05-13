import "./Section.css";
import img56 from "../../../assets/img56.png";

// img56.png ishlatilmoqda barcha rasmlar uchun

const photos = [
  { id: 1, cls: "photo-tall-left",   src: img56, alt: "room 1" },
  { id: 2, cls: "photo-wide-top",    src: img56, alt: "room 2" },
  { id: 3, cls: "photo-tall-mid",    src: img56, alt: "room 3" },
  { id: 4, cls: "photo-square-tr",   src: img56, alt: "room 4" },
  { id: 5, cls: "photo-tall-right",  src: img56, alt: "room 5" },
  { id: 6, cls: "photo-square-bl",   src: img56, alt: "room 6" },
  { id: 7, cls: "photo-wide-bot",    src: img56, alt: "room 7" },
  { id: 8, cls: "photo-square-bm",   src: img56, alt: "room 8" },
  { id: 9, cls: "photo-square-br",   src: img56, alt: "room 9" },
];

export default function Section4() {
  return (
    <section className="funiro-section">
      <div className="funiro-header">
        <p className="funiro-sub">Share your setup with</p>
        <h2 className="funiro-title">#FuniroFurniture</h2>
      </div>

      <div className="funiro-grid">
        {photos.map((p) => (
          <div key={p.id} className={`funiro-cell ${p.cls}`}>
            <img src={p.src} alt={p.alt} />
            <div className="funiro-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}