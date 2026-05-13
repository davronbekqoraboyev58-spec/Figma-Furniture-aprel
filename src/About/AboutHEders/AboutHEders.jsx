import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./AboutHEders.css";

const AboutHEders = ({ crumbs = [], current = "About" }) => {
  const breadcrumbs = crumbs.length
    ? crumbs
    : [{ label: "Home", href: "/" }, { label: "About", href: "/about" }];

  return (
    <div className="about-header">
      <nav className="breadcrumb" aria-label="breadcrumb">
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            <a href={crumb.href} className="bc-link">{crumb.label}</a>
            <span className="bc-sep">
              <FiChevronRight size={14} />
            </span>
          </React.Fragment>
        ))}

        <span className="bc-divider" />

        <span className="bc-current">{current}</span>
      </nav>
    </div>
  );
};

export default AboutHEders;