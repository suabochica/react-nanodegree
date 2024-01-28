import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'

import { useStore } from './hook/useStore'

import './App.css'
import { AUTO_LANGUAGE } from './constants'
import { SwapIcon } from './components/Icons'
import { TextArea } from './components/TextArea'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'

function App() {

  const { 
    fromLanguage,
    toLanguage,
    fromText,
    result,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interchangeLanguages
  } = useStore()

  return (
    <Container fluid>
      <h1>🔣 Translate Clone</h1>

      <Row>
        <Col xs="auto">
          <Stack gap={2}>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea
            placeholder="Introducir texto..."
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          />
          </Stack>
        </Col>

        <Col>
          <Button
            // variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <SwapIcon />
          </Button>
        </Col>

        <Col xs="auto">
          <Stack gap={2}>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            placeholder="Traducción"
            type={SectionType.To}
            value={result}
            onChange={setResult}
          />
          </Stack>
       </Col>
      </Row>
    </Container>
  )
}

export default App
