import React from 'react'
import styled from 'styled-components'

function Dashboard (props) {

    const Buttons = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    const Button = styled.button`
        width: 20%;
        border-radius: 10px;
        background-color: #fd5a1e;
        color: black;
        height: 2rem;
    `;
   
    return (
        <Buttons>
            <Button onClick={props.strike}>Strike</Button>
            <Button onClick={props.ball}>Ball</Button>
            <Button onClick={props.foul}>Foul</Button>
            <Button onClick={props.hit}>Hit</Button>
        </Buttons>
    )
} 

export default Dashboard;