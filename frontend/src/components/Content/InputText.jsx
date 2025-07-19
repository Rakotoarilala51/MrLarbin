import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlusCircle, FaArrowCircleUp } from "react-icons/fa";

export default function InputText({prompt, setPrompt, onSubmitPrompt}) {
  const hasContent = prompt.trim().length > 0;
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(prompt)
    onSubmitPrompt(prompt)
    setPrompt("")
  };
  return (
    <div className="m-3 flex justify-center">
      <div className=" bg-stone-200 rounded-2xl">
        <form action="" onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            name=""
            id=""
            className="resize-none outline-0 w-2xl rounded-lg p-1 h-10 m-2 text-xs"
            onChange={(e)=>setPrompt(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key==="Enter"){
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          ></textarea>
          <div className="flex justify-between m-2">
            <FaPlusCircle className="text-black" />
            <button className={`hover:cursor-pointer `} disabled={!hasContent}>
              <FaArrowCircleUp className={`${hasContent?"text-black":"text-stone-500"}`} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
