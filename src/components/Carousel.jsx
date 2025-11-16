import React from "react";
import bfstart from "../assets/BFstart.png";
import bytefight from "../assets/byteFight.png";
import ugasurv from "../assets/UGAsurvivors.png";
import bookdb from "../assets/BookDB.png";
import { useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

function Carousel() {

    const [nextIndex, setNextIndex] = useState(0);
    const pics = [bfstart, bytefight, ugasurv, bookdb];
    const picsLength = pics.length;
    const summaries = ["bytefight was a 2D fighting game developed in Unity using C#. Players can choose from a roster of unique characters, each with their own special moves and abilities. The game features both single-player and multiplayer modes, allowing players to battle against AI opponents or challenge friends locally.",
        "Here is a view of the game in action!",
        "UGA SURVIVORS, My first game co-created with my friend from high school",
        "a full stack book database project done in college which utilised java for the front and back end work and AWS for hositng the project"];

    function handleForward() {
        if (nextIndex < picsLength - 1) {
            setNextIndex(nextIndex + 1);
        } else {
            setNextIndex(0);
        }
    }
    function handleBackward() {
        if (nextIndex > 0) {
            setNextIndex(nextIndex - 1);
        } else {
            setNextIndex(picsLength - 1);
        }
    }

    return (
        <div id="full-component" className="">
            <div id="text-and-carousel" className="flex flex-col items-center gap-y-6">
                <div className="flex gap-4">
                    <div id='button-wrapper' className="flex items-center">
                        <span className="cursor-pointer" onClick={handleBackward}><CircleArrowLeft className="active:fill-blue-900"/></span>
                    </div>
                    <div id="slide-container" className="flex md:w-[600px] md:h-[400px] rounded-2xl overflow-hidden">
                        {/* slides row: translateX to current index, with smooth transition */}
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${nextIndex * 100}%)`, width: `${picsLength * 100}%` }}
                        >
                            {pics.map((src, i) => (
                                <div key={i} className="w-full flex-shrink-0 h-full">
                                    <img src={src} alt={`slide-${i}`} className="h-full w-full object-cover block" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='button-wrapper' className="flex items-center">
                        <button className="cursor-pointer" onClick={handleForward}><CircleArrowRight className="active:fill-blue-900"/></button>
                    </div>
                </div>
                <div key={nextIndex} className="md:w-[600px] animate-fade-in">
                    <span key={nextIndex} className="">{summaries[nextIndex]}</span>
                </div>
            </div>
            
        </div>
        
    );
}

export default Carousel;