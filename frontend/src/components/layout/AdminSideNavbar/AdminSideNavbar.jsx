import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./AdminSideNavbar.module.css";
import languages from "../../../utilities/constants/languages.js";

function AdminSideNavbar() {
    return (
        <aside className={styles.adminnav}>
            {/* admin navbar left */}
            <ul>
                <li>
                    <Link to="/">
                        <i className={icons.home}></i>
                        <span>homepage</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/#">
                        <i className={icons.dashboard}></i>
                        <span>dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/#">
                        <i className={icons.profile}></i>
                        <span>notifications</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/#">
                        <i className={icons.people}></i>
                        <span>users</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/#">
                        <i className={icons.posts}></i>
                        <span>posts</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/#">
                        <i className={icons.comments}></i>
                        <span>comments</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default AdminSideNavbar;
