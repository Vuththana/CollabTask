import NoTeam from "./Components/NoTeam";
import MainLayout from "@/Layouts/MainLayout";
import { useEffect, useMemo, useState } from "react";
import TeamSidebar from "./Components/TeamSidebar";
import TeamView from "./Components/TeamView";
import ProjectView from "./Components/ProjectView";
import { usePage } from "@inertiajs/react";
import { Team, Project } from "@/types";

interface ProjectUsers {
  projects: Project[]
  teams: Team[]
}

export default function Index({projects, teams, ...props}: ProjectUsers) {
  const [selectedTeamId, setSelectedTeamId] = useState<number|null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number|null>(null);
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

  const selectedProject = useMemo(() => {
    return projects.filter(p => p.id === selectedProjectId) || null
  }, [projects, selectedProjectId])

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
                  <ProjectView project={selectedProject}/>
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
