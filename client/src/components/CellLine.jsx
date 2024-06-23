import '../App.css'
import React, { useState } from "react";

export default function CellLine({cellLine}){
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