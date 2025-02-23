import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/shared/ui/button"
import { ProjectCard } from "@/components/projectpage/projectcard"
import "./projectpage.css"


const projects = [
  {
    id: "ahuse",
    title: "Ahuse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%2008.13.49-ru1xproItgmSx2qa36NMMPLYaPIfAL.png",
    dribbleUrl: "https://dribbble.com",
  },
  {
    id: "app-dashboard",
    title: "App Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%2008.13.49-ru1xproItgmSx2qa36NMMPLYaPIfAL.png",
    dribbleUrl: "https://dribbble.com",
  },
  {
    id: "easy-rent",
    title: "Easy Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%2008.13.49-ru1xproItgmSx2qa36NMMPLYaPIfAL.png",
    dribbleUrl: "https://dribbble.com",
  },
];

export default function PortfolioPage() {
  return (
    <div className="project-page">
      
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
