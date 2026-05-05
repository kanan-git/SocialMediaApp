import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Settings.module.css";

function Settings() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.settings}>
                    {/* center section settings */}
                    <h1>settings</h1>
                    <form action="">
                        <div>
                            <span>
                                <label htmlFor="">firstname:</label>
                                <input type="text" />
                            </span>
                            <span>
                                <label htmlFor="">lastname:</label>
                                <input type="text" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">username:</label>
                                <input type="text" />
                            </span>
                            <span>
                                <label htmlFor="">email:</label>
                                <input type="email" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">country:</label>
                                <select name="country" id="">
                                    <option value=""></option>
                                </select>
                            </span>
                            <span>
                                <label htmlFor="">city:</label>
                                <select name="city" id="">
                                    <option value=""></option>
                                </select>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">mobile number:</label>
                                <input type="tel" />
                            </span>
                            <span>
                                <label htmlFor="">date of birth:</label>
                                <input type="date" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">confirm old password:</label>
                                <input type="password" />
                            </span>
                            <span>
                                <label htmlFor="">set new password:</label>
                                <input type="password" />
                            </span>
                            <span>
                                <label htmlFor="">repeat new password:</label>
                                <input type="password" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <button>cancel</button>
                                <button>save</button>
                            </span>
                            <span>
                                <button>delete account</button>
                            </span>
                        </div>
                    </form>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Settings;
