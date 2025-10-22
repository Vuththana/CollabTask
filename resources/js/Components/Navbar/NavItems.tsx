import { FaBell, FaRegBell, FaRegUser } from "react-icons/fa";

const NavItems = () => {
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
            <div
                className="p-3 rounded-full bg-gradient-to-tl from-purple-400 to bg-purple-700 text-white"
            >
                <FaRegUser />
            </div>

        </div>
    );
}

export default NavItems