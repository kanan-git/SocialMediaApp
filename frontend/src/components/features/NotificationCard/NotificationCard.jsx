import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NotificationCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function NotificationCard( {imgPath, firstName, lastName, icon, notification, time} ) {
    return (
        <div className={styles.notificationcard}>
            <div>
                <div>
                    <img src={imgPath} alt="profile" />
                </div>
                <div>
                    <i className={icon}></i>
                </div>
            </div>
            <div>
                <span>
                    <b>{firstName} {lastName}</b>
                    <span>{notification}</span>
                </span>
                <span>
                    {time}
                </span>
            </div>
            <div>{/* indicator */}</div>
        </div>
    );
};

export default NotificationCard;
