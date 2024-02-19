import { Button } from "@mui/material";
import { useQuizData } from "../hooks/useQuizData";
import { useQuestionsStore } from "../store/questions";


export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuizData();
  const resetGame = useQuestionsStore((state) => state.resetGame)

  return (
    <footer>
      <strong>{`✅ ${correct} correctas - ⛔️ ${incorrect} incorrectas - 👻 ${unanswered} sin responder`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button
          onClick={() => resetGame()}
        >
          Resetear juego
        </Button>
      </div>
    </footer>
  );
};
