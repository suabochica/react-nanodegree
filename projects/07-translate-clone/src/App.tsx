import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { useStore } from './hook/useStore'

import './App.css'
import { AUTO_LANGUAGE } from './constants'
import { SwapIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'

function App() {

  const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interchangeLanguages } = useStore()

  return (
    <Container fluid>
      <h1>🔣 Translate Clone</h1>

      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
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

        <Col>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
