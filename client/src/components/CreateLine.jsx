import '../App.css'
import { Routes, Route, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
            <p>Name:</p>
            <input id="nameIn"></input>
            <p>Passage Num:</p>
            <input id="numIn"></input><br></br><br></br>
            <Link to={`/`} onClick={() => {addCellLine(document.getElementById("nameIn").value, document.getElementById("numIn").value)}}>
                <h1>Create New Line</h1>
            </Link>
        </>
    )
}