    import Input from "@/Components/ui/input";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchNav = () => {
    const [search, setSearch] = useState("");
    return (
        <div
            className="flex flex-1 gap-4 md:ml-8 items-center w-full"
        >
            {/* Input  */}
            <div
                className="relative flex-1 w-full max-w-md"
            >
                <FaSearch 
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" 
                />
                <Input
                className='pl-10'
                type="text"
                value={search}
                placeholder="Search tasks, projects..."
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>

        </div>
    );
};

export default SearchNav;