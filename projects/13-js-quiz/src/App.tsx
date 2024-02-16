import "./App.css";
import { Container, Stack, Typography } from "@mui/material";
import { JavaScriptLogo } from "./components/logos/JavaScriptLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";

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
          <Typography variant="h2" component="h1">
            🤯 JavaScript Quiz
          </Typography>
        </Stack>

        <Start />
      </Container>
    </>
  );
}

export default App;
