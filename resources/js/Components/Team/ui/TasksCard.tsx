import { LucideCalendar, LucideCheckCircle2, LucideClock, LucideUsers2 } from "lucide-react";

const contextProviders = [
    {id:1, title: "Tasks Done", value: "16/24", icon: <LucideCheckCircle2 />},
    {id:2, title: "Progress", value: "68%", icon: <LucideClock />},
    {id:3, title: "Due Date", value: "Apr 30, 2024", icon: <LucideCalendar />},
    {id:4, title: "Team Members", count: 4, icon: <LucideUsers2 />}
]

const TasksCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {contextProviders.map((context => (
            <div className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-white" key={context.id}>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
                {/* Title */}
                <h2 className="text-md text-gray-500 font-semibold">
                {context.title}
                </h2>

                {/* Counter */}
                <p className="text-[30px] font-bold">
                    {context.value ?? context.count}
                </p>
            </div>

            <div className="p-3 rounded-lg bg-gradient-to-tl
                from-purple-400 to bg-purple-700 text-3xl text-white">
                {context.icon}
            </div>
           
          </div>

        </div>
      </div>
        )))}
      
    </div>
  );
};

export default TasksCard;
