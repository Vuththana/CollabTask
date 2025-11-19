const OverallProgress = () => {
    return (
        <div className="border rounded-lg shadow-sm hover:shadow-sm">
            <div className="p-6">

                <div className="flex justify-between">
                    {/* Title */}
                    <h2 className="text-md font-medium">Overall Progress</h2>
                    {/* Progress  */}
                    <p className="text-gray-500">68%</p>
                </div>

                {/*Progress bar */}
                <div className="mt-4">
                    <div className="w-full h-4 border bg-gray-300 rounded-full">
                        <div className="bg-purple-600 h-3.5 rounded-l-lg w-[68%]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverallProgress