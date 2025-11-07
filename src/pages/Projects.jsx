import React from "react";
import Carousel from "../components/Carousel.jsx";


function Projects() {

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-jost h-auto text-4xl text-center mt-10 text-white">Projects Page</h1>
            <Carousel />
        </div>
    );
}

export default Projects;