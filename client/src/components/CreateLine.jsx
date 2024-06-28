import '../App.css'
import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


export default function CreateLine(){
    const [passageInputs, setPassageInputs] = useState([])

    const [passages, setPassages] = useState([])
    
    function addPassage(viability, concentration, size, seededCells){
        setPassages(passages => [...passages,{
            "viability": viability,
            "concentration": concentration,
            "size": size,
            "seededCells": seededCells
        }])
    }

    function PassageInput(){
        return (
            <>
                <input type="text" id="date" placeholder="Date"></input>
                <input type="text" id="passage" placeholder="Passage"></input>
                <input type="text" id="v" placeholder="Viability"></input>
                <input type="text" id="c" placeholder="Concentration"></input>
                <input type="text" id="s" placeholder="Size"></input>
                <input type="text" id="sc" placeholder="Seeded Cells"></input>
                <button onClick={() => {addPassage(document.getElementById("v").value, document.getElementById("c").value, document.getElementById("s").value, document.getElementById("sc").value)}}>Add</button>
            </>
        )
    }

    function handleLineCreation(){
        let name = document.getElementById("nameIn").value
        let passageNum = document.getElementById("numIn").value
        addCellLine(name, passageNum)
    }
    
    const addCellLine = async (name, passageNum) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
        "name": name,
        "passageNum": passageNum,
        "passages": passages
        });

        console.log(raw)
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
    
        const response = await fetch("http://127.0.0.1:8000/", requestOptions)
    }

    return (
        <>
            <h1>Create new line</h1>
            <p>Cell Line</p>
            <input type="text" class="material-input" id="nameIn"></input>
            <p>Passage #</p>
            <input type="number" class="material-input" id="numIn"></input><br></br>
            <button onClick={() => {setPassageInputs(passageInputs.concat(<PassageInput />))}}>Add Passage Data</button>
            <br></br>
            <div className="passageInputWrapper">
                {passageInputs}
            </div>
            <br></br><br></br>
            <Link to={'/'}>
                <Button variant="contained" className="modern-button" onClick={() => {handleLineCreation()}}>
                    Create New Cell Line
                </Button>
            </Link>
        </>
    )
}