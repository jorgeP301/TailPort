import React from "react";
import bfstart from "../assets/BFstart.png";
import bytefight from "../assets/byteFight.png";
import ugasurv from "../assets/UGAsurvivors.png";
import bookdb from "../assets/BookDB.png";
import { useState } from "react";

function Carousel() {

    const [nextIndex, setNextIndex] = useState (0);
    const pics = [bfstart, bytefight, ugasurv, bookdb];
    const picsLength = pics.length;
    
    function handleForward() {
        alert('Forward clicked!');
        if(nextIndex < picsLength-1){
            setNextIndex (nextIndex + 1);
        } else {
            setNextIndex (0);
        }
    }
    function handleBackward() {
        alert('Backward clicked!');
        if(nextIndex > 0){
            setNextIndex (nextIndex - 1);
        } else {
            setNextIndex (picsLength -1);
        }
    }
    return (
        <div id="full-component" className="">
            <div className="flex">
                <div id='button-wrapper' className="flex items-center"><span className="cursor-pointer" onClick={handleBackward}>Bbtn</span></div>
                <div id="slide-container" className="flex overflow-x-auto w-[600px] h-[400px] rounded-2xl">
                    <div id="carousel-slide" className="flex-shrink-0 h-full w-full">
                        <img src={bfstart} alt="project1" className="h-full w-full block"></img>
                    </div>
                    <div id="carousel-slide" className="flex-shrink-0 h-full w-full">
                        <img src={bytefight} alt="project2" className="h-full w-full block"></img>
                    </div>
                    <div id="carousel-slide" className="flex-shrink-0 h-full w-full">
                        <img src={ugasurv} alt="project3" className="h-full w-full block"></img>
                    </div>
                    <div id="carousel-slide" className="flex-shrink-0 h-full w-full">
                        <img src={bookdb} alt="project4" className="h-full w-full block"></img>
                    </div>
                </div>
                <div id='button-wrapper' className="flex items-center"><span className="cursor-pointer" onClick={handleForward}>Fbtn</span></div>
            </div>
        </div>
    );
}

export default Carousel;