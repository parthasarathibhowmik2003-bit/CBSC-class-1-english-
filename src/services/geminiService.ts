import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function askHomeworkHelper(question: string, chapterTitle?: string) {
  if (!process.env.GEMINI_API_KEY) {
    return "I'm sorry, my brain is not connected right now. (API Key missing)";
  }

  try {
    const context = chapterTitle ? `The student is asking about the chapter "${chapterTitle}". ` : "";
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `${context}You are a friendly teacher for a Class 1 student. Answer the following question simply and gently: ${question}`,
      config: {
        systemInstruction: "You are a helpful, encouraging, and friendly teacher for 6-7 year old children. Use simple words and keep answers short.",
      }
    });

    return response.text || "I'm not sure how to answer that. Try asking something else!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! I am feeling a bit tired. Can we try again later?";
  }
}
