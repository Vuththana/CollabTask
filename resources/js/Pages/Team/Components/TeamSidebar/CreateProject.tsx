import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import Input from '../../../../Components/ui/input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../../../../Components/ui/button';
import { useForm, usePage } from '@inertiajs/react';
import { LucidePlus } from 'lucide-react';

interface Project {
    id: number;
    team_id: number;
    name: string;
    description?: string
  }
  
interface TeamProps {
    id: number;
    name: string;
    setRefreshKey: Dispatch<SetStateAction<number>>;
    setProjectId: Dispatch<SetStateAction<number | null>>;
}

const CreateProject = ({name, id, setRefreshKey, setProjectId, ...props}: TeamProps) => {
    const [open, setOpen] = useState(false)
    const {data, setData, post, processing, } = useForm({
        name: '',
        description: '',
    })

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        post(route("projects.store", id), {
            onSuccess: (page) => {
              const createdProject = page.props.flash?.created_project;
              if (createdProject) {
                setProjectId(createdProject.id);
                setRefreshKey((prev) => prev + 1);
                setData({ name: "", description: "" });
                setOpen(false);
              }
            },
        })
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <button className="flex text-purple-500 font-medium items-center">
            <LucidePlus className="w-[18px]" /> 
            <p className="px-3 text-sm">Add project</p>
        </button>
        </DialogTrigger>

        <DialogContent>
        <form onSubmit={handleSubmit} id="create-project-form">
            <DialogTitle>
                Create a new project in "{name}"
            </DialogTitle>
            <DialogDescription>
                Start a new project and invite team members to collaborate.
            </DialogDescription>
            <div className='pt-2'>
                <div className='space-y-2'>
                    {/* Project Name */}
                    <Input
                    label='Project Name'
                    type="text"
                    placeholder="Enter Project Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    />

                {/* Footer */}
                <DialogFooter>
                    <p className='text-sm text-gray-500'>Owner may add up to 5 projects per team.</p>
                    <Button type='button' variant="outline" onClick={() => setOpen(false)}>Close</Button>
                    <Button type='submit' disabled={processing} form="create-project-form" className="bg-purple-500 hover:bg-purple-500/80">Create Project</Button>
                </DialogFooter>
                </div>
            </div>
            </form>
        </DialogContent>


    </Dialog>
    )
} 

export default CreateProject;