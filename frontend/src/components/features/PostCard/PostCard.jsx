import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./PostCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function PostCard(prop) {
    return (
        <div className={styles.postcard}>
            <div className={styles.postcard_top}>
                <div>
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
                </div>
                <div>
                    <button>
                        <i className={icons.threeDots}></i>
                    </button>
                </div>
            </div>
            <article className={styles.postcard_content}>
                {prop.data.textContent.split("\n").map(p => {return <p>{p}</p>})}
            </article>
            <div className={styles.postcard_tags}>
                {prop.data.tags.map(t => {return <Link to={`/explore?tag=${t}`}>#{t}</Link>})}
            </div>
            {/* carousel if multiple media, no buttons if there is only one, no section if no match for media */}
            {/* <div className={styles.postcard_medias}>
                <span>1/3</span>

                <div>
                    <img src="" alt="image" />
                </div>
                <div>
                    <img src="" alt="image" />
                </div>
                <div>
                    <img src="" alt="image" />
                </div>

                <button>
                    <i className={icons.slidePrev}></i>
                </button>
                <button>
                    <i className={icons.slideNext}></i>
                </button>
            </div> */}
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
