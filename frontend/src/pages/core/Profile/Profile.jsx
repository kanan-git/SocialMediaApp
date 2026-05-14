import React, { useState, useEffect } from "react";
import LoadMore from "../../../components/features/LoadMore/LoadMore.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import { tempFakeFetchPosts, tempFakeLoadMorePosts } from "../../../utilities/main/temp.loadFakeData.js";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Profile.module.css";

function Profile() {
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
        document.title = "Profile";
        loadPosts();
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
                {posts.length > 0 ? posts.map((p,i) => {return (<PostCard key={`postcard_${i}`} data={p} />)}) : <h3>empty</h3>}
            </div>
            {posts.length > 0 && <LoadMore onclick={loadMorePosts} />}
        </section>
    );
};

export default Profile;
