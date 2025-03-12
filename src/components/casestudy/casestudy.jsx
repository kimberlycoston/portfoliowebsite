import React from 'react';
import TypingEffect from './typingeffect';
import './casestudy.css';

const CaseStudy = ({ sections }) => {
  return (
    <div className="case-study-container">
      {sections.map((section, index) => (
        <section
          key={index}
          className="case-study-section"
        >
          <div className="section-content">
            <TypingEffect titles={section.titles} color={section.titleColor} />
            <p>{section.content}</p>
            {section.images && (
              <div className="image-grid">
                {section.images.map((image, i) => (
                  <img key={i} src={image} alt={`Visual ${i + 1}`} />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CaseStudy;