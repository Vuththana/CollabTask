import Sidebar from '@/Components/Sidebar/Sidebar'
import Navbar from "@/Components/Navbar/Navbar";

export default function Index() {
  return (
    <div
        className='flex h-screen flex-col overflow-hidden bg-background'
    >
        <Navbar />
        <Sidebar />
    </div>
  )
}
