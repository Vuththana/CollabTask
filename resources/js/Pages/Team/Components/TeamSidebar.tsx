import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../../../Components/ui/button";
import {LucideFilter, LucideUsers2 } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../Components/ui/avatar";

import DropdownTeam from "./TeamSidebar/DropdownTeam";
import DropdownProject from "./TeamSidebar/DropdownProject";
import CreateProject from "./TeamSidebar/CreateProject";
import CreateTeam from "./TeamSidebar/CreateTeam";

interface Team {
    id: number;
    name: string;
    owner_id: number;
}

interface Project {
    id: number;
    team_id: number;
    name: string;
    description?: string
}

interface TeamProps {
    teams: Team[];
    projects: Project[];
    onSelectTeam: (id: number) => void;
    onSelectProject: (id: number) => void
    selectedProjectId: number | null;
    setRefreshKey: Dispatch<SetStateAction<number>>;
}

const TeamSidebar = ({teams, projects, onSelectTeam, onSelectProject, selectedProjectId, setRefreshKey, ...props}: TeamProps) => {
    
    const [teamId, setActiveTeamId] = useState<number | null> (null);
    const [projectId, setActiveProjectId] = useState<number | null> (null);

    useEffect(() => {
        setActiveProjectId(selectedProjectId);
        if (selectedProjectId) setActiveTeamId(null);
      }, [selectedProjectId]);
      
    return (
        <div className ="hidden md:flex w-[420px] flex-col">
            <div className="h-full px-5 py-6 overflow-y-auto border bg-white space-y-2">
                <div className="flex justify-between">
                    <h2 className="text-[20px] font-medium">Teams</h2>
                    
                    <div className="space-x-2">
                        <Button className="bg-purple-500 hover:bg-purple-500/80">
                            <LucideFilter />
                        </Button>

                        <CreateTeam />
                    </div>

                </div>
                {teams.map((team) => (
                <div className="space-y-3" key={team.id} >
                    <div className="border-b pb-4" >
                        <div 
                        onClick={() => {setActiveTeamId(team.id); setActiveProjectId(null); onSelectTeam(team.id);}}
                        >
                            <div className={`flex justify-between items-center gap-4 rounded-lg mb-2
                            hover:bg-gray-300 hover:cursor-pointer ${teamId === team.id ? " bg-gray-200" : "" }`} >
                                <div className="w-full px-4 py-6 flex justify-between">
                                    <p className="text-md font-medium flex items-center gap-3">
                                        <Avatar>
                                            <AvatarFallback>
                                                <LucideUsers2 />
                                            </AvatarFallback>
                                        </Avatar>
                                            {team.name}
                                        </p>
                                    { (teamId === team.id) && (<DropdownTeam />)}

                                </div>
                            </div>
                        </div>



                        {projects
                                .filter(project => team.id === project.team_id)
                                .map((project) => (
                            <div   key={project.id}
                            onClick={() => {setActiveProjectId(project.id); setActiveTeamId(null); onSelectProject(project.id);}}
                            >

                                    <div 
                                    className={`flex justify-between py-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer ${projectId === project.id ? " bg-gray-200" : "" }`}>
                                        <p 
                                        className="text-md font-medium flex items-center gap-3 px-2"
                                        >
                                            🏷️ {project.name}
                                        </p>
                                        {(projectId === project.id) && (
                                            <DropdownProject />
                                        )}

                                    </div>
                            </div>
                            ))}

                            <div className="mt-1">
                                <CreateProject 
                                name={team.name}
                                id={team.id}
                                setProjectId={onSelectProject}
                                setRefreshKey={setRefreshKey}
                                {...props}/>
                            </div>

                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
} 

export default TeamSidebar