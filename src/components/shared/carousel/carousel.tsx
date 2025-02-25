"use client"

import React, { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "../ui/carousel-card"
import "./carousel.css"

interface Project {
  title: string
  subTitle: string
  description: string
  // techStack: string[]
  srcURL: string
  thumbnail: string
}

const projects: Project[] = [
  {
    title: "BluePrint",
    subTitle: "Hospital Policy Chatbot",
    description:
      "A hospital policy chatbot that allows staff to quickly find and reference hospital policies by asking questions, improving efficiency and compliance.",
    // techStack: ["Python"],
    srcURL: "https://github.com/example/passgen",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
  },
  {
    title: "Shelf Sense",
    subTitle: "Hospital Supply Item Locator",
    description:
      "A voice-activated hospital supply locator that helps nurses find items quickly using a variety of intuitive inputs.",
    // techStack: ["React", "Node.js", "MongoDB"],
    srcURL: "https://github.com/example/project-manager",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
  },
  {
    title: "Vein Finder",
    subTitle: "lorem ipsum",
    description:
      "A DIY device designed to enhance vein visibility for IV access.",
    // techStack: ["Next.js", "React", "Stripe", "MongoDB"],
    srcURL: "https://github.com/example/ecommerce-platform",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
  },
  {
    title: "RNsight",
    subTitle: "Nurse pay transparency website",
    description:
      "A nurse pay transparency platform where nurses can anonymously share and compare salaries, promoting pay equity and informed career decisions.",
    // techStack: ["React", "API Integration", "CSS3"],
    srcURL: "https://github.com/example/weather-app",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
  },
  {
    title: "AI/VR De-escalation Training for Nurses",
    subTitle: "lorem ipsum",
    description:
      "An immersive virtual reality training tool that helps healthcare staff practice patient de-escalation techniques with real-time AI feedback.",
    // techStack: ["Vue.js", "JavaScript", "CSS3"],
    srcURL: "https://github.com/example/task-tracker",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
  },
  {
    title: "ECG Rhythm Interpretation",
    subTitle: "lorem ipsum",
    description:
      "An at-home device designed to recognize ECG rhythm changes through predictive analysis.",
    // techStack: ["Gatsby", "React", "GraphQL"],
    srcURL: "https://github.com/example/portfolio-website",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
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

  const rotateCarousel = (direction: "next" | "prev") => {
    setRotation((prev) => prev + (direction === "next" ? rotationAmt : -rotationAmt))
  }

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
            <ProjectCard key={i} project={project} rotation={i * rotationAmt} isFocused={getFocusedIndex() === i} />
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
        <div className="mt-4 flex gap-2 flex-wrap">
          {/* {project.techStack.map((tech, i) => ( */}
            {/* <span */}
              {/* key={i} */}
              {/* className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full hover:bg-gray-300 transition-colors" */}
            {/* > */}
              {/* {tech} */}
            {/* </span> */}
          {/* ))} */}
        </div>
        <div className="bottom-button-container">
          <a href={project.thumbnail} className="glow-on-hover" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.srcURL} className="bottom-button" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </Card>
  )
}
