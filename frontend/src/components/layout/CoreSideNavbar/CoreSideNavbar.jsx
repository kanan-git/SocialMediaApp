import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./CoreSideNavbar.module.css";
import languages from "../../../utilities/constants/languages.js";

function CoreSideNavbar() {
    return (
        <aside className={styles.nav}>
            {/* sidebar left */}
            <ul>
                <li>
                    <Link to="/admin/dashboard">
                        <i className={icons.home}></i>
                        <span>admin panel</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">
                        <i className={icons.home}></i>
                        <span>home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className={icons.explore}></i>
                        <span>explore</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">
                        <i className={icons.profile}></i>
                        <span>profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className={icons.messages}></i>
                        <span>messages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className={icons.notifications}></i>
                        <span>notifications</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className={icons.settings}></i>
                        <span>settings</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">
                        <i className={icons.about}></i>
                        <span>about</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className={icons.contact}></i>
                        <span>contact</span>
                    </Link>
                </li>
            </ul>
            <div>
                <button>+ create post</button>
            </div>
        </aside>
    );
};

export default CoreSideNavbar;
