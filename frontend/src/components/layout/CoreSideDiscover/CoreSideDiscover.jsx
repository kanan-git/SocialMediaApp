import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./CoreSideDiscover.module.css";
import languages from "../../../utilities/constants/languages.js";

function CoreSideDiscover() {
    return (
        <aside className={styles.discover}>
            {/* sidebar right */}
            <div className={styles.trendtags}>
                <div className={styles.trendtags_top}>
                    <h3>trending hashtags</h3>
                    <Link to="/explore">see all</Link>
                </div>
                <div className={styles.trendtags_container}>
                    <div className={styles.hashtagcard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <strong>#category</strong>
                            <span>1.2M posts</span>
                        </div>
                    </div>
                    <div className={styles.hashtagcard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <strong>#category</strong>
                            <span>1.2M posts</span>
                        </div>
                    </div>
                    <div className={styles.hashtagcard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <strong>#category</strong>
                            <span>1.2M posts</span>
                        </div>
                    </div>
                    <div className={styles.hashtagcard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <strong>#category</strong>
                            <span>1.2M posts</span>
                        </div>
                    </div>
                    <div className={styles.hashtagcard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <strong>#category</strong>
                            <span>1.2M posts</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.trendtags_top}>
                    <h3>people you may know hashtags</h3>
                    <Link to="/explore">see all</Link>
                </div>
                <div className={styles.people_container}>
                    <div className={styles.peoplecard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <h5>firstname lastname</h5>
                            <span>Baku, Azerbaijan</span>
                        </div>
                        <div>
                            <button>
                                follow
                            </button>
                            <button>
                                <i className={icons.xMark}></i>
                            </button>
                        </div>
                    </div>
                    <div className={styles.peoplecard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <h5>firstname lastname</h5>
                            <span>Baku, Azerbaijan</span>
                        </div>
                        <div>
                            <button>
                                follow
                            </button>
                            <button>
                                <i className={icons.xMark}></i>
                            </button>
                        </div>
                    </div>
                    <div className={styles.peoplecard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <h5>firstname lastname</h5>
                            <span>Baku, Azerbaijan</span>
                        </div>
                        <div>
                            <button>
                                follow
                            </button>
                            <button>
                                <i className={icons.xMark}></i>
                            </button>
                        </div>
                    </div>
                    <div className={styles.peoplecard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <h5>firstname lastname</h5>
                            <span>Baku, Azerbaijan</span>
                        </div>
                        <div>
                            <button>
                                follow
                            </button>
                            <button>
                                <i className={icons.xMark}></i>
                            </button>
                        </div>
                    </div>
                    <div className={styles.peoplecard}>
                        <div>
                            <img src="" alt="photo" />
                        </div>
                        <div>
                            <h5>firstname lastname</h5>
                            <span>Baku, Azerbaijan</span>
                        </div>
                        <div>
                            <button>
                                follow
                            </button>
                            <button>
                                <i className={icons.xMark}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default CoreSideDiscover;
