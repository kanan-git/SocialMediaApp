import React, { useState, useEffect } from "react";
import LoadMore from "../../../components/features/LoadMore/LoadMore.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import { tempFakeFetchPosts, tempFakeLoadMorePosts } from "../../../utilities/main/temp.loadFakeData.js";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Explore.module.css";

function Explore() {
    const [searchParams, setSearchParams] = useState("");
        const [posts, setPosts] = useState([]);
        const [lastPostIndex, setLastPostIndex] = useState(0);

    function loadPosts() {
        const {dataResult, index} = tempFakeFetchPosts(3);
        setLastPostIndex(index);
        setPosts(dataResult);
    };
    function loadMorePosts() {
        const {dataResult, index} = tempFakeLoadMorePosts(3, lastPostIndex);
        if(dataResult.length) {
            setLastPostIndex(index);
            setPosts(prev => [...prev, ...dataResult]);
        };
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
