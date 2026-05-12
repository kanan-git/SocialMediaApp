import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./E401.module.css";

function E401() {
    return (
        <section className="main_container">
            {/* center section error401 */}
            <div>{/* animated background */}</div>
            <div>
                <div>
                    <h1>401</h1>
                    <p>unauthorized</p>
                </div>
                <Link to="/">go back to the homepage</Link>
            </div>
        </section>
    );
};

export default E401;
