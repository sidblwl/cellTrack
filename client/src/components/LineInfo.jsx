import '../App.css'
import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
// import Date;

function PassageHeadings(){
    return (
        <>
            <p>Date</p>
            <p>Passage</p>
            <p>Viability</p>
            <p>Concentration</p>
            <p>Size</p>
            <p>Seeded Cells</p>
        </>
    )
}

function Passage({passage, num}){
    const date = new Date()
    return (
        <>
            <p>{date.toDateString()}</p>
            <p>{num}</p>
            <p>{passage.viability}%</p>
            <p>{passage.concentration}</p>
            <p>{passage.size}</p>
            <p>{passage.seededCells}</p>
        </>
    )
}


export default function LineInfo(){
    const { id } = useParams();
    const [cell, setCell] = useState([
        {
            "id": "loading",
            "name": "loading",
            "passageNum": "loading"
        }
    ])

    const fetchMessages = async () => {
        const response = await fetch("http://127.0.0.1:8000/" + id)
        let responseJson = await response.json()
        setCell(responseJson["data"][0]);
    }

    const removeCellLine = async (name, passageNum) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify()
        
        // const raw = JSON.stringify({
        // "name": name,
        // "passageNum": passageNum,
        // "passages": passages
        // });

        // console.log(raw)
    
        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
    
        const response = await fetch("http://127.0.0.1:8000/" + id, requestOptions)
    }
    
    useEffect(() => {
        fetchMessages()
    }, [])

    return (
        <>
        <div className="lineInfoWrapper">
            <h1>{cell.name}</h1>
            <h1>Cell ID: {cell.id}</h1>
            <h1>P{cell.passageNum}</h1>
            <div className="passagesWrapper">
                <PassageHeadings></PassageHeadings>
                {cell.passages ? (Object.keys(cell.passages).map((num) => (
                    <Passage passage={cell.passages[num]} num={num}></Passage>
                ))) : ""}
            </div>
            <Link to={'/'}>
                <Button variant="contained" className="modern-button" onClick={() => {removeCellLine()}}>
                        Delete Cell Line
                </Button>
            </Link>
        </div>
        </>
    )
}