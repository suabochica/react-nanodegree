import { useQuestionsStore } from "../store/questions";

export const useQuizData = () => {
  const questions = useQuestionsStore((state) => state.questions);

  // 👇 No usamos la destructuración en el useQuestionStore, porque
  // se están observando los cambios en todo el estado y por ende
  // se renderiza el componente cada vez que cambia cualquier propiedad
  // const { questions } = useQuestionsStore(state => state);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { userSelectAnswer, correctAnswer } = question;

    if (userSelectAnswer == null) unanswered++;
    else if (userSelectAnswer === correctAnswer) correct++;
    else incorrect++;
  });

  return { correct, incorrect, unanswered };
}