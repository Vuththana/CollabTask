import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import Input from '../ui/input';
import { useState } from 'react';
import { Button } from '../ui/button';
import { useForm } from '@inertiajs/react';
import { LucidePlus } from 'lucide-react';

interface TeamProp {
    id: number;
    name: string;
}

const CreateProject = ({name, id}: TeamProp) => {
    const [open, setOpen] = useState(false)
    // const [date, setDate] = useState<Date | undefined>(undefined)

    const {data, setData, post, processing, errors} = useForm({
        id: id,
        name: '',
        description: '',
    })

    const handleSubmit = (e?:any) => {
        e.preventDefault();
        post(route('project.store', id))
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

            <DialogHeader>
                Start a new project and invite team members to collaborate.
            </DialogHeader>
            <div>
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