import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./E404.module.css";

function E404() {
    return (
        <section className="main_container">
            {/* center section error404 */}
            <div>{/* animated background */}</div>
            <div>
                <div>
                    <h1>404</h1>
                    <p>page not found</p>
                </div>
                <Link to="/">go back to the homepage</Link>
            </div>
        </section>
    );
};

export default E404;
