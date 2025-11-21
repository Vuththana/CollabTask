import { Project } from "@/types";
import StatsCard from "./ProjectView/StatsCard";


interface ProjectViewProps {
    project: Project[];
}

const ProjectView = ({project}: ProjectViewProps) => {
    return (
        <div className="container space-y-6 p-6">
            <div className="flex items-center gap-4">

                {/* Project Stats */}
                {project.map((p) => (
                <div className="flex-1">
                    <h2 className="text-3xl font-medium">{p.name}</h2>
                    <p>{p.description}</p>
                </div>
                ))}
            </div>
            
            {/* Stats Card */}
            <StatsCard />
        </div>
 

    )
}

export default ProjectView;