import { Button } from "@/Components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger  } from "@/Components/ui/popover";
import { useForm } from "@inertiajs/react";
import { FaBell, FaDoorOpen, FaRegBell, FaRegUser, FaUser } from "react-icons/fa";

const NavItems = () => {
    const {post} = useForm()

    const handleLogout = () => {
        post(route('logout'))
    }
    return(
        <div
            className="flex items-center gap-2"
        >
            <div
            className="hover:bg-purple-700 p-3 hover:text-white transition-all duration-150 rounded-md
            hover:cursor-pointer"
            >
                <FaRegBell />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="p-3 rounded-full bg-gradient-to-tl from-purple-400 to bg-purple-700 text-white hover:cursor-pointer">
                        <FaRegUser />
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                        <DropdownMenuItem className="p-0">
                            <Button variant="ghost" className="w-full flex items-center gap-3 text-gray-500 hover:text-white hover:bg-purple-500">
                                <FaUser />
                                Edit Profile
                            </Button>
                        </DropdownMenuItem>
                        
                        {/* Logout */}
                        <DropdownMenuItem className="p-0">
                            <Button variant="ghost" onClick={handleLogout} className="w-full flex items-center gap-3 text-gray-500 hover:text-white  hover:bg-purple-500">
                                <FaDoorOpen />
                                Logout
                            </Button>
                        </DropdownMenuItem>

                </DropdownMenuContent>
   
            </DropdownMenu>

        </div>
    );
}

export default NavItems