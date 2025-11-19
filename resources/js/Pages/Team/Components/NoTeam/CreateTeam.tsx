import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import Input from "@/Components/ui/input";

import { FaPlus } from "react-icons/fa";
import { useForm } from "@inertiajs/react";

const CreateTeam = () => {
    const [createTeamOpen, setCreateTeamOpen] = useState(false);

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        description: '',
    })  

    const handleTeamCreate = (e?:any) => {
        e.preventDefault()
        post(route('teams.store'))
    }

    return(
        <Dialog open={createTeamOpen} onOpenChange={setCreateTeamOpen}>
        <DialogTrigger asChild>
            <div className="rounded-lg border-2 bg-card text-card-foreground shadow-sm p-6 transition-all hover:border-primary/50 hover:shadow-md">

                <div className="space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-purple-500 to bg-purple-800/70 flex items-center justify-center mx-auto">
                        <FaPlus className="text-white"/>
                    </div>
                    <div>
                        <p className="text-md font-medium">Create Team</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm text-muted-foreground">Start your own team and invite members</p>
                    </div>
                </div>

            </div>
        </DialogTrigger>
        
        <DialogContent>
            <form onSubmit={handleTeamCreate} id="form-team-create">
            <DialogTitle>Create New Team</DialogTitle>
            <DialogDescription>
                Set up your team and start collaborating with others
            </DialogDescription>
            <div className="space-y-4 pt-4">
                <div className="space-y-2">
                    <Label htmlFor="team-name">Team Name</Label>
                    <Input 
                    id="team-name"
                    placeholder="Enter team name"
                    value={data.name}
                    type="text"
                    onChange={(e) => setData('name', e.target.value)}/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="team-description">Description (optional)</Label>
                    <Input
                    id="team-description"
                    type="text"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    placeholder="What's this team about?"
                    />
                </div>

                <p className="text-sm text-gray-500">
                    <p className="text-[11px]">Community guidelines</p>
                    Be kind and respectful to your fellow community members. 
                    Don't be rude or cruel. 
                    Participate as yourself and don't post anything that violates Community Standards.
                </p>
                <Button
                    type="submit"
                    disabled={processing}
                    form="form-team-create"
                    className="w-full bg-gradient-to-tr from-purple-500 to bg-purple-800/70 hover:bg-purple-500/90"
                >
                    Create Team
                </Button>
            </div>
            </form>
        </DialogContent>

    </Dialog>
    )
}

export default CreateTeam