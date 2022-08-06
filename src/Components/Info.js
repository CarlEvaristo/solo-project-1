import React from "react"
import Profile from "./images/profile-pic.jpg"

function Info() {
    return (
        <>
            <img src={Profile} alt="profile" className="profile"/>
            <div className="wrapper info">
                <h1>Carl Evaristo</h1>
                <p className="jobTitle">Frontend Developer</p>
                <p className="url">thepythoneer@gmail.com</p>
                <div class="buttons">
                    <a href="https://github.com/carlevaristo" class="accent" target="blank"><i class="icon fa-brands fa-github"></i>  Github</a>
                    <a href="https://www.linkedin.com/in/carl-evaristo/" target="blank"><i class="icon fa-brands fa-linkedin"></i>  LinkedIn</a>
                </div>
            </div>
        </>

    )
}

export default Info