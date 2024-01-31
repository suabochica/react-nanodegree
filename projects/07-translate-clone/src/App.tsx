import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useEffect } from 'react'

import { useStore } from './hook/useStore'
import { useDebounce } from './hook/useDebounce'

import './App.css'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { ClipboardIcon, MicrophoneIcon, SwapIcon } from './components/Icons'
import { TextArea } from './components/TextArea'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { translate } from './services/translate'

function App() {

  // Hooks
  // -----

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

  const debouncedFromText = useDebounce(fromText, 250)

  // Effects
  // --------

  useEffect(() => {
    if (fromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        console.log('result', result)
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

  // Handlers
  // --------

  const handleClipboard = () => { navigator.clipboard.writeText(result) }
  const handleSpeaker = () => {
    const utterance = new SpeechSynthesisUtterance(result)

    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.8

    speechSynthesis.speak(utterance)
  }

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
            <div style={{ position: 'relative' }}>
              <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
              <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
                <Button
                  variant='link'
                  onClick={handleClipboard}
                >
                  <ClipboardIcon />
                </Button>

                <Button
                  variant='link'
                  onClick={handleSpeaker}
                >
                  <MicrophoneIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
