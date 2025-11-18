import { LucideCalendar, LucideMessageSquare, LucideUsers2 } from "lucide-react";
import { useEffect, useState } from "react";
import {  FaUsers } from "react-icons/fa";
import { FaDesktop, FaGear } from "react-icons/fa6";



const sidebarLinks = [
    { title: "Team", href: "/", icon: <LucideUsers2 /> },
    { title: "Chat", href: "/chat", icon: <LucideMessageSquare /> },
    // { title: "Setting", href: "/setting", icon: <FaGear /> },
    { title: "Calendar", href: "/calendar", icon: <LucideCalendar /> },

]


const Sidebar = () => {

    const location = window.location.pathname;
    const [activePath, setActivePath] = useState(location);

    useEffect(() => {
        setActivePath(location);
      }, [location]);

    return (

        <aside className ="hidden md:flex w-20 flex-col">
            <nav className="h-full px-5 py-6 overflow-y-auto bg-gray-40 border bg-white">
                <ul className="space-y-1 font-medium">
                    {sidebarLinks.map((link => (
                    <li
                        key={link.href}
                    >
                        <a href={`${link.href}`}                     
                        className={`flex flex-col items-center px-3 py-3 
                        text-gray-500 transition-colors 
                        ${activePath === link.href ? 
                        "text-purple-500" 
                        :
                        " hover:text-purple-500/90"}`}>
                            {link.icon}
                            {link.title}
                        </a>
                    </li>  
                    )))}
                </ul>
                
            </nav>
        </aside>

    )

}

export default Sidebar;
