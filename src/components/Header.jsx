import React from "react";

function Header() {
    return (
        <nav className="bg-blue-shade px-4 py-2 flex flex-1 rounded-xl">
            <button className="p-2">My Portfolio</button>    
            <button className="p-2">About Me</button>
            <button className="p-2">Projects</button>
            <button className="p-2">Contact</button>
        </nav>
    );
};
export default Header;