import { CheckBox } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../Contact.css";

const Contact = () => {
    return (
        <div className="contactMe">
            <div className="contact__content"/> 
               <h1 className="heading">Contact Me</h1>
                <p>Feel free to contact me on any of the platforms below</p>
            <div className="form">
                <form>
                    <div className="form__group"/>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="fname" id="fname" placeholder="First Name" />
                        <label htmlFor="name">Last Name</label>
                        <input type="text" name="lname" id="lname" placeholder="Last Name" />
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="message">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="Checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">You agree to providing your data to {name} who may contact you.</label>

                        </div>
                        <div className="sendMessage">
                            <input type="submit" value="Send Message" />
                        </div>
                </form>

                <div>
                    <Footer/>
                </div>

            </div>
        </div>
    );
};

export default Contact;