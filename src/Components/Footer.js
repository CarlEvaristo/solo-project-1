import React from "react" 
import Twitter from "./images/Twitter Icon.png"
import Facebook from "./images/Facebook Icon.png"
import Instagram from "./images/Instagram Icon.png"
import Github from "./images/GitHub Icon.png"


function Footer() {
    return(
        <div className="footer">
            <img src={Twitter} alt="twitter"/>
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Github} alt="github" />
        </div>
    )
}

export default Footer