import '../App.css'
import React, { useState } from "react";

export default function CellLine({cellLine, setWindow}){
    return (
        <>
        <div className="cellLine" onClick={() => {setWindow(1)}}>
            <h1>{cellLine.id}</h1>
            <h1>{cellLine.name}</h1>
            <h1>{cellLine.passageNum}</h1>
        </div>
        </>
    )
}