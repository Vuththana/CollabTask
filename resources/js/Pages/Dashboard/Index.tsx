import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import StatsCard from "@/Components/Dashboard/StatsCard";
import ActiveProjects from "@/Components/Dashboard/ActiveProjects";
import CreateProject from "@/Components/Team/CreateProject";
import NoTeam from "../NoTeam";
import MainLayout from "@/Layouts/MainLayout";

interface Team {
    id: number;
    name: string;
    owner_id: number;
}

interface DashboardProps {
    teams: Team[];
}

export default function Index({ teams }: DashboardProps) {
    return (



                    <div className="container space-y-8 p-6">
                        {teams.length == 0 ? (
                            <NoTeam />
                        ) : (
                            <>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-3xl font-bold tracking-tight">
                                            Dashboard
                                        </h1>
                                        <span className="text-gray-500">
                                            Welcome back! Here's your project
                                            overview
                                        </span>
                                    </div>

                                    {/* Project Form */}
                                    <div>
                                        <CreateProject />
                                    </div>
                                </div>

                                {/* Stats Card */}
                                <StatsCard />

                                {/* Active Projects */}
                                <ActiveProjects />
                            </>
                        )}
                    </div>
    );
}

Index.layout = (page?:any) => <MainLayout>{page}</MainLayout> 
