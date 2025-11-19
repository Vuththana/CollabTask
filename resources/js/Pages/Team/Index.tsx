import NoTeam from "./Components/NoTeam";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect, useMemo, useState } from "react";
import TeamSidebar from "./Components/TeamSidebar";
import TeamView from "./Components/TeamView";
import ProjectView from "./Components/ProjectView";
import { usePage } from "@inertiajs/react";

interface Team {
  id: number;
  name: string;
  owner_id: number;
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

export default function Index({projects, teams, ...props}: ProjectUsers) {
  const [selectedTeamId, setSelectedTeamId] = useState<number|null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number|null>(null);
  const [projectId, setProjectId] = useState<number | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const {flash} = usePage().props;

  useEffect(() => {
    if (flash.created_project) {
      setSelectedProjectId(flash.created_project.id);
      setSelectedTeamId(null);
      setRefreshKey(prev => prev + 1);
    }
  }, [flash.created_project]);

  const handleSelectTeam = (teamId: number | null) => {
    setSelectedTeamId(teamId);
    setSelectedProjectId(null);
    setRefreshKey(prev => prev + 1);
  };
  
  const handleSelectProject = (projectId: number | null) => {
    setSelectedProjectId(projectId);
    setSelectedTeamId(null);
    setRefreshKey(prev => prev + 1);    
  };

  const selectedTeam = useMemo(() => {
    return teams.find(t => t.id === selectedTeamId) || null
  }, [teams, selectedTeamId])

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
              selectedProjectId={selectedProjectId}  
              setRefreshKey={setRefreshKey}
              {...props}
              />

              
              <div className="flex-1">
                {selectedTeamId ? (
                  <TeamView teams={selectedTeam} refreshKey={refreshKey}/>
                ) : selectedProjectId ? (
                  <ProjectView projectId={selectedProjectId}/>
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
