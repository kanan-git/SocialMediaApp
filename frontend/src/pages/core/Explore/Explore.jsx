import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Explore.module.css";

function Explore() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.explore}>
                    {/* center section explore */}
                    <div className={styles.explore_top}>
                        <h1>
                            explore
                        </h1>
                        <div>
                            <span>"John Doe" search results (99):</span>
                        </div>
                    </div>
                    <div className={styles.explore_preferences}>
                        <button>all</button>
                        <button>people</button>
                        <button>posts</button>
                        <button>hashtags</button>
                        <button>trending</button>
                    </div>
                    <div className={styles.explore_container}>
                        {/* postcards here */}
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Explore;
