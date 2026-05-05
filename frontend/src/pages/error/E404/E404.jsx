import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./E404.module.css";

function E404() {
    return (
        <main className={styles.main}>
            <section className={styles.error404}>
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
        </main>
    );
};

export default E404;
