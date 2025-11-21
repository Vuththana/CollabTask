import { Dispatch, lazy, SetStateAction, Suspense, useEffect, useMemo, useState } from "react";
import { LucideSettings } from "lucide-react";
import { isEmpty } from "lodash";
import Overview from "./TeamView/Overview";
import InviteTeam from "./TeamView/InviteTeam";
import GenerateTeamLink from "./TeamView/GenerateTeamLink";
import { Project, Team } from "@/types";

interface TeamViewProps {
    projects: Project[]
    teams: Team | null
    setSelectedProjectId: Dispatch<SetStateAction<number | null>>
    refreshKey: number
}

const mainTabs = [
    {key: "overview", label: "Overview"},
    {key: "discussions", label: "Discussions"},
    {key: "files", label: "Files"},
]

const settingsTabs = [
    {key: "members", label: "Members"},
    {key: "pending", label: "Pending Members"},
    {key: "blocked", label: "Blocked"},
    {key: "invite-link-settings", label: "Settings"},

]

const TeamView = ({teams, projects, refreshKey, setSelectedProjectId}: TeamViewProps) => {
    const [mode, setMode] = useState<"main" | "settings"> ("main");
    const [activeTab, setActiveTab] = useState("overview");

    if (isEmpty(teams)) return <p>Team not found</p>

    const projectOverview = useMemo(() => {
        return projects.filter(p => p.team_id === teams.id)
    }, [projects])
    
    const tabComponents: Record<string, React.ReactNode> = {
        overview: <Overview teams={teams} projects={projectOverview} setSelectedProjectId={setSelectedProjectId}/>,
        discussions: <div>Discussion</div>,
        files: <div>Files</div>,

        members:<div>Member</div>,
        pending:<div>Pending</div>,
        blocked:<div>Blocked</div>,
        "invite-link-settings":<div>Settings</div>,
    }
    
    useEffect(() => {
        setMode("main");
        setActiveTab("overview");
    }, [refreshKey])

    return (
        <div className="w-full">
            <div className="container mx-auto flex h-16 gap-4 px-4 border-b">
                <div className="flex flex-1 gap-4 items-center w-full">
                    <p className="text-xl font-medium">🏷️ {teams.name}</p>
                        <div className="space-x-3">
                            { (mode === "main" ? mainTabs : settingsTabs).map((tab) => (
                                <button onClick={() => setActiveTab(tab.key as any)} 
                                key={tab.key}
                                className={`transition-transform ${activeTab === tab.key ? "border-b-2 border-purple-500 font-medium" : ""}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center">
                        <InviteTeam />
                        <GenerateTeamLink id={teams.id} name={teams.name} />
                        <div>
                            <button onClick={() => {
                                setMode("settings"); 
                                setActiveTab("members")
                            }}
                                className='border rounded-r-lg px-2 py-1 hover:bg-gray-200/80'>
                                <LucideSettings className='w-5 h-5'/>
                            </button>
                        </div>
                </div>
                
            </div>
            <div>
                {tabComponents[activeTab] ?? "Page Not found"}
            </div>

        </div>
    )
}

export default TeamView;