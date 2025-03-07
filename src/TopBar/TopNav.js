import react from "react";
import classes from "./TopNav.module.css";
import logo from "./logo192.png";
import notification from "./image.png";

const TopNav = () =>{
    return(
      <header>
        <div className={classes.userinfo}>
                <img className={classes.userlogo} src={logo} alt="Profile Picture"></img>
                <div className={classes.usergreet}>
                    <p>Hello, Welcome 🎉</p>
                    <h2>John Weak</h2>
                </div>
                <img align="right" className={classes.bell} src={notification} alt="notifiction bell"></img>
          </div>
      </header>
    );
}

export default TopNav;