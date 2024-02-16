import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
  const questions = useQuestionsStore((state) => state.questions);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { userSelectAnswer, correctAnswer } = question;

    if (userSelectAnswer == null) unanswered++;
    else if (userSelectAnswer === correctAnswer) correct++;
    else incorrect++;
  });

  return (
    <footer>
      <strong>{`✅ ${correct} correctas - ⛔️ ${incorrect} incorrectas - 👻 ${unanswered} sin responder`}</strong>
    </footer>
  );
};
