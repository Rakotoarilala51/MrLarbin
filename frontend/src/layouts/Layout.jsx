import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Discussion from '../components/Content/Discussion'
export default function Layout() {
  return (
    <div className='bg-stone-300 text-stone-950 font-orbitron'>
        <div className='grid gap-4 p-4 lg:grid-cols-[220px_1fr]'>
        <Sidebar/>
        <div className='bg-white rounded-lg h-[95vh]'>
          <Discussion/>
        </div>
        </div>

    </div>
  )
}
