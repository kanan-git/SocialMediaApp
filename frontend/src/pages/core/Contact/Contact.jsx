import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.contact}>
                    {/* center section contact */}
                    <h1>contact us</h1>
                    <div>
                        {/* geo location api */}
                    </div>
                    <div>
                        <div>
                            <form action="">
                                <h2>get in touch</h2>
                                <div>
                                    <div>
                                        <label htmlFor="">name</label>
                                        <input type="text" placeholder="enter your full name" />
                                    </div>
                                    <div>
                                        <label htmlFor="">email</label>
                                        <input type="email" placeholder="enter your email address" />
                                    </div>
                                    <div>
                                        <label htmlFor="">message</label>
                                        <textarea name="" id="" placeholder="write your message here..."></textarea>
                                    </div>
                                    <button>send message</button>
                                </div>
                            </form>
                            <div>
                                <h2>our office</h2>
                                <ul>
                                    <li>
                                        <i className={icons.map}></i>
                                        <span>987 Untitled Street, Baku</span>
                                    </li>
                                    <li>
                                        <i className={icons.telephone}></i>
                                        <span>+994-01-234-56-78</span>
                                    </li>
                                    <li>
                                        <i className={icons.envelopeAt}></i>
                                        <span>hello@socialmediaapp.com</span>
                                    </li>
                                    <li>
                                        <i className={icons.postage}></i>
                                        <span>AZ 1234, Azerbaijan</span>
                                    </li>
                                    <li>
                                        <i className={icons.clock}></i>
                                        <span>mon - fri, 9:00 AM - 5:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Contact;
