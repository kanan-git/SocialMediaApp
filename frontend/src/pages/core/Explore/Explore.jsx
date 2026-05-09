import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Explore.module.css";

function Explore() {
    useEffect(() => {
        document.title = "Explore";
    }, []);

    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.explore}>
                    {/* center section explore */}
                    <div className={styles.explore_top}>
                        <h1 className={styles.explore_top_header}>explore</h1>
                        <span className={styles.explore_top_info}>"John Doe" search results (99):</span>
                    </div>
                    <div className={styles.explore_preferences}>
                        <button className={styles.explore_preferences_option}>all</button>
                        <button className={styles.explore_preferences_option}>people</button>
                        <button className={styles.explore_preferences_option}>posts</button>
                        <button className={styles.explore_preferences_option}>hashtags</button>
                    </div>
                    <div className={styles.explore_container}>
                        <PostCard data={{
                            photo: "image_url",
                            firstname: "Lorem",
                            lastname: "Ipsum",
                            date: "2026/05/08_16:21",
                            city: "Baku",
                            country: "Azerbaijan",
                            textContent: "...",
                            tags: ["a", "b", "c"],
                            media: "",
                            likes: 20,
                            dislikes: 999,
                            commentsCount: 1002
                        }} />
                        <PostCard data={{
                            photo: "image_url",
                            firstname: "John",
                            lastname: "Doe",
                            date: "2026/05/08_16:21",
                            city: "Ankara",
                            country: "Turkey",
                            textContent: "Donde esta la biblioteka ?",
                            tags: ["awdawd", "wweee", "sss1"],
                            media: "",
                            likes: 10000,
                            dislikes: 50,
                            commentsCount: 340
                        }} />
                        <PostCard data={{
                            photo: "image_url",
                            firstname: "Someone",
                            lastname: "Else",
                            date: "2026/05/08_16:21",
                            city: "Washington",
                            country: "USA",
                            textContent: `Lorem ipsum dolor sit amet. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aspernatur tempora nostrum quas, porro deserunt. \n Lorem, ipsum.`,
                            tags: ["tag1", "tag2", "tag3"],
                            media: "",
                            likes: 10,
                            dislikes: 0,
                            commentsCount: 0
                        }} />
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Explore;
