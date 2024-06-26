import '../App.css'
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

function CellLine({cellLine, id}){
    return (
        <>
        <Link to={`info/${id}`} className={"lineLink"}>
            <h1>{id}</h1>
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
            <CellLine cellLine={cellLines[id]} id={id}></CellLine>
            ))}
            <AddCellLine></AddCellLine>
        </div>
        </>
    )
}