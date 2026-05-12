import React, { useState, useEffect } from "react";
import DMCard from "../../../components/features/DMCard/DMCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Messages.module.css";

function Messages() {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    function loadChats() {
        const data = [
            {
                imgPath: "",
                firstName: "Lorem",
                lastName: "Ipsum",
                lastMessage: "awui awgsefdpiu baw",
                isLastMe: true,
                unreadMessagesCounter: 0
            },
            {
                imgPath: "",
                firstName: "John",
                lastName: "Doe",
                lastMessage: "123 oaoaoaoaoaoaoaoaoa 123 oaoaoaoaoaoaoaoaoa",
                isLastMe: false,
                unreadMessagesCounter: 999
            },
            {
                imgPath: "",
                firstName: "Qwerty",
                lastName: "Uiop",
                lastMessage: "00000",
                isLastMe: true,
                unreadMessagesCounter: 0
            },
            {
                imgPath: "",
                firstName: "Unnamed",
                lastName: "User",
                lastMessage: "ur final message",
                isLastMe: false,
                unreadMessagesCounter: 3
            }
        ];
        setChats(data);
    };

    useEffect(() => {
        loadChats();
    }, []);

    return (
        <section className={"main_container " + styles.messages}>
            {/* center section messages */}
            <h1>messages</h1>
            <div className={styles.messages_top}>
                <h2>
                    chats ({chats.length}):
                </h2>
                <div>
                    {loading ? <span>loading...</span> : <input type="search" placeholder="Search for chats" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />}
                </div>
            </div>
            <div className="cardcontainer">
                {!loading && chats.length > 0 && chats.map((c, i) => {return (<DMCard data={c} key={`dmcard_${i}`} />)})}
                {chats.length == 0 && <h3>no chat found</h3>}
                {/* open chat on right side over discovery or replace */}
            </div>
        </section>
    );
};

export default Messages;
