import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Announcement.module.css";
import languages from "../../../utilities/constants/languages.js";

function Announcement( {state} ) {
    return (
        <div>
            {/* center top announcement notification slide in bar like toastify */}
            <span>
                <i className={icons.like}></i>
                <span>
                    {/* ... */}
                    email address successfully changed
                </span>
            </span>
            <button onClick={() => {state(false)}}>
                <i className={icons.xMark}></i>
            </button>
        </div>
    );
};

export default Announcement;
