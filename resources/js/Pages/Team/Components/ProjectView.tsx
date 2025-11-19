import { Project } from "@/types";


interface ProjectViewProps {
    project: Project[];
}

const ProjectView = ({project}: ProjectViewProps) => {
    
    console.log(project)
    return (
        <div>
        {project.map((p) => (
            <div>{p.id}</div>
        ))}
        </div>
 

    )
}

export default ProjectView;