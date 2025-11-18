import Navbar from '@/Components/Navbar/Navbar'
import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'

export default function MainLayout({ children }: any) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
    <Navbar />
    <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto">
            {children}
        </main>
    </div>
</div>
  )
}
