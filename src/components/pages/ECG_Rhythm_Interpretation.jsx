import React from 'react';
import CaseStudy from '../casestudy/casestudy';
import './ECG_Rhythm_Interpretation.css';
import RadioButton from '../shared/radiobutton/radiobutton';

const ECG_Rhythm_Interpretation = () => {
  const sections = [
    {
      titles: ['Chief Complaint', 'The Why'],
      backgroundColor: '#ffebc8', // Skin color
      titleColor: '#4c64de', // Blue
      content: 'This section explains the diagnosis and its importance...',
      images: ['/ECG_1.png', '/images/ecg2.png'],
    },
    {
      titles: ['Relevant Past Medical History', 'The Constraints'],
      backgroundColor: '#ffebc8', // Skin color
      titleColor: '#4c64de', // Blue
      content: 'This section explains the diagnosis and its importance...',
      images: ['/ECG_1.png', '/images/ecg2.png'],
    },
    {
      titles: ['My Role'],
      backgroundColor: '#00a2c1', // Light blue
      titleColor: '#f9ae37', // Gold
      content: 'Here’s what I did in this project...',
      images: ['/images/ecg3.png'],
    },
    {
      titles: ['The Treatment Plan', 'The How'],
      backgroundColor: '#f9ae37', // Gold
      titleColor: '#ff4631', // Red
      content: 'This section outlines the treatment plan...',
      images: ['/images/ecg4.png'],
    },
    {
      titles: ['The Post-Op Report', 'The Results'],
      backgroundColor: '#ffebc8', // Skin color
      titleColor: '#4c64de', // Blue
      content: 'This is the metrics, testimonials, before/after, outcomes of the project...',
      images: ['/ECG_1.png', '/images/ecg2.png'],
    },
    {
      titles: ['The Discharge Summary', 'Lessons Learned'],
      backgroundColor: '#00a2c1', // Light blue
      titleColor: '#f9ae37', // Gold
      content: 'Here is what I learned from the project...',
      images: ['/images/ecg3.png'],
    },
    {
      titles: ['The Upcoming Appointments', 'The Next Steps'],
      backgroundColor: '#f9ae37', // Gold
      titleColor: '#ff4631', // Red
      content: 'This is what I hope to do next with this...',
      images: ['/images/ecg4.png'],
    },
    // Add more sections following the same structure
  ];

  console.log(sections); // Verify the data is correct

  return (
    <div className="ecg-page">
      <div className="header-container">

        <RadioButton />
      </div>
      <CaseStudy sections={sections} />
    </div>
  );
}  

export default ECG_Rhythm_Interpretation;