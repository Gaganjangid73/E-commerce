import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './sidebar'
import Adminheader from './header'


const layout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        {/* admin slider bar */}
        <AdminSidebar/>
       <div className='flex felx-1 flex-col'>
        {/* admin header */}
        <Adminheader/>
        <main className='flex flex-1 bg-muted/40 p-4 md:p-6'>
            <Outlet/>
        </main>
       </div>
    </div>
  )
}

export default layout
