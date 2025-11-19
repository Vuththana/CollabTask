import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import Input from '../../../../Components/ui/input';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../../../../Components/ui/button';
import { useForm } from '@inertiajs/react';
import { LucideCalendar, LucidePlus } from 'lucide-react';
import Textarea from '@/Components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover';
import { Calendar } from '@/Components/ui/calendar';


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
    const [startDate, setStartDate] = useState<Date | undefined> (undefined)
    const [endDate, setEndDate] = useState<Date | undefined> (undefined)
    const {data, setData, errors, post, processing, } = useForm<{
        name: string;
        description: string;
        start_date?: string;
        end_date?: string;
    }>({
        name: '',
        description: '',
        start_date: undefined,
        end_date: undefined,
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
                    {errors.name && <div className='text-sm text-red-600 mt-1'>{errors.name}</div>}

                    <Textarea
                    label='Description'
                    placeholder="Describe your project"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    />
                    
                    {/* Start Date */}
                    <Popover>
                        <label className='text-sm font-medium'>Start Date</label>
                        <PopoverTrigger className='w-full border rounded-lg py-2' tabIndex = {-1} asChild>
                            <div className='relative px-4 text-sm text-muted-foreground'>
                                <LucideCalendar className='absolute top-[28%] w-4 h-4'/>
                                <button type='button' className='w-full text-left px-7'>{startDate ? startDate.toLocaleDateString() : "Select date"}</button>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent align='end'>
                            <Calendar 
                            mode='single'
                            selected={startDate}
                            onSelect={(selectedDate) => {
                                setStartDate(selectedDate)
                                if(selectedDate) {
                                    const formatted = selectedDate.toISOString().slice(0, 19).replace('T', ' ')
                                    setData('start_date', formatted)
                                } else
                                {
                                    setData('start_date', undefined)
                                }
                            }}
                            />
                            
                        </PopoverContent>
                        {errors.start_date && <div className='text-sm text-red-600 mt-1'>{errors.start_date}</div>}
                    </Popover>

                    {/* End Date */}
                    <Popover>
                        <div>
                        <label className='text-sm font-medium'>End Date</label>
                        </div>
                        <PopoverTrigger className='w-full border rounded-lg py-2' tabIndex = {-1} asChild>
                            <div className='relative px-4 text-sm text-muted-foreground'>
                                <LucideCalendar className='absolute top-[28%] w-4 h-4'/>
                                <button type='button' className='w-full text-left px-7'>{endDate ? endDate.toLocaleDateString() : "Select date"}</button>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent align='end' className='text-sm font-medium'>
                            <Calendar 
                            mode='single'
                            selected={endDate}
                            onSelect={(selectedDate) => {
                                setEndDate(selectedDate)
                                if(selectedDate) {
                                    const formatted = selectedDate.toISOString().slice(0, 19).replace('T', ' ')
                                    setData('end_date', formatted)
                                } else
                                {
                                    setData('end_date', undefined)
                                }
                            }}
                            />
                        </PopoverContent>
                        {errors.end_date && <div className='text-sm text-red-600 mt-1'>{errors.end_date}</div>}
                    </Popover>


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