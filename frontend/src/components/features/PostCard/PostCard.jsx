import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./PostCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function PostCard(prop) {
    const carouselContainer = useRef();
    const [mediaIndex, setMediaIndex] = useState(0);

    function prevMedia() {
        const counter = prop.data.media.length;
        if(counter > 0 && mediaIndex-1 >= 0) {
            setMediaIndex(prev => prev-1);
        };
    };
    function nextMedia() {
        const counter = prop.data.media.length;
        if(counter > 0 && mediaIndex+1 < counter) {
            setMediaIndex(prev => prev+1);
        };
    };
    function slideMedia() {
        const container = carouselContainer.current.children;
        let postCards = [];
        for(let i=0; i<container.length; i++) {
            const currentElement = container[i];
            const currentId = String(currentElement.getAttribute("id"));
            const isPostCard = currentId.includes("postmedia_");
            if(isPostCard) {
                postCards.push(currentElement);
            };
        };
        postCards.forEach(
            (element, index) => {
                const postCardId = String(element.getAttribute("id")).split("postmedia_")[1];
                element.style.zIndex = `${postCardId-mediaIndex==0 ? 1 : 0}`;
                element.style.left = `${(postCardId-mediaIndex)*100}%`;
                // if(postCardId == mediaIndex) {
                //     element.style.zIndex = `1`;
                //     element.style.left = `0%`;
                // } else {
                //     element.style.zIndex = `0`;
                //     if(postCardId > mediaIndex) {
                //         element.style.left = `${postCardId-mediaIndex}%`;
                //     } else if(postCardId < mediaIndex) {
                //     };
                //     //         x
                //     // 0   1   2   3   4   5   6   7   8   9
                //     //-200-100 0  100 200 ...
                //     //  postCardId-mediaIndex
                //     // 0-2 1-2 2-2
                //     // ?
                // };
            }
        );
    };

    useEffect(() => {
        if(carouselContainer.current) {
            slideMedia();
        };
    }, [mediaIndex]);

    return (
        <div className={styles.postcard}>
            <div className={styles.postcard_top}>
                <Link to={"/profile?u="+prop.data.username}>
                    <div>
                        <img src={`${prop.data.photo}`} alt="photo" />
                    </div>
                    <div>
                        <div>
                            <span>{prop.data.firstname}</span>
                            <span>{prop.data.lastname}</span>
                        </div>
                        <div>
                            <span>
                                (currentDate - {prop.data.date})h ago
                            </span>
                            <span>
                                •
                            </span>
                            <span>
                                <i className={icons.globe}></i>
                                <span>{prop.data.city}, {prop.data.country}</span>
                            </span>
                        </div>
                    </div>
                </Link>
                <div>
                    <button>
                        <i className={icons.threeDots}></i>
                    </button>
                </div>
            </div>
            <article className={styles.postcard_content}>
                {prop.data.textContent.split("\n").map((p, i) => {return <p key={"paragraph_"+i}>{p}</p>})}
            </article>
            <div className={styles.postcard_tags}>
                {prop.data.tags.map((t, i) => {return <Link key={"link_"+i} to={`/explore?tag=${t}`}>#{t}</Link>})}
            </div>
            {prop.data.media.length>0 && <div className={styles.postcard_medias} ref={carouselContainer}>
                <span>{mediaIndex+1}/{prop.data.media.length}</span>

                {prop.data.media.map((m,i) => {return (
                    <div key={`postmedia_${i}`} className={styles.postmedia} id={`card_${prop.data.id}_postmedia_${i}`}>
                        <img src={m} alt={`image_${i+1}`} />
                    </div>
                )})}

                <button onClick={prevMedia} disabled={mediaIndex<=0}>
                    <i className={icons.slidePrev}></i>
                </button>
                <button onClick={nextMedia} disabled={mediaIndex>=prop.data.media.length-1}>
                    <i className={icons.slideNext}></i>
                </button>
            </div>}
            <div className={styles.postcard_features}>
                <div>
                    <div>
                        <span>{prop.data.likes}</span>
                        <button>
                            <i className={icons.like}></i>
                            <span>like</span>
                        </button>
                    </div>
                    <div>
                        <span>{prop.data.dislikes}</span>
                        <button>
                            <i className={icons.dislike}></i>
                            <span>dislike</span>
                        </button>
                    </div>
                </div>
                <div>
                    <span>{prop.data.commentsCount}</span>
                    <button>
                        <i className={icons.comments}></i>
                        <span>comments</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
