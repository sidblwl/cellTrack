import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CellLine from './components/CellLine'
import LineInfo from './components/LineInfo.jsx'
import { Routes, Route, useParams } from "react-router-dom";

function App() {

  // const fetchMessages = async () => {
  //   const response = await fetch("http://127.0.0.1:8000/getLines")
  //   let responseJson = await response.json()
  //   setCellLines(responseJson);
  // }

  // useEffect(() => {
  //     fetchMessages()
  // }, [])
  const { line } = useParams()
  // useEffect(() => {

  // })

  return (
    <>
      <Routes>
        <Route path="/" element={<CellLine />} />
        <Route path=":line" element={<LineInfo />} />
        {/* https://ui.dev/react-router-url-parameters */}
      </Routes>
    </>
  )
}

export default App
