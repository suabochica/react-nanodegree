import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // States
  // -----------------------------
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Effects
  // -----------------------------
  useEffect(() => {
    console.log('useEffect', { enabled })
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

  }, [enabled]);

  const handleClick = () => {
    setEnabled(!enabled)
  }

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#19f',
        borderRadius: '50%',
        opacity: 0.5,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Activar' : 'Deactivar'} seguir puntero
      </button>
    </main>
  )
}

export default App
