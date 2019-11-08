import React from 'react';
import styled from 'styled-components';

function Display (props) {

    const SBStyled = styled.div`
        color: #000000;
        font-size: 2rem;
        display: flex;
        justify-content: space-around;
    `;   
    
    return (
        <SBStyled>
            <h2>Strikes : {props.strikes}</h2>
            <h2>Balls : {props.balls}</h2>
        </SBStyled>
    )
}

export default Display;
