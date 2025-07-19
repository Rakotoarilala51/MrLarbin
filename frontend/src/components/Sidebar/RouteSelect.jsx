import React from 'react'
import {MdExplore} from "react-icons/md"
import {IoLibrarySharp, IoFileTray, IoReload} from "react-icons/io5"

export default function RouteSelect() {
  return (
    <div className='m-3 mt-5 space-y-2'>
        <Route Icon={MdExplore} onClick={()=>console.log("explore")} Title={"Explore"} isSelected={false}/>
        <Route Icon={IoLibrarySharp} onClick={()=>console.log("explore")} Title={"Library"} isSelected={false}/>
        <Route Icon={IoFileTray} onClick={()=>console.log("explore")} Title={"Files"} isSelected={false}/>
        <Route Icon={IoReload} onClick={()=>console.log("explore")} Title={"History"} isSelected={false}/>
    </div>
  )
}
const Route = ({Icon, Title, isSelected, onClick})=>{
    return (<div className='relative'>
        <button onClick={onClick} className={`flex items-center justify-start rounded-xl gap-2 text-base ${
        isSelected?"bg-white border border-indigo-300":"hover:bg-stone-300 bg-transparent shadow-none"
      }`}>
            <Icon/>
            <span>{Title}</span>
        </button>

    </div>)
}
