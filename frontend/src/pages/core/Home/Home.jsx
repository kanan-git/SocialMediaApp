import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadMore from "../../../components/features/LoadMore/LoadMore.jsx";
import Hashtag from "../../../components/features/Hashtag/Hashtag.jsx";
import PostCard from "../../../components/features/PostCard/PostCard.jsx";
import NewMediaCard from "../../../components/features/NewMediaCard/NewMediaCard.jsx";
import { tempFakeFetchPosts, tempFakeLoadMorePosts } from "../../../utilities/main/temp.loadFakeData.js";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Home.module.css";
import languages from "../../../utilities/constants/languages.js";
import Modal from "../../../components/ui/Modal/Modal.jsx";
import Modal from "../../../components/ui/Dropdown/Dropdown.jsx";
import Modal from "../../../components/ui/Announcement/Announcement.jsx";

function Home() {
    const navigate = useNavigate();
    const [textContent, setTextContent] = useState("");
    const [tags, setTags] = useState([]);
    const [media, setMedia] = useState([]);
    const [error, setError] = useState([]);
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
    function createPost(e) {
        e.preventDefault();
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
    async function addMediaFile(e) {
        if(media.length < 10) {
            if(e.target.value != "") {
                await setMedia(prev => [...prev, e.target.value]);
                e.target.value = "";
            };
        };
    };
    async function addTag(e) {
        e.preventDefault();
        console.log();
        if(tags.length < 3) {
            const input = document.querySelector("#tag_input");
            if(input.value != "") {
                await setTags(prev => [...prev, input.value]);
                input.value = "";
            };
        };
        console.log(tags);
    };

    useEffect(() => {
        document.title = "Home";
        loadPosts();
    }, []);

    return (
        <section className="main_container">
            <Modal />
            <Dropdown />
            <Announcement />

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
                {tags.length>0 && <div className={styles.homefeed_sharepost_tagbreadcrumb}>
                    {tags.length>0 && tags.map((tag,index) => {return (<Hashtag key={`hashtagcard_${index}`} name={tag} index={index} state={setTags} />)})}
                </div>}
                <div className={styles.homefeed_sharepost_preferences}>
                    <div>
                        <div>
                            <i className={icons.media}></i>
                            <input type="file" name="file" id="file" onChange={addMediaFile} disabled={media.length==10} />
                            {media.length>0 && <span>({media.length})</span>}
                        </div>
                        <div>
                            {media.length > 0 && media.map((m,i) => {return(<NewMediaCard key={`mcard_${i}`} value={m} index={i} state={setMedia} />)})}
                        </div>
                    </div>
                    <span>
                        <i className={icons.hashtag}></i>
                        <input type="text" placeholder={"Add hashtag category "+tags.length+"/3"} id="tag_input" />
                        <button onClick={addTag} disabled={tags.length==3}>add</button>
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
