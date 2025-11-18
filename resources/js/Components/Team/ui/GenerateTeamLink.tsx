import { Button } from '@/Components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import axios from 'axios';
import { LucideClipboardCheck, LucideLink2 } from 'lucide-react';
import { useState } from 'react';

interface GenerateTeamLinkProps {
    id: number;
    name: string;
}

const GenerateTeamLink = ({id, name}: GenerateTeamLinkProps) => {
    const [link, setLink] = useState('');

    const generateLink = async() => {
        const res = await axios.post(`/teams/${id}/invite-link`, {}, { withCredentials: true });
        setLink(res.data.invite_link);
    }

    return(
        <Dialog>
            <DialogTrigger asChild>
            <button onClick={generateLink}
                className='border px-2 py-1 hover:bg-gray-200/80'>
                <LucideLink2 />
            </button>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle className='flex items-center gap-2'><LucideClipboardCheck className='text-green-400 w-4 h-4'/> Link to "{name}" team copied</DialogTitle>
                {link ? 
                (<div className='flex items-center gap-4'>
                    <input type="text" value={link} readOnly className='rounded-lg w-full'/>
                    <Button 
                        onClick={() => navigator.clipboard.writeText(link)}
                        className='bg-purple-500 hover:bg-purple-500/80'>
                            Copy Link
                    </Button>
                </div>) 
                : 
                ("Fetching link...")}
        
            </DialogContent>
        </Dialog>
    )
} 

export default GenerateTeamLink;