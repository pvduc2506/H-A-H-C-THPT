
import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion, Topic, TrueFalseQuestion } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const QUIZ_LIST_SCHEMA = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: {
        type: Type.STRING,
        description: "The chemistry quiz question in Vietnamese.",
      },
      options: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "4 multiple choice options.",
      },
      correctAnswerIndex: {
        type: Type.INTEGER,
        description: "The index (0-3) of the correct answer.",
      },
      explanation: {
        type: Type.STRING,
        description: "Brief explanation of why the answer is correct.",
      },
    },
    required: ["question", "options", "correctAnswerIndex", "explanation"],
  }
};

const TF_QUIZ_SCHEMA = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      context: { type: Type.STRING, description: "The context or main statement for the question group." },
      statements: {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                text: { type: Type.STRING, description: "A statement related to the context." },
                isCorrect: { type: Type.BOOLEAN, description: "True if the statement is correct, false otherwise." }
            },
            required: ["text", "isCorrect"]
        },
        minItems: 4,
        maxItems: 4
      },
      explanation: { type: Type.STRING, description: "Explanation for the whole group." }
    },
    required: ["context", "statements", "explanation"]
  }
};

export const generateChemistryQuiz = async (topic: Topic): Promise<QuizQuestion[]> => {
  // Strictly target 40 questions from AI. No fallback.
  
  if (!apiKey) {
    console.error("API Key missing. Cannot generate questions.");
    return []; // UI should handle empty array as error
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Generate a mock exam with EXACTLY 40 multiple-choice questions in Vietnamese for Grade 10/11/12 Chemistry.
      Topic: "${topic.title} - ${topic.subtitle}".
      Objectives: ${topic.objectives ? topic.objectives.join("\n") : "General knowledge"}
      Context: ${topic.sections.map(s => s.title).join("; ")}...
      Requirements:
      1. Questions must be strictly relevant to the topic.
      2. Questions must vary in difficulty (Know, Understand, Apply).
      3. Output strictly valid JSON array.
      4. 4 distinct options per question.
      5. Use LaTeX for chemical formulas (e.g., $H_2SO_4$).
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: QUIZ_LIST_SCHEMA,
        systemInstruction: "You are a Vietnamese Chemistry Teacher creating a 40-question exam. Use LaTeX for formulas."
      }
    });

    if (response.text) {
      try {
        const cleanText = response.text.replace(/```json|```/g, '').trim();
        const generatedQuestions = JSON.parse(cleanText) as QuizQuestion[];
        return generatedQuestions;
      } catch (e) { 
        console.error("JSON parse error", e); 
        return [];
      }
    }

    return [];

  } catch (error) {
    console.error("Error generating quiz:", error);
    return [];
  }
};

export const generateTrueFalseQuiz = async (topic: Topic): Promise<TrueFalseQuestion[]> => {
    if (!apiKey) {
         console.error("API Key missing. Cannot generate questions.");
         return [];
    }

    try {
        const model = "gemini-2.5-flash";
        const prompt = `
            Tạo 15 câu hỏi dạng Đúng/Sai cho chủ đề Hóa học: "${topic.title}".
            Mỗi câu hỏi gồm 1 bối cảnh (context) và 4 phát biểu (statements).
            Yêu cầu:
            1. Nội dung bám sát mục tiêu: ${topic.objectives?.join(", ")}.
            2. Sử dụng LaTeX cho công thức hóa học.
            3. Mỗi phát biểu phải có đáp án true/false rõ ràng.
        `;

        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: TF_QUIZ_SCHEMA,
                systemInstruction: "Giáo viên Hóa học chuyên nghiệp. Tạo câu hỏi Đúng/Sai chất lượng cao."
            }
        });

        if (response.text) {
            const cleanText = response.text.replace(/```json|```/g, '').trim();
            return JSON.parse(cleanText) as TrueFalseQuestion[];
        }
        return [];
    } catch (e) {
        console.error("Error generating TF quiz", e);
        return [];
    }
};
