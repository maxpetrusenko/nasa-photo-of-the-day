import React from "react";
import { useState, useEffect } from "react";


function Component({copywrite,date,explanation,url,title}) {

    return (
    <div className='main'>
    <div className='container'>
        <img className='imag' src={url}></img>
        <div className='text-container '>
        <span></span>
        <h1 className="title">Title: {title}</h1>
        <p>Date: {date}</p>
        <p>Explanation: {explanation}</p>
        <p>writer: {copywrite}</p>
        </div>
    </div>
    </div>
    );
}

export default Component;