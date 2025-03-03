// PortfolioPage.jsx
import React from "react";
import "./portfoliopage.css";


const projects = [
  {
    title: "BluePrint",
    category: "Mobile Application",
    image: "/src/assets/project_card_images/coming_soon.png",
  },
  {
    title: "Shelf Sense",
    category: "Mobile Application",
    image: "/src/assets/project_card_images/coming_soon.png",
  },
  {
    title: "ECG Rhythm Interpretation",
    category: "Machine Learning",
    image: "/src/assets/project_card_images/ECG_1.png",
  },
  {
    title: "Vein Finder",
    category: "Hardware",
    image: "/src/assets/project_card_images/vein_finder1.png",
  },
  {
    title: "RNsight",
    category: "Website design",
    image: "/src/assets/project_card_images/RNsight_1.png",
  },
  {
    title: "VR De-esclation Training for Nurses",
    category: "AI",
    image: "/src/assets/project_card_images/VR_demo1.jpg",
  },
  
  {
    title: "Exploring the Future of Education",
    category: "Programming",
    image: "/src/assets/project_card_images/coming_soon.png",
  },
  {
    title: "Exploring the Future of Education: Pt II",
    category: "Virtual Reality",
    image: "/src/assets/project_card_images/coming_soon.png",
  },
  {
    title: "Nurse Automated Self-Scheduling",
    category: "Programming",
    image: "/src/assets/project_card_images/coming_soon.png",
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
