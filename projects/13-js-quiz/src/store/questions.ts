import { create } from "zustand"
import { persist } from "zustand/middleware"
import { type Question } from "./question.types"
import confetti from "canvas-confetti"

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  nextQuestion: () => void
  previousQuestion: () => void
  resetGame: () => void
}

export const useQuestionsStore = create<State>()(persist((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const response = await fetch('http://localhost:5173/data.json')
      const json = await response.json()
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

      set({ questions })
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get()
      const copyQuestions = structuredClone(questions)
      const questionIndex = copyQuestions.findIndex((question) => question.id === questionId)
      const questionInfo = copyQuestions[questionIndex]
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
      if (isCorrectUserAnswer) confetti()

      // Actualizar la información de las preguntas copiadas

      copyQuestions[questionIndex] = {
        ...questionInfo,
        userSelectAnswer: answerIndex,
        isCorrectUserAnswer
      }

      // Actualizar el estado

      set({ questions: copyQuestions })
    },
    nextQuestion: () => {
      const { questions, currentQuestion } = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) set({ currentQuestion: nextQuestion })
    },
    previousQuestion: () => {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion + 1
      if (previousQuestion >= 0) set({ currentQuestion: previousQuestion })
    },
    resetGame: () => {
      set({ questions: [], currentQuestion: 0 })
    },
  }
}, {
  name: 'questions',
  getStorage: () => localStorage
}))
