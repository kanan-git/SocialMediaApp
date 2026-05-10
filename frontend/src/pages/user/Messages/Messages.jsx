import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import DMCard from "../../../components/features/DMCard/DMCard.jsx";
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
                        <DMCard data={{
                            imgPath: "",
                            firstName: "Lorem",
                            lastName: "Ipsum",
                            lastMessage: "awui awgsefdpiu baw",
                            isLastMe: true,
                            unreadMessagesCounter: 0
                        }} />
                        <DMCard data={{
                            imgPath: "",
                            firstName: "John",
                            lastName: "Doe",
                            lastMessage: "123 oaoaoaoaoaoaoaoaoa 123 oaoaoaoaoaoaoaoaoa",
                            isLastMe: false,
                            unreadMessagesCounter: 999
                        }} />
                        <DMCard data={{
                            imgPath: "",
                            firstName: "Qwerty",
                            lastName: "Uiop",
                            lastMessage: "00000",
                            isLastMe: true,
                            unreadMessagesCounter: 0
                        }} />
                        <DMCard data={{
                            imgPath: "",
                            firstName: "Unnamed",
                            lastName: "User",
                            lastMessage: "--------",
                            isLastMe: false,
                            unreadMessagesCounter: 3
                        }} />
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
