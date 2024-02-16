import { create } from "zustand"
import { Question } from "./question.types"

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
}

export const useQuestionsStore = create<State>((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      set({
        questions: [
          {

              id: 1,
              question: "¿Cuál es la salida de este código?",
              code: "console.log(typeof NaN)",
              answers: [
                "undefined",
                "NaN",
                "string",
                "number"
              ],
              correctAnswer: 3
          }
        ]
      })
    }
  }
})
