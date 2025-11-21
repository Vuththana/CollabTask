import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import ProjectsCard from "./Overview/ProjectsCard";
import { Project, Team } from "@/types";


interface OverviewProps {
    projects: Project[];
    teams: Team;
    setSelectedProjectId: Dispatch<SetStateAction<number | null>>
}

const Overview = ({teams, projects, setSelectedProjectId}: OverviewProps) => {

    return (
        <div>
            <div className="container space-y-6 p-6" key={teams.id}>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <h2 key={teams.id} className="text-3xl font-medium">{teams.name}</h2>
                    </div>
                </div>

                <div>
                    <ProjectsCard projects={projects} setSelectedProject={setSelectedProjectId}/>
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