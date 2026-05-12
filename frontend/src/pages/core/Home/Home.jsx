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
    const [textContent, setTextContent] = useState("");
    const [tags, setTags] = useState(["category1", "category2", "category3"]);
    const [media, setMedia] = useState([]);
    const [error, setError] = useState([]);
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
    function createPost() {
        const data = {
            photo: "my_photoUrl",
            firstname: "my_firstname",
            lastname: "my_lastname",
            username: "my_username",
            date: "_timestamp_",
            city: "my_city",
            country: "my_country",
            textContent: textContent,
            tags: [],
            media: []
        };
    };

    useEffect(() => {
        document.title = "Home";
        loadPosts();
    }, []);

    return (
        <section className="main_container">
            {/* center section homepage */}
            <form className={styles.homefeed_sharepost} onSubmit={createPost}>
                <div className={styles.homefeed_sharepost_top}>
                    <div>
                        <img src="" alt="profile" />
                    </div>
                    <div>
                        <textarea 
                        name="textContent" id="textContent" 
                        cols="1" rows="6" 
                        placeholder="What's on your mind?" 
                        value={textContent} onChange={e => setTextContent(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                {tags.length && <div className={styles.homefeed_sharepost_tagbreadcrumb}>
                    {tags.length && tags.map((tag,index) => {return (<Hashtag key={`hashtagcard_${index}`} name={tag} />)})}
                </div>}
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
                {posts.length > 0 ? posts.map((p,i) => {return (<PostCard key={`postcard_${i}`} data={p} />)}) : <h3>empty</h3>}
            </div>
            {posts.length > 0 && <LoadMore onclick={loadMorePosts} />}
        </section>
    );
};

export default Home;
