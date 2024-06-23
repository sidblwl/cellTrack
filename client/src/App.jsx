import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CellLine from './components/CellLine'
import LineInfo from './components/LineInfo.jsx'
import { Routes, Route } from "react-router-dom";

function App() {

  // const fetchMessages = async () => {
  //   const response = await fetch("http://127.0.0.1:8000/getLines")
  //   let responseJson = await response.json()
  //   setCellLines(responseJson);
  // }

  // useEffect(() => {
  //     fetchMessages()
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<CellLine />} />
        <Route path="/lineinfo" element={<LineInfo />} />
      </Routes>
    </>
  )
}

export default App
