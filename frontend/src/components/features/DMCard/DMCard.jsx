import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./DMCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function DMCard( props ) {
    return (
        <div className={styles.dmcard}>
            <div>
                <div>
                    <img src={props.data.imgPath} alt="photo" />
                </div>
                <div>
                    <p>{props.data.firstName} {props.data.lastName}</p>
                    <hr />
                    <span>{props.data.isLastMe ? "you: " : ""}{props.data.lastMessage ? props.data.lastMessage : "start a conversation"}</span>
                </div>
            </div>
            {props.data.unreadMessagesCounter > 0 && <div>
                <span>{props.data.unreadMessagesCounter}</span>
            </div>}
        </div>
    );
};

export default DMCard;
