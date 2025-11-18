import { Button } from "@/Components/ui/button";
import { LucideLink2, LucideSettings, LucideUserPlus2 } from "lucide-react";
import { useEffect, useState } from "react";
import InviteTeam from "./InviteTeam";
import GenerateTeamLink from "./GenerateTeamLink";

interface Team {
    id: number;
    name: string;
    owner_id: number;
}

interface TeamViewProps {
    teams: Team[]
    selectedTeamId: number
}

const tabs = [
    {key: "overview", label: "Overview"},
    {key: "discussions", label: "Discussions"},
    {key: "done", label: "Files"},
]

const TeamView = ({teams, selectedTeamId}: TeamViewProps) => {
    const [activePath, setActivePath] = useState("overview");

    const team = teams.find(team => team.id === selectedTeamId);
    
    if (!team) return <p>Team not found</p>
    return (
        <div className="w-full">
            <div className="container mx-auto flex h-16 gap-4 px-4 border-b">
                <div className="flex flex-1 gap-4 items-center w-full">
                    <p className="text-xl font-medium">🏷️ {team.name}</p>
                        <div className="space-x-3">
                            {tabs.map((tab) => (
                                <button onClick={() => setActivePath(tab.key)} 
                                key={tab.key}
                                className={`transition-transform ${activePath === tab.key ? "border-b-2 border-purple-500 font-medium" : ""}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                </div>
                <div className="flex items-center">
                        <InviteTeam />
                        <GenerateTeamLink id={selectedTeamId} name={team.name} />
                        {/* {buttonTabs.map((buttonTab)=>(
                            <button onClick={buttonTab.action} key={buttonTab.title} className="border first:rounded-l-md last:rounded-r-md px-2 py-1 hover:bg-gray-200/80">
                                <buttonTab.icon className="w-5"/>
                            </button>
                        ))} */}
                </div>

            </div>

        </div>
    )
}

export default TeamView;