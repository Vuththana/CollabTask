import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import Input from '../../ui/input';
import { useState } from 'react';
import { Button } from '../../ui/button';
import { useForm } from '@inertiajs/react';
import {upperFirst} from "lodash";
import { LucideUserPlus2 } from 'lucide-react';


interface Role {
    name: string; 
}

interface OptionProps {
    roles: Role[]
    onClickInviteTeam: () => void
}


const InviteTeam = () => {
    const [open, setOpen] = useState(false)

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        role: '',
      });
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        post(route('global.invite'), {
          onSuccess: () => {
            reset();
            setOpen(false);
          },
        });
      };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <form onSubmit={handleSubmit} id="invite-member-form">
        <DialogTrigger asChild>
            <button 
                className='border px-2 py-1 hover:bg-gray-200/80'>
                <LucideUserPlus2 />
            </button>
        </DialogTrigger>

        <DialogContent>
            <DialogTitle>
                Invite member
            </DialogTitle>

            <DialogHeader>
                Start a new project and invite team members to collaborate.
            </DialogHeader>
            <div>
                <div className='space-y-2'>
                    {/* Project Name */}
                    <Input
                    label='Email'
                    type="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    />
                    <p className='text-sm text-gray-500'>
                        The recipient will receive the email only if they have created an account on our website.
                    </p>
                    
                    {/* 
                    Select Project
                    <div className='grid md:grid-cols-1 gap-2'>
                        <div>
                            <label className="text-sm font-medium">Select Project</label>
                            <Select
                                value={data.project_id}
                                onValueChange={(value) => setData('project_id', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select project"/>

                                    <SelectContent>
                                        {options.map((project) => (
                                            <SelectItem key={project.id} value={project.id}>
                                                {project.name}
                                        </SelectItem>
                                        ))}

                                    </SelectContent>
                                </SelectTrigger>
                            </Select>
                            {errors.project_id && (
                                <p className="text-sm text-red-500">{errors.project_id}</p>
                                )}
                        </div>
                    </div> */}

                    {/* Roles */}
                    {/* <div>
                    <label className="text-sm font-medium">Select Role</label>
                        <Select
                            value={data.role}
                            onValueChange={(value) => setData('role', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select role"/>

                                    <SelectContent>
                                        {roles.map((role) => (
                                            <SelectItem key={role.name} value={role.name}>
                                                {upperFirst(role.name.replace("_", " "))}
                                        </SelectItem>
                                        ))}

                                    </SelectContent>
                                </SelectTrigger>
                        </Select>
                    </div> */}

                {/* Footer */}
                <DialogFooter>
                    <Button type='button' variant="outline" onClick={() => setOpen(false)}>Close</Button>
                    <Button type='submit' disabled={processing} form="invite-member-form" className="bg-purple-500 hover:bg-purple-500/80">Invite member</Button>
                </DialogFooter>
                </div>
            </div>
        </DialogContent>

        </form>
    </Dialog>
    )
} 

export default InviteTeam;