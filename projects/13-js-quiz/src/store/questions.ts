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
      const response = await fetch('http://localhost:5173/data.json')
      const json = await response.json()
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

      set({questions})
    }
  }
})
