import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import NotificationCard from "../../../components/features/NotificationCard/NotificationCard.jsx";
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
                    <div className={styles.notifications_top}>
                        <div>
                            <button>all</button>
                            <button>unread</button>
                            <button>read</button>
                        </div>
                        <button>
                            <span>mark all as read</span>
                            <i className={icons.markAllRead}></i>
                        </button>
                    </div>
                    <div className={styles.notifications_container}>
                        <NotificationCard imgPath="" firstName="Wade" icon={icons.like} lastName="Warren" notification="liked your post." time="2m ago" key={0} />
                        <NotificationCard imgPath="" firstName="Wade" icon={icons.like} lastName="Warren" notification="liked your post." time="2m ago" key={1} />
                        <NotificationCard imgPath="" firstName="Wade" icon={icons.like} lastName="Warren" notification="liked your post." time="2m ago" key={3} />
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Notifications;
