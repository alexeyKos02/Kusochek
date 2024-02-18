import React from 'react';
import {addElements, hide, selectModalActive, selectModalDom} from "../../store/slices/modal";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";
import VideoPlayer from "./videoPlayer/VideoPlayer";

interface StoryProps {
    url: string
}

const Story = ({url}: StoryProps) => {
    const children = useAppSelector(selectModalDom)
    const active = useAppSelector(selectModalActive)
    const dispatch = useAppDispatch()

    function openModal() {
        dispatch(addElements(
                <VideoPlayer/>
            // <video controls autoPlay loop style={{width: "45vh", height:"80vh", borderRadius:"15px"}}>
            //     <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4"/>
            // </video>
        ))
        dispatch(hide(true))
    }

    return (
        <div className="story" style={{background: `url("${url}") center/cover`}} onClick={() => openModal()}/>
    );
};

export default Story;