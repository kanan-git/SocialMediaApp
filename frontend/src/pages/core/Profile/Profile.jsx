import React, { useState, useEffect } from "react";
import LoadMore from "../../../components/features/LoadMore/LoadMore.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Profile.module.css";

function Profile() {
    useEffect(() => {
        document.title = "Profile";
    }, []);

    return (
        <section className="main_container">
            {/* center section profile */}
            <div className={styles.profile_main}>
                <div className={styles.profile_main_cover}>
                    <img src="" alt="cover" />
                </div>
                <div className={styles.profile_main_credentials}>
                    <div>
                        <img src="" alt="profile" />
                    </div>
                    <div>
                        <h2>firstname lastname</h2>
                        <p>@username</p>
                        <div>
                            <i className={icons.map}></i>
                            <span>Baku, Azerbaijan</span>
                        </div>
                    </div>
                </div>
                <article className={styles.profile_main_bio}>
                    <p>
                        Bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi beatae eos facere ab, tempore quis.
                    </p>
                    <span>#hashtag1</span>
                    <span>#hashtag2</span>
                    <span>#hashtag3</span>
                </article>
                <div className={styles.profile_main_statistics}>
                    <div>
                        <i className={icons.statistic}></i>
                    </div>
                    <div>
                        <div>
                            <b>5.4k</b>
                            <p>followers</p>
                        </div>
                        <div>
                            <b>1.8k</b>
                            <p>following</p>
                        </div>
                        <div>
                            <b>50</b>
                            <p>posts</p>
                        </div>
                        <div>
                            <b>12</b>
                            <p>comments</p>
                        </div>
                    </div>
                </div>
                <div className={styles.profile_main_cta}>
                    {/* <button>
                        <i className={icons.editProfile}></i>
                        <span>edit profile</span>
                    </button> */}
                    <button>
                        <i className={icons.sendMessageTo}></i>
                        <span>message</span>
                    </button>
                </div>
            </div>
            <div className={styles.profile_navbar}>
                <button>all</button>
                <button>posts</button>
                <button>comments</button>
            </div>
            <div className="cardcontainer">
                {/* cards, own posts, own comments */}
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

export default Profile;
