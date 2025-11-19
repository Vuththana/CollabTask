import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import { LucideCalendar, LucideChartLine, LucideCheckCircle2, LucideClock, LucideFileExclamationPoint, LucideUsers2 } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number;
  name: string;
}

interface ProjectsCardProps {
  projects: Project[]
}

const ProjectsCard = ({projects}: ProjectsCardProps) => {

    const project = projects.map((p) => (
        p.name
    ));

    useEffect(() => {
        console.log(project)
    }, [project])

  return (
      <div>
          <h1 className="font-semibold text-2xl mb-4">Active Projects</h1>
          <div className="grid lg:grid-cols-3 gap-4">
              <div className="border rounded-xl shadow-sm bg-white hover:shadow-md
               transition-all hover:cursor-pointer hover:-translate-y-1">
                  <div className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                          <div>
                              {/* Project Title */}
                              <h1 className="text-[19px] font-semibold">
                                  Mobile App Redesign
                              </h1>
                                  
                              {/* Description */}
                              <p className="text-sm text-gray-500">Complete UI/UX overhual for iOS and Android</p>
                          </div>

                          {/* Status */}
                          <div className="border bg-green-400 text-sm font-medium text-white px-3 py-1 rounded-xl">
                              <p>on track</p>
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
                                      <LucideCalendar className="" />
                                      <p>Dec 15</p>
                                  </div>
                              </div>

                              {/* Users */}
                              <div className="flex items-center gap-1">
                                <LucideUsers2 className="w-4 h-4"/>
                                  <div className="flex -space-x-2">
                                      <Avatar className="h-7 w-7 border-2 border-card transition-transform hover:z-10 hover:scale-110">
                                          <AvatarFallback>V</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="h-7 w-7 border-2 border-card transition-transform hover:z-10 hover:scale-110">
                                          <AvatarFallback className="text-xs">M</AvatarFallback>
                                      </Avatar>
                                  </div>

                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  )
}

export default ProjectsCard;
