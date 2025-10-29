import React from "react";
import headshot from "../assets/headshot.jpg";

function About() {
        
    return (
        <div class='flex flex-1 flex-col'>
            <div class ='flex-1 p-6'>
                    <h1 class="font-jost text-[3.2em]">W I'm Jorge Patino</h1>
                    <h2>Come get to know me!</h2>
            </div>
            <div class='flex flex-1 flex-col p-8 justify-between sm:flex-row sm:py-8 sm:px-2'>
                <p class='text-md pb-6 sm:flex sm:p-2'> 
                    Hello! I am currently a senior Management Information Systems major with an emphasis in Information Security
                    and a minor in Computer Science. With both a business and technology based focus, I aspire to be a well-rounded
                    professional in the industry. Leveraging my love for learning computer science and coding I plan to dive into any consulting, 
                    analyst, cybersecurity, or, development role to enter the workforce. I have worked primarily with databases and frontend 
                    web programming and data science while here at the University of Georgia and I plan to continue learning more and diversifying 
                    skill set after reaching my goals for the coming year!
                </p>
                <img class='rounded-4xl sm:h-80 sm:transition sm:hover:scale-105 sm:duration-250 sm:ease-in-out 'src={headshot} alt="headshot of Jorge Patino"/>
            </div>
        </div>
    );
}
export default About;