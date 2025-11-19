
import { LucideBell, LucideEllipsis, LucideLink2, LucidePen, LucideSettings, LucideTrash, LucideUserMinus2, LucideUserPlus2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";

const contexts = [
    {title: "Share join link", icon: LucideLink2},
    {title: "Invite members", icon: LucideUserPlus2},
    {title: "Notifications", icon: LucideBell},
    {title: "Manage team", icon: LucideSettings},
    {title: "Edit team", icon: LucidePen},
    {title: "Leave team", icon: LucideUserMinus2},
    {title: "Delete team", icon: LucideTrash},
];


const DropdownTeam = () => {


  return (
    <DropdownMenu>
    <DropdownMenuTrigger tabIndex={-1}>
        <LucideEllipsis className="w-5"/>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">
        {contexts.map((context) => (
             <DropdownMenuItem className="hover:bg-gray-200" key={context.title}>
             <div>
                 <button className="flex items-center gap-1 ">
                    {<context.icon className="w-4 h-4"/>}
                    {context.title}
                 </button>
             </div>
         </DropdownMenuItem>
        ))}
       
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default DropdownTeam;
