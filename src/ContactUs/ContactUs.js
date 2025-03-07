import react, { Component } from "react";
import classes from "./ContactUs.module.css";
import mail from "./mail.png";
import call from "./call.png";

const ContactUs = () =>{
    return(
    <div className={classes.contact}>
            <h3>Contact Us</h3>
            <div className={classes.cards}>
                <img src={mail}></img>
                <strong>Email</strong>
            </div>
            workforeign@gmail.com
            <div className={classes.cards}>
                <img src={call}></img>
                <strong>Phone No.</strong>
            </div>
            +44 (0) XXXX XXX XXX
            <form>
                <div className={classes.formComponent}>
                <label>Name</label>
                <input type="text" placeholder="John Weak"></input>
                </div>
                <div className={classes.formComponent}>
                <label>Email</label>
                <input type="email" placeholder="john@example.com"></input>
                </div>
                <div className={classes.formComponent}>
                <label>Message</label>
                <textarea placeholder="Enter your query..."></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
    </div>
    );
}

export default ContactUs;