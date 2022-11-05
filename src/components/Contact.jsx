import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";



const Contact = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contact">
                    <div className="contact">
                        <div className="contact__section">
                            <div className="contact__section__header">
                                <h2 className="contact__section__header__h2">Contact</h2>
                                <p className="contact__section__header__p"
                                >Hi there, contact me to ask me about anything you have in mind.</p>
                            </div>
                            <div className="contact__section__form">
                                <form action="">
                                    <div className="contact__section__form__input">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="contact__section__form__input">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="contact__section__form__input">
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                    <div className="contact__section__form__input">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="contact__section__form__input">
                                        <button className="contact__section__form__input__btn">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Route>
                

            </Switch>
        

        </BrowserRouter>
    );
};