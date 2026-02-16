
import { GoogleGenAI } from "@google/genai";

export async function getMajorAdvice(userQuery: string) {
  // Create a new GoogleGenAI instance right before making an API call to ensure it always uses 
  // the most up-to-date API key from the environment as per Google GenAI SDK guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User Query: "${userQuery}".
      
      CONTEXT: Dominican University Technology Portal.
      The student is exploring four distinct majors:
      1. Computer Science (CS): Pure software development, coding kernels/engines, high-level algorithms.
      2. Informatics: User-centric, social impact of tech, UX, project management, ethics.
      3. Data Science (DS): Statistical analysis, predictive modeling, machine learning, data visualization.
      4. Computer Information Systems (CIS): Business-focused tech, IT management, systems analysis within corporate environments.
      
      GOAL: Provide a personalized, supportive recommendation (or two) based on the user's specific interests. Help them see which major aligns with their mentioned goals.
      TONE: Professional, encouraging, and academic.
      FORMAT: Keep it to 3-5 concise sentences.`,
      config: {
        // Latency is important here, so we disable thinking budget for a faster response.
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    // The GenerateContentResponse object features a 'text' property that directly returns the extracted string output.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please explore the curriculum details below for more information!";
  }
}
