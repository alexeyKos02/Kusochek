import React from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/storeHooks";
import {hide, selectModalActive, selectModalDom} from "../store/slices/modal";
import "../styles/ModalStyle.css"

const Modal = () => {
    const dom = useAppSelector(selectModalDom)
    const active = useAppSelector(selectModalActive)
    const dispatch = useAppDispatch()
    return (
        <div className={`addModal ${active ? "active" : ""}`}>
            <div className={"addModal__content"} style={{position: "relative"}}>
                <ion-icon name="close-circle-outline" style={{
                    top: "-20px",
                    right: "-20px",
                    position: "absolute",
                    width: "30px",
                    height: "30px"
                }}
                onClick={()=>dispatch(hide(false))}
                ></ion-icon>
                {dom}
            </div>
        </div>
    );
};

export default Modal;