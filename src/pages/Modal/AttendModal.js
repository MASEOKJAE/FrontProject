import React, { useState } from "react";
import './AttendModal.css';

export default function Modal(){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
    return(
        <>
            
            <button
                src="https://assets.poap.xyz/ethrank-season-three-2023-logo-1672072413312.png" alt="ETHRank Season Three"
                onClick={toggleModal}
                className="btn-modal">
            Open
            {modal && (
                <div className="modal">
                <div className="overlay"/>
                <div className="modal-content">
                    <h2>Hello modal</h2>
                    <p>내용</p>
                </div>
                <button className="close-modal"
                onClick={toggleModal}>Close
                </button>
            </div>
            )}
            </button>
            
        </>
    );
}