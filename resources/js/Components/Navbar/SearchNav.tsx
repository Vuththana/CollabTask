import { FaSearch } from "react-icons/fa";

const SearchNav = () => {
    return (
        <div
            className="flex flex-1 gap-4 md:ml-8 items-center w-full"
        >
            {/* Input  */}
            <div
                className="relative w-full max-w-md"
            >
                <FaSearch 
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" 
                />
                <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed
                     placeholder:text-gray-400 bg-background disabled:opacity-50 pl-10 md:text-sm"
                    placeholder="Search tasks, projects..." 
                />
            </div>

        </div>
    );
};

export default SearchNav;