import '../App.css'
import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Passage({passage, num}){
    return (
        <>
            <div>
                <h1>{num}</h1>
                <h1>{passage.viability}</h1>
                <h1>{passage.concentration}</h1>
                <h1>{passage.size}</h1>
                <h1>{passage.seededCells}</h1>
            </div>
        </>
    )
}

export default function LineInfo(){
    const { id } = useParams();
    const [cellLines, setCellLines] = useState({
        [id]: {
            "id": "loading",
            "name": "loading",
            "passageNum": "loading"
        }
    })

    console.log(cellLines)

    const fetchMessages = async () => {
        const response = await fetch("http://127.0.0.1:8000/getLines")
        let responseJson = await response.json()
        setCellLines(responseJson);
    }

    console.log(cellLines)
    
    useEffect(() => {
        fetchMessages()
    }, [])

    return (
        <>
            <h1>{cellLines[id].name}</h1>
            <h1>Cell ID: {id}</h1>
            <h1>P{cellLines[id].passageNum}</h1>
            <div className="passagesWrapper">
                {/* {Object.keys(cellLines[id].passages).map((num) => (
                    <Passage passage={cellLines[id].passages[num]} num={num}></Passage>
                ))} */}
            </div>
        </>
    )
}