import { useQuizData } from "../hooks/useQuizData";


export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuizData();

  return (
    <footer>
      <strong>{`✅ ${correct} correctas - ⛔️ ${incorrect} incorrectas - 👻 ${unanswered} sin responder`}</strong>
    </footer>
  );
};
