import React, {useState} from 'react';
import {ProgressBar, ProgressBarProps} from "react-bootstrap";
import {State} from "ionicons/dist/types/stencil-public-runtime";


interface ProgressBarCustomProps {
    played: number
}

const ProgressBarCustom = ({played}: ProgressBarCustomProps) => {

    return (
        <div style={{width: "100%"}}>
            <ProgressBar now={played*100} style={{height:"5px"}}/>
        </div>
    );
};

export default ProgressBarCustom;