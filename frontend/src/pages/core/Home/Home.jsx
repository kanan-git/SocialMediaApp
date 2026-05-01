import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
    return (
        <>
            <header className={styles.header}>
                mobile menu toggle
                logo
                searchbar
                actions
                    notifications
                    messages
                    profile
            </header>

            <main className={styles.main}>
                <aside className={styles.navbar}>
                    home
                    explore

                    profile
                    messages
                    notifications
                    settings

                    about
                    contact

                    create post
                </aside>
                <section className={styles.feed}>
                    <div>
                        share post
                    </div>
                    <div>
                        posts container
                    </div>
                    <div>
                        loading with conditional | loading more posts...
                    </div>
                </section>
                <aside className={styles.discover}>
                    <div>
                        tending hashtags
                    </div>
                    <div>
                        people
                    </div>
                </aside>
            </main>

            <footer className={styles.footer}>
                Footer
            </footer>
        </>
    );
};

export default Home;
