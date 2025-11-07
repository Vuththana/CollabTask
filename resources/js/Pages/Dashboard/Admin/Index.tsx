import Sidebar from '@/Components/Sidebar/Sidebar'
import Navbar from "@/Components/Navbar/Navbar";
import StatsCard from '@/Components/Dashboard/StatsCard';
import ActiveProjects from '@/Components/Dashboard/ActiveProjects';
import CreateProject from '@/Components/Dashboard/CreateProject';


export default function Index() {
  return (
    <div
        className='flex h-screen flex-col overflow-hidden bg-background'
    >
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar /> 

        <main className='flex-1 overflow-y-auto'>
            <div className='container space-y-8 p-6'>
              <div className='flex justify-between items-center'>
                <div>
                  <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
                  <span className='text-gray-500'>Welcome back! Here's your project overview</span>
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
            </div>  
        </main>
    </div>
  </div>
  )
}
