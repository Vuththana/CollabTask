import Sidebar from '@/Components/Sidebar/Sidebar'
import Navbar from "@/Components/Navbar/Navbar";
import StatsCard from '@/Components/Dashboard/StatsCard';

export default function Index() {
  return (
    <div
        className='flex h-screen flex-col overflow-hidden bg-background'
    >

      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar /> 

        <main className='flex-1 overflow-y-auto'>
            <div className='container space-y-8 p-6'>
              <div className='flex justify-between items-center'>
                <div>
                  <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
                  <span className='text-gray-500'>Welcome back! Here's your project overview</span>
                </div>
                <div>
                  <a href="/project/create" className='px-6 py-3 rounded-xl font-semibold
                   text-white bg-gradient-to-tl from-purple-400 to bg-purple-700 hover:bg-purple-400/90'>
                  <span>+ New Project</span>
                  </a>
                </div>
              </div>

              
              {/* Stats Card */}
              <StatsCard />
            </div>  
        </main>
    </div>
  </div>
  )
}
