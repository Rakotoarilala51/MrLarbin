import React, { useState } from "react";
import DiscussionHeader from "./DiscussionHeader";
import Chat from "./Chat";
import InputText from "./InputText";
import ApiService from "../../service/api"

export default function Discussion() {
  const [prompt, setPrompt] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const handleSubmitPrompt=async (prompt)=>{
    const promptId=discussions.length+1;
    const newDiscussion= {
      promptId,
      prompt,
      response:""
    }
    setDiscussions(prev => [...prev, newDiscussion]);
    try {
      const response= await ApiService.sendPrompt(prompt);
      console.log(response.response)
      setDiscussions(prev=>prev.map(d=>d.promptId===promptId?{...d, response:response.response}:d))
    } catch (error) {
    setDiscussions(prev =>
      prev.map(d =>
        d.promptId === promptId
          ? { ...d, response: "❌ Erreur lors de la réponse" }
          : d
      )
    );
    }
    
  }
  return (
    <div className="flex flex-col h-full flex-1">
      <DiscussionHeader />
      <Chat discussions={discussions}/>
      <InputText prompt={prompt} setPrompt={setPrompt} onSubmitPrompt={handleSubmitPrompt}/>
    </div>
  );
}
