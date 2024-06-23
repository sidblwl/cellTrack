import '../App.css'
import React, { useState, useEffect } from "react";
// import { useState } from 'react'
// import { useEffect } from 'react'

export function CellLine({cellLine}){
    return (
        <>
        <div className="cellLine">
            <h1>{cellLine.id}</h1>
            <h1>{cellLine.name}</h1>
            <h1>{cellLine.passageNum}</h1>
        </div>
        </>

    )
}

export default function cellLineWrapper(){
    const [cellLines, setCellLines] = useState({})

    const fetchMessages = async () => {
        const response = await fetch("http://127.0.0.1:8000/getLines")
        let responseJson = await response.json()
        setCellLines(responseJson);
      }
    
      useEffect(() => {
          fetchMessages()
      }, [])

    return(
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