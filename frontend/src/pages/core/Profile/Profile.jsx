import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Profile.module.css";

function Profile() {
    useEffect(() => {
        document.title = "Profile";
    }, []);

    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.profile}>
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
                    <div className={styles.profile_container}>
                        {/* cards, own posts, own comments */}
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Profile;
