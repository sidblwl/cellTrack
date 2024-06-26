import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CellLineWrapper from './components/CellLineWrapper.jsx'
import LineInfo from './components/LineInfo.jsx'
import CreateLine from './components/CreateLine.jsx'
import { Routes, Route, useParams, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CellLineWrapper/>} />
        <Route path="info/:id" element={<LineInfo/>} />
        <Route path="create" element={<CreateLine/>} />
      </Routes>
    </>
  )
}

export default App
