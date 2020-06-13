import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';

const WrapperH1 = styled.div`
    color: red;

    ${props => (props.type === 'primary'? `background:#2196f3;` : null)}
    ${props => (props.type === 'success'? `background:#4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background:#f44336;` : null)}
    ${props => (props.type === 'warning'? `background:#fdd835;` : null)}
`

function Component({copywrite,date,explanation,url,title}) {

    return (
    <div className='main'>
    <div className='container'>
        <h1 className="title">Title: {title}</h1>
        <WrapperH1 type='primary'>Title: {title}</WrapperH1>
        <img className='imag' src={url}></img>
        <div className='text-container '>
            <span></span>
            <p>Date: {date}</p>
            <p>Explanation: {explanation}</p>
            <p>writer: {copywrite}</p>
        </div>
    </div>
    </div>
    );
}

export default Component;