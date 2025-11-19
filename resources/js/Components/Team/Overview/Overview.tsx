import axios from "axios";
import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";

interface Team {
    id: number;
    name: string;
    owner_id: number;
  }

interface Project {
    id: number;
    name: string;
}
interface OverviewProps {
    teams: Team;
}

const Overview = ({teams}: OverviewProps) => {
    const [projects, setProjectsData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchProject = async() => {
            try {
                const res = await axios.get(`/teams/projects`)
                setProjectsData(res.data.projects)
            } catch(err: any) {
                setError(err);
            } finally {
                setLoading(false)
            }
        }
        fetchProject();
    }, [])

    if(loading) {
        return (
            <p>Fetching</p>
        )
    }

    return (
        <div>
            <div className="container space-y-6 p-6" key={teams.id}>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <h2 key={teams.id} className="text-3xl font-medium">{teams.name}</h2>
                    </div>
                </div>

                <div>
                    <ProjectsCard projects={projects.filter(p => p.id === teams.id)}/>
                </div>
                
                {/* 
                <div>
                    <OverallProgress />
                </div> */}
            </div>
        </div>
    )

}

export default Overview;