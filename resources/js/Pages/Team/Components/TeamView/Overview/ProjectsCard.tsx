import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import { Project } from "@/types";
import { fallbackNameFormat } from "@/utils/avatarFallback";
import { formatDate } from "@/utils/formatDate";
import { isEmpty } from "lodash";
import { LucideCalendar, LucideCheckCircle2, LucideUsers2 } from "lucide-react";
import React, { Dispatch, SetStateAction} from "react";

interface ProjectsCardProps {
  projects: Project[];
  setSelectedProject: Dispatch<SetStateAction<number | null>>
}

const ProjectsCard = React.memo(({projects, setSelectedProject}: ProjectsCardProps) => {

    if (isEmpty(projects)) {
        return <p>Looks like you don't have any projects going on, create one.</p>
    }
    const members = projects.flatMap(p => p.members);
    const membersName = members.map((m) => (m.name))
    console.log(membersName[0])
    membersName.forEach(m => {
        console.log(m.toLocaleString().charAt(0))
    });
    
  return (
      <div>
          <h1 className="font-semibold text-2xl mb-4">Active Projects</h1>
          <div className="grid lg:grid-cols-3 gap-4">
            { projects.map ((p) => (

              <div className="border rounded-xl shadow-sm bg-white hover:shadow-md
              transition-all hover:cursor-pointer hover:-translate-y-1" key={p.id} onClick={()=> setSelectedProject(p.id)}>
                 <div className="p-6">
                     <div className="mb-4 flex items-start justify-between">
                         <div>
                             {/* Project Title */}
                             <h1 className="text-[19px] font-semibold">
                                 {p.name}
                             </h1>
                                 
                             {/* Description */}
                             <p className="text-sm text-gray-500">{p.description}</p>
                         </div>

                         {/* Status */}
                         <div className="border bg-green-400 text-sm font-medium text-white px-3 py-1 rounded-xl">
                             <p>{p.status}</p>
                         </div>
                     </div>

                     {/* Progress */}
                     <div className="mb-4 space-y-2">
                       <div className="flex justify-between">
                         <p className="text-gray-500 text-sm">Progress</p>
                         <p className="text-gray-500 text-sm">45%</p>
                       </div>

                         <div className="w-full bg-gray-200 rounded-full">
                             <div className="bg-purple-600 rounded-full h-2.5 w-[45%]"></div>
                         </div>
                     </div>

                     <div className="border-t py-6">
                         {/* Date Posted */}
                         <div className="flex items-start justify-between text-gray-500 text-sm">
                             <div className="flex justify-between gap-3">
                                 {/* Date Posted */}
                                 <div className="flex items-center gap-1">
                                     <LucideCheckCircle2/>
                                     <p>16/24</p>
                                 </div>
                                 
                                 {/* Deadline */}
                                 <div className="flex items-center gap-1">
                                     <LucideCalendar />
                                     <p>{formatDate(p.end_date)}</p>
                                     <p></p>
                                 </div>
                             </div>

                             {/* Users */}
                             <div className="flex items-center gap-1">
                               <LucideUsers2 className="w-4 h-4"/>
                                 <div className="flex -space-x-3">
                                    {members
                                    .filter(m => m.project_id === p.id)
                                    .map((m) =>
                                    <Avatar className="h-7 w-7 border-2 border-card transition-transform hover:z-10 hover:scale-110">
                                        <AvatarFallback>{fallbackNameFormat(m.name)}</AvatarFallback>
                                    </Avatar>
                                    )}
      
                                 </div>

                             </div>
                         </div>

                     </div>
                 </div>
             </div>
            ))}

              
          </div>
      </div>
  )
}
)
export default ProjectsCard;
