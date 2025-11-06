import { FaClock } from "react-icons/fa";
import { FaChartLine, FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

const contextProviders = [
    {id:1, title: "Total Projects", count: 12, icon: <FaChartLine />, average: "+2 this month", statement: true},
    {id:2, title: "Active Tasks", count: 48, icon: <FaClock />, average: "8 in progress", statement: true},
    {id:3, title: "Completed", count: 156, icon: <FaCircleCheck />, average: "+12 this week", statement: true},
    {id:3, title: "Overdue", count: 3, icon: <FaCircleExclamation />, average: "-2 from last week", statement: false}
]

const StatsCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {contextProviders.map((context => (
            <div className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-white">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
                {/* Title */}
                <h2 className="text-md text-gray-500 font-semibold">
                {context.title}
                </h2>

                {/* Counter */}
                <p className="text-[30px] font-bold">
                    {context.count}
                </p>
                {/* Average */}
                <p className={`text-sm font-semibold ${context.statement ? "text-green-500" : "text-red-600"}`}>
                {context.average}
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

export default StatsCard;
