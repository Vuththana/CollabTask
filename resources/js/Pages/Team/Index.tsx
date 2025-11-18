import TeamCard from "@/Components/Team/TeamCard";
import NoTeam from "../NoTeam";
import MainLayout from "@/Layouts/MainLayout";
import TeamSidebar from "@/Components/Team/TeamSidebar";
import { useState } from "react";
import TeamView from "@/Components/Team/ui/TeamView";

interface Team {
  id: number;
  name: string;
  owner_id: number;
}

interface Member {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Role {
  name: string; 
}

interface Invitations {
  id: number
  recipient_name: string
  invited_by:string
}

interface Project {
  id: number;
  team_id: number;
  name: string;
  description?: string
}


interface ProjectUsers {
  projects: Project[]
  invited_by: Invitations[]
  teams: Team[]
  roles: Role[]
}

export default function Index({projects, invited_by, teams}: ProjectUsers) {
  const [selectedTeamId, setSelectedTeamId] = useState<number|null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number|null>(null);

  const handleSelectProject = (projectId: number | null) => {
    setSelectedProjectId(projectId);
    setSelectedTeamId(null);
  };

  const handleSelectTeam = (teamId: number | null) => {
    setSelectedTeamId(teamId);
    setSelectedProjectId(null);
  };
  


  return (
    
          <>
            { teams.length === 0 ? (<NoTeam />) 
            : 
            ( 
            <div className="flex h-full"> 
              <TeamSidebar 
              teams={teams} 
              projects={projects}
              onSelectTeam={handleSelectTeam}
              onSelectProject={handleSelectProject}
              />

              
              <div className="flex-1">
                {selectedTeamId ? (
                  <TeamView teams={teams} selectedTeamId={selectedTeamId}/>
                ) : selectedProjectId ? (
                  <div>Project</div>
                ) : (
                  <div>Default</div>
                )}
              </div>
            </div>
             
            )
            }
      
            {/* Team Members */}
            {/* <TeamCard  invited_by={invited_by} /> */}

          </>
  );
}

Index.layout = (page?:any) => <MainLayout>{page}</MainLayout> 
