import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadMore from "../../../components/features/LoadMore/LoadMore.jsx";
import Hashtag from "../../../components/features/Hashtag/Hashtag.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Home.module.css";
import languages from "../../../utilities/constants/languages.js";

function Home() {
    const navigate = useNavigate();
    // error
    // loading
    // searchParams
    // posts
    // ~ [...prev, ...newData] ~ //

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <section className="main_container">
            {/* <p>{posts.a}</p>
            <p>{posts.b}</p>
            <button onClick={test123}>change posts</button> */}

            {/* center section homepage */}
            <form className={styles.homefeed_sharepost}>
                <div className={styles.homefeed_sharepost_top}>
                    <div>
                        <img src="" alt="profile" />
                    </div>
                    <div>
                        <textarea name="" id="" cols="1" rows="6" placeholder="What's on your mind?"></textarea>
                    </div>
                </div>
                <div className={styles.homefeed_sharepost_tagbreadcrumb}>
                    <Hashtag key={`hashtagcard_${0}`} name="category1" />
                    <Hashtag key={`hashtagcard_${1}`} name="category2" />
                    <Hashtag key={`hashtagcard_${2}`} name="category3" />
                </div>
                <div className={styles.homefeed_sharepost_preferences}>
                    <span>
                        <i className={icons.media}></i>
                        <input type="file" name="" id="" />
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
            <div className="cardcontainer">
                <PostCard key={`postcard_${0}`} data={{
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
                <PostCard key={`postcard_${1}`} data={{
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
                <PostCard key={`postcard_${2}`} data={{
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
            <LoadMore />
        </section>
    );
};

export default Home;
