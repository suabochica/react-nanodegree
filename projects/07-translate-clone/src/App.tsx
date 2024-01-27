import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { useStore } from './hook/useStore'

import './App.css'
import { AUTO_LANGUAGE } from './constants'
import { SwapIcon } from './components/Icons'

function App() {

  function handleClick() {
    setFromLanguage('es')
  }

  const { fromLanguage, toLanguage, setFromLanguage, interchangeLanguages } = useStore()

  return (
    <Container fluid>
      <h1>🔣 Translate Clone</h1>

      <Row>
        <Col>
          <h2>From</h2>
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
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
