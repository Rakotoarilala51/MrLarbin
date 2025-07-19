from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
import httpx
import requests
import json

app = FastAPI()

# Autoriser React en localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/ask")
async def ask_ollama(request: Request):
   
    data = await request.json()
    prompt = data.get("prompt", "")

    if not prompt:
            return JSONResponse(status_code=400, content={"error": "Prompt manquant"})

    ollama_payload = {
        "model": "mistral",
            "prompt": prompt,
            "stream": False
    }
    
    response=requests.post("http://localhost:11434/api/generate", json=ollama_payload)
    result=response.json()
    print(result)
    return {"response":result.get("response")}
    
    #async def stream_response():
    #    async with httpx.AsyncClient(timeout=60.0) as client:
    #        async with client.stream("POST", "http://localhost:11434/api/generate", json=ollama_payload) as r:
    #            async for line in r.aiter_lines():
    #                if line.strip() == "":
    #                    continue
    #                try:
    #                    content = json.loads(line)
    #                    yield content.get("response", "")
    #                except json.JSONDecodeError:
    #                    continue

    #return StreamingResponse(stream_response(), media_type="text/plain")        

    