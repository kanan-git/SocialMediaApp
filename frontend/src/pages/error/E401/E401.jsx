import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./E401.module.css";

function E401() {
    return (
        <main className={styles.main}>
            <section className={styles.error401}>
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
        </main>
    );
};

export default E401;
