import { Container, Stack, Typography } from "@mui/material";

import { useQuestionsStore } from "./store/questions";

import { JavaScriptLogo } from "./components/logos/JavaScriptLogo";
import { Start } from "./components/Start";
import { Game } from "./components/Game";

import "./App.css";

function App() {
  const questions = useQuestionsStore((state) => state.questions);

  console.log(questions);

  return (
    <>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h2">JavaScript Quiz</Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </>
  );
}

export default App;
