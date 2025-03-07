import react from "react";
import classes from "./Bottom.module.css";
import img1 from "./home.png";
import img2 from "./findpage.png";
import img3 from "./actionkey.png";
import img4 from "./handshake.png";
import img5 from "./daterange.png";

const Bottom = () =>{
    return(
        <nav className={classes.navbar}>
            <div className={classes.cards}>
                <img src={img1}></img>
                <a>Home</a>
            </div>
            <div className={classes.cards}>
                <img src={img2}></img>
                <a>Compliance</a>
            </div>
            <div className={classes.cards}>
                <img src={img3}></img>
                <a>Eligibility</a>
            </div>
            <div className={classes.cards}>
                <img  src={img4}></img>
                <a>Resource</a>
            </div>
            <div className={classes.cards}>
                <img src={img5}></img>
                <a>Reminder</a>
            </div>
    </nav>
    );
}

export default Bottom;