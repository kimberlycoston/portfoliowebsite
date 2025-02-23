// PortfolioPage.jsx
import React from "react";
import "./portfoliopage.css";


const projects = [
  {
    title: "My UI design book",
    category: "Book",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Creating a lean design system",
    category: "Design system",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Interior design news feed",
    category: "Side project",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Qantas map search",
    category: "Product design",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Qantas homepage refresh",
    category: "Website design",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Rethinking flight search",
    category: "Speaking event",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Qantas map search",
    category: "Product design",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Qantas homepage refresh",
    category: "Website design",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Rethinking flight search",
    category: "Speaking event",
    image: "https://via.placeholder.com/300",
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-container responsive-container">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-card responsive-card">
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-image responsive-image"
          />
          <div className="portfolio-details responsive-details">
            <h3 className="portfolio-title responsive-title">{project.title}</h3>
            <p className="portfolio-category responsive-category">{project.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
