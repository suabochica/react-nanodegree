import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useEffect } from 'react'

import { useStore } from './hook/useStore'

import './App.css'
import { AUTO_LANGUAGE } from './constants'
import { SwapIcon } from './components/Icons'
import { TextArea } from './components/TextArea'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { translate } from './services/translate'

function App() {

  const {
    loading,
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

  useEffect(() => {
    if (fromText === '') return

    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch((error) => { setResult('error') })
  }, [fromText, fromLanguage, toLanguage])

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
              loading={loading}
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
