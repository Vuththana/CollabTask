import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import ProjectsCard from "./Overview/ProjectsCard";

interface Team {
    id: number;
    name: string;
    owner_id: number;
  }

interface Project {
    id: number;
    name: string;
    team_id: number
}
interface OverviewProps {
    teams: Team;
}

const Overview = ({teams}: OverviewProps) => {
    const [projects, setProjectsData] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    const memoProjects = useMemo(() => {
        return projects.filter(p => p.team_id === teams.id)
    }, [projects, teams.id])


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
                    <ProjectsCard projects={memoProjects}/>
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