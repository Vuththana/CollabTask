
import { LucideEllipsis, LucidePen, LucideTrash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";

const contexts = [
    {title: "Edit Project", icon: LucidePen},
    {title: "Delete Project", icon: LucideTrash}
];


const DropdownProject = () => {


  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="pr-2" tabIndex={-1}>
        <LucideEllipsis className="w-5 h-5"/>
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

export default DropdownProject;
