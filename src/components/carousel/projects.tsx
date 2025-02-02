"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "../ui/card"
import "./carousel.css"

interface Project {
  title: string
  subTitle: string
  description: string
  techStack: string[]
  srcURL: string
  thumbnail: string
}

const projects: Project[] = [
  {
    title: "PassGen",
    subTitle: "Generate secure passwords easily",
    description:
      "PassGen is a Python CLI tool for generating secure, random passwords from the command line. It allows you to easily create strong and unique passwords for your accounts.",
    techStack: ["Python"],
    srcURL: "https://github.com/example/passgen",
    thumbnail: "/src/assets/project_card_images/jumprope_1.svg?height=25&width=50",
  },
  {
    title: "Project Manager",
    subTitle: "Track your projects efficiently",
    description:
      "A full-featured project management tool built with React and Node.js. Manage tasks, track progress, and collaborate with team members.",
    techStack: ["React", "Node.js", "MongoDB"],
    srcURL: "https://github.com/example/project-manager",
    thumbnail: "/placeholder.svg?height=150&width=300",
  },
  {
    title: "E-commerce Platform",
    subTitle: "Modern online shopping experience",
    description:
      "A scalable e-commerce platform built with Next.js and Stripe integration. Features include product listings, cart functionality, and secure checkout.",
    techStack: ["Next.js", "React", "Stripe", "MongoDB"],
    srcURL: "https://github.com/example/ecommerce-platform",
    thumbnail: "/placeholder.svg?height=150&width=300",
  },
  {
    title: "Weather App",
    subTitle: "Real-time weather forecasts",
    description:
      "A responsive weather application that provides real-time forecasts and weather data for locations worldwide. Built with React and integrates with a weather API.",
    techStack: ["React", "API Integration", "CSS3"],
    srcURL: "https://github.com/example/weather-app",
    thumbnail: "/placeholder.svg?height=150&width=300",
  },
  {
    title: "Task Tracker",
    subTitle: "Streamline your daily tasks",
    description:
      "A simple yet powerful task tracking application. Users can add, delete, and mark tasks as complete. Built with Vue.js and uses local storage for data persistence.",
    techStack: ["Vue.js", "JavaScript", "CSS3"],
    srcURL: "https://github.com/example/task-tracker",
    thumbnail: "/placeholder.svg?height=150&width=300",
  },
  {
    title: "Portfolio Website",
    subTitle: "Showcase your work beautifully",
    description:
      "A customizable portfolio website template for developers and designers. Built with Gatsby for fast performance and easy content management.",
    techStack: ["Gatsby", "React", "GraphQL"],
    srcURL: "https://github.com/example/portfolio-website",
    thumbnail: "/placeholder.svg?height=150&width=300",
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
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isPaused, rotationAmt])

  const rotateCarousel = (direction: "next" | "prev") => {
    setRotation((prev) => prev + (direction === "next" ? rotationAmt : -rotationAmt))
  }

  return (
    <section className="carousel-section">
      <h2 className="featured-projects">Featured Projects</h2>
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
        <h5 className="font-bold text-lg">{project.title}</h5>
        <p className="text-sm text-gray-600">{project.subTitle}</p>
        <p className="mt-2 text-sm project-description">{project.description}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 px-3 py-1 text-xs rounded-full hover:bg-gray-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <a
            href={project.srcURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[#68d372] text-white rounded-full hover:bg-[#5bc164] transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </Card>
  )
}

