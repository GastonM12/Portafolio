import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido" });
    }

    const { messages, newMessage, system } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: system,
      },
      contents: [
        ...messages.map(m => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.text }],
        })),
        { role: "user", parts: [{ text: newMessage }] },
      ],
    });

    return res.status(200).json({ reply: response.text });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Error procesando la respuesta" });
  }
}
