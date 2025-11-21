import { LucideCalendar, LucideCircleCheck, LucideClock, LucideUsers } from "lucide-react"

const StatsCard = () => {
  return (
    <div className="flex-1">
        <div className="p-6">
            <div className="grid md:grid-cols-4 gap-4">

                {/* Tasks done */}
                <div className="border rounded-lg p-8 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="flex space-x-3 -space-y-1">
                        {/* Icon */}
                        <div className="bg-purple-400 w-10 h-10 flex items-center justify-center bg-opacity-50 rounded-lg">
                            <LucideCircleCheck className="text-purple-600"/>
                        </div>
                        {/* Stats */}
                        <div>
                            <h2 className="text-2xl font-medium">16/24</h2>
                            <p className="text-gray-500 text-sm">Tasks done</p>
                        </div>
                    </div>
                </div>

                {/* Progress */}
                <div className="border rounded-lg p-8 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="flex space-x-3 -space-y-1">
                        {/* Icon */}
                        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-green-400 bg-opacity-40">
                            <LucideClock className="text-green-500"/>
                        </div>
                        {/* Stats */}
                        <div>
                            <h2 className="text-2xl font-medium">68%</h2>
                            <p className="text-gray-500 text-sm">Progress</p>
                        </div>
                    </div>
                </div>

                {/* End Date */}
                <div className="border rounded-lg p-8 bg-white shadow-sm transition-all hover:shdaow-md hover:-translate-y-1">
                    <div className="flex space-x-3 -space-y-1">
                        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-yellow-300 bg-opacity-60">
                            <LucideCalendar className="text-yellow-800"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-medium">Apr, 30, 2024</h2>
                            <p className="text-sm text-gray-500">Due Date</p>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="border rounded-lg p-8 bg-white shadow-sm transition-all hover:shdaow-md hover:-translate-y-1">
                    <div className="flex space-x-3 -space-y-1">
                        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-purple-400 bg-opacity-60">
                            <LucideUsers className="text-purple-600"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-medium">4</h2>
                            <p className="text-sm text-gray-500">Team Members</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default StatsCard