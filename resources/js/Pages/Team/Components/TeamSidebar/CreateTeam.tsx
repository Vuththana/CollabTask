import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import Input from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm } from "@inertiajs/react";
import { LucidePlus } from "lucide-react";
import { useState } from "react";

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
    return (
        <Dialog open={createTeamOpen} onOpenChange={setCreateTeamOpen}>
        <DialogTrigger asChild>
            <Button className="bg-purple-500 hover:bg-purple-500/80">
                <LucidePlus />
            </Button>
        </DialogTrigger>


        <DialogContent>
        <form onSubmit={handleTeamCreate} id="form-team-create">
            <DialogTitle>Create New Team</DialogTitle>
            <DialogDescription>Set up your team and start collaborating with others</DialogDescription>
            <div className="space-y-4 pt-1">
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
                <div>
                    <p className="text-[11px]">Community guidelines</p>
                    <p className="text-sm text-gray-500">
                        Be kind and respectful to your fellow community members. 
                        Don't be rude or cruel. 
                        Participate as yourself and don't post anything that violates Community Standards.
                    </p>
                </div>

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