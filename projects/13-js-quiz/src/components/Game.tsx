import { useQuestionsStore } from "../store/questions";

import { Question as QuestionType } from "../store/question.types";

import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Función que se crea una sola vez.
// 👀 Si la ponemos dentro de la función Question, se estaría creando cada vez que se renderiza el componente.

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectAnswer, correctAnswer } = info;

  if (userSelectAnswer == null) return "transparent";
  if (index !== correctAnswer && index !== userSelectAnswer)
    return "transparent";
  if (index === correctAnswer) return "green";
  if (index === userSelectAnswer) return "red";

  return "transparent";
};

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClickFn = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "#222", p: 2, textAlign: "left", marginTop: 4 }}
    >
      <Typography variant="h6">{info.question}</Typography>

      <SyntaxHighlighter language="javascript" style={gruvboxLight}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectAnswer != null}
              onClick={createHandleClickFn(index)}
              sx={{ bgcolor: getBackgroundColor(info, index) }}
            >
              <ListItemText
                primary={answer}
                sx={{ fontWeight: "bold", textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const nextQuestion = useQuestionsStore((state) => state.nextQuestion);
  const previousQuestion = useQuestionsStore((state) => state.previousQuestion);
  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton onClick={previousQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton
          onClick={nextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />
    </>
  );
};
