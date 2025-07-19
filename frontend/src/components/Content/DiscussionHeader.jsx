import React, { useState } from "react";

export default function DiscussionHeader() {
  const [selected, setSelected] = useState("");
  const options = [
    { value: "mistral", label: "Mistral 7B" },
    { value: "deepseekR1", label: "Deepseek R1" },
    { value: "llama3", label: "llama3" },
  ];
  return (
    <div className="flex justify-between p-2">
      <select
        name=""
        id="select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-20 text-xs rounded-xl border-1 border-stone-300 shadow-lg h-6 p-1"
      >
        {
            options.map((opt)=>(
                <option value={opt.value} key={opt.value}>{opt.label}</option>
            ))
        }
      </select>
      <div className="flex justify-between mr-2">
        <div className="text-end mr-1">
          <span className="block text-sm p-0 m-0">Marcus Aurelius</span>
          <span className="block text-xs p-0 m-0">marcusaurelius@gmail.com</span>
        </div>
        <img src="Aina.jpg" className="size-8 rounded-full" alt="" />
      </div>
    </div>
  );
}
