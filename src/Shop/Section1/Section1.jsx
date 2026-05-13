import React, { useState } from "react";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import "./Section1.css";

const Section1 = ({
  totalResults = 32,
  currentPage = 1,
  perPage = 16,
}) => {
  const [showCount, setShowCount] = useState(perPage);
  const [sortBy, setSortBy] = useState("Default");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  const start = (currentPage - 1) * showCount + 1;
  const end = Math.min(currentPage * showCount, totalResults);

  return (
    <div className="section1-toolbar">
      {/* Left side */}
      <div className="toolbar-left">
        <button className="toolbar-btn filter-btn" title="Filter">
          <FiFilter size={16} />
          <span>Filter</span>
        </button>

        <div className="toolbar-divider" />

        <div className="view-toggle">
          <button
            className={`toolbar-icon-btn ${viewMode === "grid" ? "active" : ""}`}
            title="Grid view"
            onClick={() => setViewMode("grid")}
          >
            <FiGrid size={16} />
          </button>

          <button
            className={`toolbar-icon-btn ${viewMode === "list" ? "active" : ""}`}
            title="List view"
            onClick={() => setViewMode("list")}
          >
            <FiList size={16} />
          </button>
        </div>

        <div className="toolbar-divider" />

        <span className="results-text">
          Showing {start}–{end} of {totalResults} results
        </span>
      </div>

      {/* Right side */}
      <div className="toolbar-right">
        <div className="toolbar-control">
          <label className="control-label" htmlFor="show-select">Show</label>
          <select
            id="show-select"
            className="toolbar-select"
            value={showCount}
            onChange={(e) => setShowCount(Number(e.target.value))}
          >
            {[8, 16, 24, 32].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="toolbar-control">
          <label className="control-label" htmlFor="sort-select">Short by</label>
          <select
            id="sort-select"
            className="toolbar-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {["Default", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"].map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Section1;