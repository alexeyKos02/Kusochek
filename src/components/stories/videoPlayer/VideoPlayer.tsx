import React, {FC, ReactNode, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import ProgressBarCustom from "./controlsElements/ProgressBar";
import {Component} from "ionicons/dist/types/stencil-public-runtime";

interface stateInt {
    played: number
}

const VideoPlayer = () => {
    const [state, setState] = useState<number>(0)
    const getProgress = (e: any) => {
        setState(e.played)
    }
    return (
        <div style={{borderRadius: "25px", overflow: "hidden", width: "45vh", height: "80vh", position: "relative"}}>
            <ReactPlayer
                width="45vh"
                height="80vh"
                playing={true}
                loop={true}
                url="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"
                onProgress={getProgress}
            >
            </ReactPlayer>
            <div style={{position: "absolute", top: "1vh", left: "1vw", right: "1vw"}}>
                <ProgressBarCustom played={Number(state)}/>
            </div>
        </div>
    );
};

export default VideoPlayer;