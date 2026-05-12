import React, { useState, useEffect } from "react";
import LoadMore from "../../../components/features/LoadMore/LoadMore.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Explore.module.css";

function Explore() {
    const [searchParams, setSearchParams] = useState("");
    const [posts, setPosts] = useState([]);

    function loadPosts() {
        const tempFakeData = [
            {
                photo: "image_url",
                firstname: "Lorem",
                lastname: "Ipsum",
                username: "awdawcdaw",
                date: "2026/05/08_16:21",
                city: "Baku",
                country: "Azerbaijan",
                textContent: "...",
                tags: ["a", "b", "c"],
                media: "",
                likes: 20,
                dislikes: 999,
                commentsCount: 1002
            },
            {
                photo: "image_url",
                firstname: "John",
                lastname: "Doe",
                username: "awc8dyaouwbdc",
                date: "2026/05/08_16:21",
                city: "Ankara",
                country: "Turkey",
                textContent: "Donde esta la biblioteka ?",
                tags: ["awdawd", "wweee", "sss1"],
                media: "",
                likes: 10000,
                dislikes: 50,
                commentsCount: 340
            },
            {
                photo: "image_url",
                firstname: "Someone",
                lastname: "Else",
                username: "123123123123123",
                date: "2026/05/08_16:21",
                city: "Washington",
                country: "USA",
                textContent: `Lorem ipsum dolor sit amet. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aspernatur tempora nostrum quas, porro deserunt. \n Lorem, ipsum.`,
                tags: ["tag1", "tag2", "tag3"],
                media: "",
                likes: 10,
                dislikes: 0,
                commentsCount: 0
            }
        ];
        setPosts(tempFakeData);
    };
    function loadMorePosts() {
        const tempFakePageTwoData = [
            {
                photo: "image_url",
                firstname: "Simeon22",
                lastname: "Olsen22",
                username: "eeeeeeeeeeeeeeee1",
                date: "2026/05/08_16:21",
                city: "Instanbul",
                country: "Turkey",
                textContent: `Lorem ipsum dolor sit amet. \n Lorem ipsum dolor sit amet. \n Lorem ipsum dolor sit amet. \n Lorem ipsum dolor sit amet. \n Lorem ipsum dolor sit amet.`,
                tags: ["tag1111", "tag2222", "tag3333"],
                media: "",
                likes: 999999,
                dislikes: 123,
                commentsCount: 80
            }
        ];
        setPosts(prev => [...prev, ...tempFakePageTwoData]);
    };

    useEffect(() => {
        document.title = "Explore";
        loadPosts();
    }, []);

    return (
        <section className="main_container">
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
            <div className="cardcontainer">
                {posts.length > 0 ? posts.map((p,i) => {return (<PostCard key={`postcard_${i}`} data={p} />)}) : <h3>empty</h3>}
            </div>
            {posts.length > 0 && <LoadMore onclick={loadMorePosts} />}
        </section>
    );
};

export default Explore;
