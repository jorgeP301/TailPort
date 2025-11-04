import React from "react";

function Header() {
    return (
        <nav className="bg-blue-shade-800 px-4 py-2 rounded-xl">
            <div className="flex justify-around">
                <div className="flex rounded-xl hover:bg-blue-shade-600">
                    <a className="p-2 ">My Portfolio</a>
                </div>
                <div className="flex rounded-xl hover:bg-blue-shade-600">
                    <a className="p-2">About Me</a>
                </div>
                <div className="flex rounded-xl hover:bg-blue-shade-600" onClick={console.log("hello")}>
                    <a className="p-2">Projects</a>
                </div>
                <div className="flex rounded-xl hover:bg-blue-shade-600">
                    <a className="p-2">Contact</a>
                </div>



            </div>
        </nav>
    );
};
export default Header;