import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Home.module.css";
import languages from "../../../utilities/constants/languages.js";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        // 
    }, []);

    return (
        <>
            <Header />

            <main className={styles.main}>
                <CoreSideNavbar />
                
                {/* center section homepage */}
                <section className={styles.homefeed}>
                    <form className={styles.homefeed_sharepost}>
                        <div className={styles.homefeed_sharepost_top}>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div action="">
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                        <div className={styles.homefeed_sharepost_tagbreadcrumb}>
                            <div>
                                <span>
                                    #category1
                                </span>
                                <button>
                                    <i className={icons.xMark}></i>
                                </button>
                            </div>
                            <div>
                                <span>
                                    #category2
                                </span>
                                <button>
                                    <i className={icons.xMark}></i>
                                </button>
                            </div>
                            <div>
                                <span>
                                    #category3
                                </span>
                                <button>
                                    <i className={icons.xMark}></i>
                                </button>
                            </div>
                        </div>
                        <div className={styles.homefeed_sharepost_preferences}>
                            <span>
                                <i className={icons.media}></i>
                                <input type="file" name="" id="" />
                            </span>
                            <span>
                                <i className={icons.hashtag}></i>
                                <input type="text" />
                            </span>
                            <span>
                                <div>
                                    <div>
                                        <i className={icons.public}></i>
                                        <span>public</span>
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
                    </form>
                    <div className={styles.homefeed_container}>
                        <div className={styles.postcard}>
                            <div className={styles.postcard_top}>
                                </div>
                                    <div>
                                        <img src="" alt="photo" />
                                    </div>
                                    <div>
                                        <div>
                                            <span>John</span>
                                            <span>Doe</span>
                                        </div>
                                        <div>
                                            <span>
                                                2h ago
                                            </span>
                                            <span>
                                                •
                                            </span>
                                            <span>
                                                <i className={icons.globe}></i>
                                                <span>Baku, Azerbaijan</span>
                                            </span>
                                        </div>
                                    </div>
                                <div>
                                <div>
                                    <button>
                                        <i className={icons.threeDots}></i>
                                    </button>
                                </div>
                            </div>
                            <article className={styles.postcard_content}>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aspernatur tempora nostrum quas, porro deserunt.</p>
                                <p>Lorem, ipsum.</p>
                            </article>
                            <div className={styles.postcard_tags}>
                                <span>#nature</span>
                                <span>#travel</span>
                                <span>#adventure</span>
                            </div>
                            <div className={styles.postcard_medias}>
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
                                    ◄
                                </button>
                                <button>
                                    ►
                                </button>
                            </div>
                            <div className={styles.postcard_features}>
                                <div>
                                    <button>
                                        <span>123k</span>
                                        <i className={icons.like}></i>
                                        <span>like</span>
                                    </button>
                                    <button>
                                        <span>999</span>
                                        <i className={icons.dislike}></i>
                                        <span>dislike</span>
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <span>0</span>
                                        <i className={icons.comments}></i>
                                        <span>comments</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homefeed_loading}>
                        <i className={icons.reload}></i>
                        <span>loading more posts...</span>
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Home;
