import React from "react";
import bfstart from "../assets/BFstart.png";
import bytefight from "../assets/byteFight.png";
import ugasurv from "../assets/UGAsurvivors.png";
import bookdb from "../assets/BookDB.png";
import { useState } from "react";

function Carousel() {

    return (
        <div id="full-component" className="">
            <div className="">
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
            </div>
        </div>
    );
}

export default Carousel;