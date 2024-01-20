import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = () => {
  // States
  // -----------------------------
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Effects
  // -----------------------------

  // pointermove
  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // Limpiar las subscripciones
    // --> Cuando el componente se desmonta
    // --> Cuando el las dependencias cambian
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  // toggle body class for cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => document.body.classList.remove('no-cursor');
  }, [enabled])

  const handleClick = () => {
    setEnabled(!enabled)
  }
  return (
    <>
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
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
