import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import Input from "@/Components/ui/input";
import { LucideKeyRound, LucideMail, LucideUserPlus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export default function JoinTeam() {
    const [createTeamOpen, setCreateTeamOpen] = useState(false);
    const [teamName, setTeamName] = useState("");
    return (
        <Dialog open={createTeamOpen} onOpenChange={setCreateTeamOpen}>
            <DialogTrigger asChild>
                <div className="rounded-lg border-2 bg-card text-card-foreground shadow-sm p-6 transition-all hover:border-primary/50 hover:shadow-md">

                    <div className="space-y-3">
                        <div className="h-12 w-12 rounded-lg bg-gray-300 flex items-center justify-center mx-auto">
                            <LucideUserPlus className="text-card-foreground"/>
                        </div>
                        <div>
                            <p className="text-md font-medium">Join Team</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm text-muted-foreground">Join team by code or team email</p>
                        </div>
                    </div>

                </div>
            </DialogTrigger>
            
            <DialogContent>
                <DialogHeader>Create New Team</DialogHeader>
                <DialogDescription>
                    Set up your team and start collaborating with others
                </DialogDescription>
                <Tabs defaultValue="code">
                    <TabsList className="w-full">
                        <TabsTrigger value="code" className="w-full">Team Code</TabsTrigger>
                        <TabsTrigger value="email" className="w-full">Team Email</TabsTrigger>
                    </TabsList>
                    <TabsContent value="code">
                        <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="team-code">Team Email Address</Label>
                            <div className="relative flex-1 w-full max-w-md">
                                <LucideKeyRound 
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                                <Input
                                className="pl-10"
                                id="team-code"
                                placeholder="XXXX-XXXX-XXXX"
                                value={teamName}
                                type="text"
                                onChange={(e) => setTeamName(e.target.value)}/>
                            </div>


                            <p className="text-[13px] text-gray-500">Request to join a team using their registered email</p>
                        </div>
                        <Button 
                            className="w-full bg-gradient-to-tr from-purple-500 to bg-purple-800/70 hover:bg-purple-500/90"
                            onClick={() => {
                            setCreateTeamOpen(false);
                            }}
                        >
                            Join Team
                        </Button>
                    </div>
                    </TabsContent>

                    <TabsContent value="email">
                    <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="team-code">Enter Team Code</Label>
                            <div className="relative flex-1 w-full max-w-md">
                                <LucideMail 
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                                <Input
                                className="pl-10"
                                id="team-code"
                                placeholder="team@company.com"
                                value={teamName}
                                type="text"
                                onChange={(e) => setTeamName(e.target.value)}/>
                            </div>


                            <p className="text-[13px] text-gray-500">Ask your team admin for the invite code</p>
                        </div>
                        <Button 
                            className="w-full bg-gradient-to-tr from-purple-500 to bg-purple-800/70 hover:bg-purple-500/90"
                            onClick={() => {
                            setCreateTeamOpen(false);
                            }}
                        >
                            Request Access
                        </Button>
                    </div>
                    </TabsContent>
                </Tabs>

            </DialogContent>

        </Dialog>
    )
}
