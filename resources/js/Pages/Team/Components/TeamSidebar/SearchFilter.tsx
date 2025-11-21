import { debounce } from "lodash";
import { LucideX } from "lucide-react";
import { Dispatch, SetStateAction, useCallback } from "react";

interface SearchFilterProps {
    setClickFilter: Dispatch<SetStateAction<boolean>>
    setSearchFilter: Dispatch<SetStateAction<string>>
}

const SearchFilter = ({setClickFilter, setSearchFilter}: SearchFilterProps) => {
    const handleSearch = useCallback(
        debounce((value: string) => {
            setSearchFilter(value)
        }, 300), []
    )
  return (
    <div className="w-full" >
            <div className="flex">
                <input 
                className="w-full border-0 transition-all focus:border-b focus-visible:ring-0 text-[18px]"
                type="text" 
                name="search-filter" 
                placeholder="Filter by team or project"
                onChange={(e) => handleSearch(e.target.value)}
                />
                <div className="relative">
                    <button className="absolute right-0 top-[21%]" onClick={() => {setClickFilter(false); setSearchFilter("")}}>
                        <LucideX className="w-6 h-6" />
                    </button>
                </div>
            </div>
    </div>

  )
}

export default SearchFilter;