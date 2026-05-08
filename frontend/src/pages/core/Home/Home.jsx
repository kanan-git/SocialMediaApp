import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import Hashtag from "../../../components/features/Hashtag/Hashtag.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Home.module.css";
import languages from "../../../utilities/constants/languages.js";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        // 
    }, []);

    return (
        <>
            <Header />

            <main className={styles.main}>
                {/* rewrite all classnames in jsx and css files, also spaces and notes for clean code */}
                {/* key for map (repeat) components */}
                <CoreSideNavbar />
                
                {/* center section homepage */}
                <section className={styles.homefeed}>
                    <form className={styles.homefeed_sharepost}>
                        <div className={styles.homefeed_sharepost_top}>
                            <div>
                                <img src="" alt="profile" />
                            </div>
                            <div action="">
                                <textarea name="" id="" cols="1" rows="6" placeholder="What's on your mind?"></textarea>
                            </div>
                        </div>
                        <div className={styles.homefeed_sharepost_tagbreadcrumb}>
                            <Hashtag name="category1" />
                            <Hashtag name="category2" />
                            <Hashtag name="category3" />
                        </div>
                        <div className={styles.homefeed_sharepost_preferences}>
                            <span>
                                <i className={icons.media}></i>
                                <input type="file" name="" id="" />
                                {/* new input after add one, remove btn for each */}
                                {/* bulk select and clear buttons */}
                            </span>
                            <span>
                                <i className={icons.hashtag}></i>
                                <input type="text" />
                                <button>add</button>
                            </span>
                            <span>
                                <div>
                                    <div>
                                        <i className={icons.public}></i>
                                        <div>
                                            <span>public</span>
                                            <i className={icons.chevronDown}></i>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <i className={icons.public}></i>
                                            <span>public</span>
                                        </div>
                                        <div>
                                            <i className={icons.private}></i>
                                            <span>private</span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <button>post</button>
                    </form>
                    <div className={styles.homefeed_container}>
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
                    <div className={styles.homefeed_loading}>
                        <span>
                            {/* loading more posts... */}
                            load more
                        </span>
                        <i className={icons.reload}></i>
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Home;
