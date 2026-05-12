import React, { useState, useEffect } from "react";
import NotificationCard from "../../../components/features/NotificationCard/NotificationCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Notifications.module.css";

function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);

    function loadNotifications() {
        const data = [
            {
                imgPath: "",
                firstName: "Wade",
                lastName: "Warren",
                icon: icons.like,
                notification: "liked your post.",
                time: "2m ago"
            },
            {
                imgPath: "",
                firstName: "Wade",
                lastName: "Warren",
                icon: icons.like,
                notification: "liked your post.",
                time: "2m ago"
            },
            {
                imgPath: "",
                firstName: "Wade",
                lastName: "Warren",
                icon: icons.like,
                notification: "liked your post.",
                time: "2m ago"
            },
            {
                imgPath: "",
                firstName: "Wade",
                lastName: "Warren",
                icon: icons.like,
                notification: "liked your post.",
                time: "2m ago"
            }
        ];
        setNotifications(data);
    };

    useEffect(() => {
        loadNotifications();
    }, []);

    return (
        <section className={"main_container " + styles.notifications}>
            {/* center section notifications */}
            <h1>notifications ({notifications.length})</h1>
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
            <div className="cardcontainer">
                {loading && <span>loading...</span>}
                
                {notifications.length > 0 ? notifications.map((n, i) => {return (<NotificationCard imgPath={n.imgPath} firstName={n.firstName} lastName={n.lastName} icon={n.icon} notification={n.notification} time={n.time} key={`notificationcard_${i}`} />)}) : <h3>you have not any notification</h3>}
            </div>
        </section>
    );
};

export default Notifications;
