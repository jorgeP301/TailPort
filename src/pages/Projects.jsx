import React from "react";
import Carousel from "../components/Carousel.jsx";
import CardDisplay from "../components/CardDisplay.jsx";
import WaveWord from "../components/WaveWord.jsx";

function Projects() {



    const cards = [
        { id: 1, front: "f1", back: "b1", image: "/src/assets/babie.jpg" },
        { id: 2, front: "f2", back: "b2", image: "/src/assets/babie.jpg" },
        { id: 3, front: "f3", back: "b3", image: "/src/assets/babie.jpg" },
        { id: 4, front: "f4", back: "b4", image: "/src/assets/babie.jpg" },
    ];
    return (
        <div className="flex flex-col items-center gap-y-6 font-jost pb-10 pt-10">
            <h1 className="h-auto text-4xl text-center mt-10 text-white">Projects</h1>
            <Carousel />
            <div className="flex flex-col gap-y-6">
                <h2 className="text-2xl items-start">Work</h2>
                <div className="flex flex-col gap-y-4">
                    <span>as an early professional I am currently working as an Associate Software Engineer primarily focused on client side development</span>
                    <div className="flex flex-wrap justify-evenly sm:flex-row">
                        <CardDisplay cards={cards} />
                        <div className="content-center">
                            <span className="pl-6 text-5xl font-bold bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Click cards to flip!</span>
                            <WaveWord />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;