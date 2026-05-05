import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo/logo.svg";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Footer.module.css";
import languages from "../../../utilities/constants/languages.js";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet cum dolor?
                    </p>
                    <div>
                        <button>
                            <i className={icons.youtube}></i>
                        </button>
                        <button>
                            <i className={icons.linkedin}></i>
                        </button>
                    </div>
                </div>
                <div className={styles.nav}>
                    <div className={styles.group}>
                        <div className={styles.column}>
                            <h4>platform</h4>
                            <ul>
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/">explore</Link>
                                </li>
                                <li>
                                    <Link to="/">messages</Link>
                                </li>
                                <li>
                                    <Link to="/">notifications</Link>
                                </li>
                                <li>
                                    <Link to="/">profile</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h4>company</h4>
                            <ul>
                                <li>
                                    <Link to="/">about</Link>
                                </li>
                                <li>
                                    <Link to="/">contact</Link>
                                </li>
                                <li>
                                    <Link to="/">blog</Link>
                                </li>
                                <li>
                                    <Link to="/">careers</Link>
                                </li>
                                <li>
                                    <Link to="/">press</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.column}>
                            <h4>support</h4>
                            <ul>
                                <li>
                                    <Link to="/">help center</Link>
                                </li>
                                <li>
                                    <Link to="/">terms of service</Link>
                                </li>
                                <li>
                                    <Link to="/">privacy policy</Link>
                                </li>
                                <li>
                                    <Link to="/">community guidelines</Link>
                                </li>
                                <li>
                                    <Link to="/">cookies policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h4>contact us</h4>
                            <ul>
                                <li>
                                    <i className={icons.envelopeAt}></i>
                                    <span>hello@socialmediaapp.com</span>
                                </li>
                                <li>
                                    <i className={icons.telephone}></i>
                                    <span>+994-01-234-56-78</span>
                                </li>
                                <li>
                                    <i className={icons.map}></i>
                                    <span>987 Untitled Street, Baku</span>
                                </li>
                                <li>
                                    <i className={icons.postage}></i>
                                    <span>AZ 1234, Azerbaijan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                    © 2026 SocialMediaApp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
