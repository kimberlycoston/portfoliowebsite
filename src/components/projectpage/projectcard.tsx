import { ArrowUpRight } from "lucide-react"
import type { Project } from "./project-types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
      <a href={`/projects/${project.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
      </div>
      <div className="px-6 pb-6">
        <a
          href={project.dribbleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          View in Dribbble
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

