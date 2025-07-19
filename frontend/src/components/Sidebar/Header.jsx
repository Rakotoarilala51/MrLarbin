import React from 'react'
import {FaRobot} from "react-icons/fa"

export default function Header() {
  return (
    <div className='flex items-center mt-2'>
      <span className='bg-gradient-to-br from-pink-500 to-orange-400 rounded-sm p-1'>
          <FaRobot className='text-white'/>
      </span>
      <span className='m-2'>
        <p className='text-sm font-bold block'>MrLarbin.ai</p>
      </span>
    </div>
  )
}
