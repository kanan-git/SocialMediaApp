import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Messages.module.css";

function Messages() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.messages}>
                    {/* center section messages */}
                    <h1>messages</h1>
                    <div className={styles.messages_top}>
                        <h2>
                            chats (3):
                        </h2>
                        <div>
                            <input type="search" placeholder="Search for chats" />
                        </div>
                    </div>
                    <div className={styles.messages_container}>
                        <div className={styles.dmcard}>
                            <div>
                                <div>
                                    <img src="" alt="photo" />
                                </div>
                                <div>
                                    <p>John Doe</p>
                                    <span>you conditional: last message</span>
                                </div>
                            </div>
                            <div>
                                <span>3</span>
                            </div>
                        </div>
                        <div className={styles.dmcard}>
                            <div>
                                <div>
                                    <img src="" alt="photo" />
                                </div>
                                <div>
                                    <p>John Doe</p>
                                    <span>you conditional: last message</span>
                                </div>
                            </div>
                            <div>
                                <span>3</span>
                            </div>
                        </div>
                        <div className={styles.dmcard}>
                            <div>
                                <div>
                                    <img src="" alt="photo" />
                                </div>
                                <div>
                                    <p>John Doe</p>
                                    <span>you conditional: last message</span>
                                </div>
                            </div>
                            <div>
                                <span>3</span>
                            </div>
                        </div>
                        {/* open chat on right side over discovery or replace */}
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Messages;
