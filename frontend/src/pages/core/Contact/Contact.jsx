import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Contact.module.css";

function Contact() {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        document.title = "Contact";
    }, []);

    return (
        <section className={"main_container " + styles.contact}>
            {/* center section contact */}
            <h1>contact us</h1>
            <div>
                {/* geo location api */}
            </div>
            <div>
                <form action="" onSubmit={e => e.preventDefault()}>
                    <h2>get in touch</h2>
                    <div>
                        <div>
                            <label htmlFor="fullname">full name:</label>
                            <input type="text" placeholder="Enter your full name" name="fullname" id="fullname" value={fullname} onChange={e => setFullName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">email:</label>
                            <input type="email" placeholder="Enter your email address" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="message">message:</label>
                            <textarea placeholder="Write your message here..." name="message" id="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
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
        </section>
    );
};

export default Contact;
