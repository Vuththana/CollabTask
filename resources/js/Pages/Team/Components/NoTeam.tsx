

import { LucideUsers } from "lucide-react";
import { useState } from "react";
import CreateTeam from "./NoTeam/CreateTeam";
import JoinTeam from "./NoTeam/JoinTeam";


export default function Index() {
    const [createTeamOpen, setCreateTeamOpen] = useState(false);
    const [joinTeamOpen, setJoinTeamOpen] = useState(false);
    const [hasTeam, setHasTeam] = useState(false);
    const [teamName, setTeamName] = useState("");
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl w-full p-8">
                <div className="text-center space-y-6">
                    <div className="flex justify-center">
                        <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                            <LucideUsers className="w-10 h-10 text-muted-foreground"/>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">You're not a part of a team</h2>
                        <p className="text-muted-foreground mt-2">Create your own team or join an existing team.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 pt-4">
                        <CreateTeam />

                        <JoinTeam />
                    </div>
                </div>
            </div>
        </div>
    )
}