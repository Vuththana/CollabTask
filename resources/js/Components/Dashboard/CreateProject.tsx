import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import Input from '../ui/input';
import { useState } from 'react';
import Textarea from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { CalendarIcon, X } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';

const CreateProject = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [open, setOpen] = useState(false)
    const [selectedMember, setSelectedMembers] = useState<string[]>([])
    const [date, setDate] = useState<Date | undefined>(undefined)

    const teamMembers = [
        {id: "jd", name: "John Doe", initials: "JD"},
        {id: "sk", name: "Sarah Kim", initials: "SK"},
        {id: "mk", name: "Mike Johnson", initials: "MK"},
        {id: "sk", name: "Emily Watson", initials: "EW"},
        {id: "am", name: "Alex Morgan", initials: "AM"},
    ]

    const toggleMembers = (memberId: string) => {
        setSelectedMembers((prev) =>
            prev.includes(memberId) ? prev.filter((id) => id !== memberId) : [...prev, memberId]
        )
    }
    return (
        <Dialog open={open} onOpenChange={() => setOpen(true)}>
        <form action="/" method='post'>
        <DialogTrigger asChild>
            <button 
                className='px-6 py-3 rounded-xl font-semibold
                text-white bg-gradient-to-tl from-purple-400 to bg-purple-700 hover:bg-purple-400/90'>
                + New Project
            </button>
        </DialogTrigger>

        <DialogContent>
            <DialogTitle>
                Create a new project
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
                    value={name}
                    placeholder="Enter Project Name"
                    onChange={(e) => setName(e.target.value)}
                    />

                    {/* Description */}
                    <Textarea 
                    label='Description'
                    value={description}
                    placeholder='Describe your project goals and objectives...'
                    onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className='grid md:grid-cols-2 gap-2'>
                        {/* Select Department */}
                        <div>
                            <label className='text-sm font-medium' htmlFor='department'>Departmenet</label>
                            <Select name='department'>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select department"/>

                                    <SelectContent>
                                        <SelectItem value='engineering'>Engineering</SelectItem>
                                        <SelectItem value='design'>Design</SelectItem>
                                        <SelectItem value='marketing'>Marketing</SelectItem>
                                        <SelectItem value='product'>Product</SelectItem>
                                        <SelectItem value='sales'>Sales</SelectItem>
                                    </SelectContent>
                                </SelectTrigger>
                            </Select>
                        </div>

                        {/* Deadline */}
                        <div className=''>
                            <label className='text-sm font-medium' htmlFor="date">Deadline</label>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button 
                                        variant="outline"
                                        id='date'
                                        className='w-full justify-start text-left font-normal'
                                    >
                                        {date ? date.toDateString(): "Select date"}
                                        <CalendarIcon className='mr-2 h-4 w-4' />
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent className='w-auto overflow-hidden p-0 align-start'>
                                    <Calendar 
                                        mode='single' 
                                        selected={date} 
                                        captionLayout='dropdown' 
                                        onSelect={(date) => {
                                            setDate(date)
                                            setOpen(true)
                                        }}/>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    
                        {/* Team Member */}
                        <div className='space-y-2'>
                            <label className='text-sm font-medium' htmlFor="member">Team Members</label>
                            <div className='grid grid-cols-2 gap-2'>
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        onClick={() => toggleMembers(member.id)}
                                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors
                                         border-gray-300 hover:bg-purple-500 ${selectedMember.includes(member.id) ? "border-purple-500" : ""}`}
                                    >
                                        <Avatar className='h-8 w-8'>
                                            <AvatarFallback className='bg-gray-300'>{member.initials}</AvatarFallback>
                                        </Avatar>
                                        <span className='text-sm font-medium'>{member.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {selectedMember.length > 0 && (
                            <div className='flex flex-wrap gap-2 pt-2'>
                                {selectedMember.map((memberId: string) => {
                                    const member = teamMembers.find((m) => m.id === memberId);
                                    return (
                                        <Badge key={memberId} variant="secondary" className='gap-1 bg-gray-200'>
                                            {member?.name}
                                            <X 
                                                className='h-3 w-3 cursor-pointer'
                                                onClick={() => toggleMembers(memberId)}
                                            />
                                        </Badge>
                                    )
                                })}
                            </div>
                        )}

                {/* Footer */}
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                    <Button type='submit' className="bg-purple-500 hover:bg-purple-500/80" onClick={() => setOpen(false)}>Submit</Button>
                </DialogFooter>
                </div>
            </div>
        </DialogContent>

        </form>
    </Dialog>
    )
} 

export default CreateProject;