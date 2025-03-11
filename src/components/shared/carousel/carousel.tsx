"use client"

import React, { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "../ui/carousel-card"
import "./carousel.css"
import techLogos from "./techstack";

interface Project {
  title: string
  subTitle: string
  description: string
  techStack: string[]
  srcURL: string
  thumbnail: string
}

{/* <div className="tech-stack">
  {projects.techStack.map((tech, i) => (
    <div key={i} className="tech-item">
      <img src={techLogos[tech]} alt={tech} className="tech-logo" />
      <span>{tech}</span>
    </div>
  ))}
</div> */}

const projects: Project[] = [
  {
    title: "ECG Rhythm Interpretation",
    subTitle: "Machine Learning | Edge Computing | Data Preprocessing",
    description:
      "An at-home device designed to recognize ECG rhythm changes through predictive analysis.",
    techStack: ["Pandas", "Matplotlib", "Scikitlearn", "Raspberrypi"],
    srcURL: "https://github.com/kimberlycoston/midtermaipi/tree/master",
    thumbnail: "/ECG_1.png",
  },
  {
    title: "BluePrint",
    subTitle: "Retrieval Augmented Generation | Full-stack Development | Database Management",
    description:
      "A hospital policy chatbot that allows staff to quickly find answers to any clinical care question with referenced hospital policies.",
    techStack:["Python", "Pinecone"],
    srcURL: "https://github.com/example/passgen",
    thumbnail: "/coming_soon.png",
  },
  {
    title: "Shelf Sense",
    subTitle: "Database Management | Full-stack Development | Cloud Integration",
    description:
      "A voice-activated hospital supply locator that helps nurses find items quickly using a variety of intuitive inputs.",
    techStack: ["Pandas", "Pinecone", "Firebase", "Microsoftazure"],
    srcURL: "https://github.com/example/project-manager",
    thumbnail: "/shelfsense.png",
  },
  {
    title: "Vein Finder",
    subTitle: "Light & Optics Experimentation | Rapid Prototyping | Arduino Development",
    description:
      "A DIY device designed to enhance vein visibility for IV access.",
    techStack: ["Arduino", "Autodesk"],
    srcURL: "https://github.com/example/ecommerce-platform",
    thumbnail: "/vein_finder4.png",
  },
  {
    title: "RNsight",
    subTitle: "UX/UI Design | Web Development | User Research",
    description:
      "A nurse pay transparency platform where nurses can anonymously share and compare salaries, promoting pay equity and informed career decisions.",
    techStack: ["Wordpress", "Formidable"],
    srcURL: "https://github.com/example/weather-app",
    thumbnail: "/RNsight_1.png",
  },
  {
    title: "AI/VR De-escalation Training for Nurses",
    subTitle: "LLM application | Project Management | User Research",
    description:
      "A VR training tool that helps nurses practice patient de-escalation skills with real-time AI feedback.",
    techStack: ["Microsoftazure", "Python", "Unity"],
    srcURL: "https://github.com/example/task-tracker",
    thumbnail: "/vr_demo1.png",
  },
]

export default function Projects() {
  const [rotation, setRotation] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const rotationAmt = 360 / projects.length

  const getFocusedIndex = useCallback(() => {
    return Math.round(rotation / rotationAmt) % projects.length
  }, [rotation, rotationAmt])

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(() => {
        setRotation((prev) => prev + rotationAmt)
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [isPaused, rotationAmt])

  // const rotateCarousel = (direction: "next" | "prev") => {
  //   setRotation((prev) => prev + (direction === "next" ? rotationAmt : -rotationAmt))
  // }

  const rotateCarousel = (direction: "next" | "prev") => {
    setRotation((prev) => {
      const totalDegrees = 360; // Total degrees in a circle
      const rotationIncrement = direction === "next" ? rotationAmt : -rotationAmt;
      let newRotation = prev + rotationIncrement;
  
      // Ensure the rotation stays within 0–360 degrees
      newRotation = (newRotation + totalDegrees) % totalDegrees;
  
      return newRotation;
    });
  };

  return (
    <section className="carousel-section" id="featured-projects">
      <h2 className="featured-projects">featured projects</h2>
      {/* <h2 className="featured-projects text-outline">featured projects</h2> */}
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateZ(-400px) rotateY(${-rotation}deg)`,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {projects.map((project, i) => (
            <ProjectCard
            key={i}
            project={project}
            rotation={i * rotationAmt}
            isFocused={getFocusedIndex() === i}
            />
          ))}
        </div>

        <button onClick={() => rotateCarousel("prev")} className="carousel-arrow left" aria-label="Previous project">
          <ChevronLeft />
        </button>
        <button onClick={() => rotateCarousel("next")} className="carousel-arrow right" aria-label="Next project">
          <ChevronRight />
        </button>

        <div className="carousel-nav">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setRotation(i * rotationAmt)}
              className={`nav-dot ${getFocusedIndex() === i ? "focused" : ""}`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  rotation,
  isFocused,
}: {
  project: Project
  rotation: number
  isFocused: boolean
}) {
  return (
    <Card
      className={`project-card ${isFocused ? "focused" : ""}`}
      style={{
        transform: `translateX(-50%) rotateY(${rotation}deg) translateZ(400px)`,
      }}
    >
      <div className="thumbnail-container">
        <img src={project.thumbnail || "/placeholder.svg"} alt={project.title} className="project-thumbnail" />
      </div>
      <div className="project-content">
        <h5 className="title">{project.title}</h5>
        <h5 className="subtitle">{project.subTitle}</h5>
        <p className="project-description">{project.description}</p>
        <div className="techstack">
        <span className="techstack-label">TechStack:</span> {/* Add this line */}
          {project.techStack.map((tech, i) => (
            <img
              key={i}
              src={techLogos[tech]}
              alt={tech}
              className="techstack-logo"
            />
          ))}
        </div>
        <div className="bottom-button-container">
          <a href={project.thumbnail} className="glow-on-hover" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.srcURL} className="glow-on-hover" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </Card>
  )
}
