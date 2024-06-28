import '../App.css'
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

function CellLine({cellLine}){
    return (
        <>
        <Link to={cellLine["_id"]} className={"lineLink"}>
            <h1>{cellLine["id"]}</h1>
            <h1 className="cellName">{cellLine.name}</h1>
            <h1>{cellLine.passageNum}</h1>
        </Link>
        </>
    )
}

function AddCellLine(){
    return(
        <>
        <Link to={`create`} className="addCellLine">
            <h1>+ New Cell Line</h1>
        </Link>
        </>
    )
}

export default function CellLineWrapper(){
    const [cellLines, setCellLines] = useState([])

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    const fetchMessages = async () => {
        const response = await fetch("http://127.0.0.1:8000/")
        const responseJson = await response.json()
        setCellLines(responseJson["data"])
      }
    
      useEffect(() => {
          fetchMessages()
      }, [])

    return(
        <>
        <div className="cellLineWrapper">
            <h1>Choose a Cell Line</h1>
            {cellLines.map((cellLine) => (
            <CellLine cellLine={cellLine}></CellLine>
            ))}
            <AddCellLine></AddCellLine>
        </div>
        </>
    )
}