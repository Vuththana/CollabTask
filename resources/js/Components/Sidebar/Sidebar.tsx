import { useEffect, useState } from "react";
import { FaFolder, FaTasks, FaUsers } from "react-icons/fa";
import { FaDesktop, FaGear } from "react-icons/fa6";

const sidebarLinks = [
    {value: "Dashboard", href: "/", icon: <FaDesktop />}, // DASHBOARD
    {value: "Projects", href: "/projects", icon: <FaFolder />}, // PROJECTS
    {value: "Tasks", href: "/tasks", icon: <FaTasks />}, // TASKS
    {value: "Team", href: "/team", icon: <FaUsers />}, // TEAM
    {value: "Setting", href: "/setting", icon: <FaGear />}, // TEAM
]


const Sidebar = () => {
    const location = window.location.pathname;
    const [activePath, setActivePath] = useState(location);

    useEffect(() => {
        setActivePath(location);
      }, [location]);

    return (
    <aside className ="fixed top-0 left-0 z-40 w-72 h-screen">
        <div className="h-full px-5 py-24 overflow-y-auto bg-gray-40 border bg-white">
            <ul className="space-y-2 font-medium">
                {sidebarLinks.map((sidebarLink => (
                  <li
                    key={sidebarLink.href}
                  >
                    <a href={`${sidebarLink.href}`}                     
                    className={`flex items-center gap-4 px-3 py-3 rounded-xl 
                     text-gray-500 transition-colors 
                     ${activePath === sidebarLink.href ? 
                    "bg-gradient-to-tr from-purple-500 to bg-purple-800/70 text-white" 
                     :
                    "hover:bg-purple-500/90 hover:text-white"}`}>
                        {sidebarLink.icon}
                        {sidebarLink.value}
                    </a>
                  </li>  
                )))}
            </ul>
            
        </div>
    </aside>
    )

}

export default Sidebar;
