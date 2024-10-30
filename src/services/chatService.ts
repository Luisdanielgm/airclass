import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-002",
});

const generationConfig = {
  temperature: 0.9,
  topP: 0.8,
  topK: 40,
  maxOutputTokens: 2048,
};

let chatHistory: { role: "user" | "model"; parts: { text: string }[] }[] = [];

function getContextPrompt(userMessage: string, transcription: string): string {
  return `Eres un asistente especializado en valuación aeronáutica. Tu función es ayudar a los estudiantes a comprender mejor el contenido del curso.

CONTEXTO DEL CURSO:
${transcription}

DIRECTRICES:
- Mantén un tono profesional y técnico
- Proporciona explicaciones claras y precisas sobre conceptos de valuación aeronáutica
- Usa ejemplos específicos de la industria aeronáutica
- Responde en español
- Si la pregunta no está relacionada con el contenido del curso, sugiere amablemente volver al tema

Mensaje del estudiante: ${userMessage}`;
}

export async function getChatResponse(userMessage: string, transcription: string) {
  try {
    const chat = model.startChat({
      generationConfig,
      history: chatHistory,
    });

    const contextPrompt = getContextPrompt(userMessage, transcription);
    const result = await chat.sendMessage(contextPrompt);
    const response = result.response.text();

    chatHistory.push(
      { role: "user", parts: [{ text: userMessage }] },
      { role: "model", parts: [{ text: response }] }
    );

    return response;
  } catch (error) {
    console.error('Error en la conversación:', error);
    throw error;
  }
}

export function resetChatHistory() {
  chatHistory = [];
} 