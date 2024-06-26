import '../App.css'
import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


export default function CreateLine(){

    const addCellLine = async (name, passageNum) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
        "name": name,
        "passageNum": passageNum,
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        const response = await fetch("http://127.0.0.1:8000/addLine", requestOptions)
    }

    return (
        <>
            <h1>Create new line</h1>
            <p>Cell Line</p>
            <input class="material-input" id="nameIn"></input>
            <p>Passage #</p>
            <input class="material-input" id="numIn"></input>
            <br></br>
            <Link to={'/'}>
                <Button variant="contained" className="modern-button" onClick={() => {addCellLine(document.getElementById("nameIn").value, document.getElementById("numIn").value)}}>
                    Create New Cell Line
                </Button>
            </Link>
        </>
    )
}