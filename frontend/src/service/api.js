const API_BASE_URL= 'http://localhost:8000'

export default class ApiService{
    static async sendPrompt(prompt) {
        try {
            const response = await fetch(`${API_BASE_URL}/ask`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({prompt})
            
        })
        return response.json();
        } catch (error) {
            console.error("Erreur API :", error.message);
        }
        return response.json();
    }
        static async sendprompt(prompt, onChunk) {
    const response = await fetch(`${API_BASE_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    if (!response.ok) throw new Error("Erreur API");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = "";

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        onChunk(chunk); 
    }

    return result;
    }

}