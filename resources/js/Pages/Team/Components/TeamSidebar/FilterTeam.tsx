import { Button } from "@/Components/ui/button";
import { LucideFilter } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FilterTeamProps {
    setClickFilter: Dispatch<SetStateAction<boolean>>
}

const FilterTeam = ({setClickFilter}: FilterTeamProps) => {
    return (
        <div>
            <Button className="bg-purple-500 hover:bg-purple-500/80" onClick={() => setClickFilter(true)}>
                <LucideFilter />
            </Button>
        </div>

    )
}

export default FilterTeam;