import Navbar from '@/Components/Navbar/Navbar'
import Sidebar from '@/Components/Sidebar/Sidebar'

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
