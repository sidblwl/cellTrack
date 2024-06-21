import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CellLine from './components/CellLine'

function App() {
  const [cellLines, setCellLines] = useState({})

  const fetchMessages = async () => {
    const response = await fetch("http://127.0.0.1:8000/getLines")
    let responseJson = await response.json()
    setCellLines(responseJson);
  }

  useEffect(() => {
      fetchMessages()
  }, [])

  return (
    <>
      <div className="cellLineWrapper">
        <h1>Choose a Cell Line</h1>
        {Object.keys(cellLines).map((id) => (
          <CellLine cellLine={cellLines[id]}></CellLine>
        ))}
      </div>
    </>
  )
}

export default App