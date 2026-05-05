import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Notifications.module.css";

function Notifications() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.notifications}>
                    {/* center section notifications */}
                    <h1>notifications</h1>
                    <div>
                        <div>
                            <button>all</button>
                            <button>unread</button>
                            <button>read</button>
                        </div>
                        <div>
                            <button>
                                <span>mark all as read</span>
                                <i className={icons.markAllRead}></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.notificationcard}>
                            <div>
                                <div>
                                    <img src="" alt="profile" />
                                </div>
                                <div>
                                    <i className={icons.like}></i>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <b>Wade Warren</b>
                                    <span>liked your post.</span>
                                </span>
                                <span>
                                    2m ago
                                </span>
                            </div>
                            <div>{/* indicator */}</div>
                        </div>
                        <div className={styles.notificationcard}>
                            <div>
                                <div>
                                    <img src="" alt="profile" />
                                </div>
                                <div>
                                    <i className={icons.like}></i>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <b>Wade Warren</b>
                                    <span>liked your post.</span>
                                </span>
                                <span>
                                    2m ago
                                </span>
                            </div>
                            <div>{/* indicator */}</div>
                        </div>
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Notifications;
