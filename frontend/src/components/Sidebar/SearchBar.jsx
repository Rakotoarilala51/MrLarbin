import React from 'react'
import {FiSearch} from 'react-icons/fi'

export default function SearchBar() {
  return (
    <div className='mt-2 mb-2 relative'>
        <input type="text" placeholder='Search chat...' className='bg-stone-50 rounded-xl p-1 pl-7 w-full outline-0 placeholder:text-stone-400'/>
        <FiSearch className='absolute top-1/2 transform -translate-y-1/2 left-2 text-stone-400'/>
    </div>
  )
}
