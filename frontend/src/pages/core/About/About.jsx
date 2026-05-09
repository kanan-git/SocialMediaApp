import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./About.module.css";

function About() {
    useEffect(() => {
        document.title = "About";
    }, []);
    
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <CoreSideNavbar />

                <section className={styles.about}>
                    {/* center section about */}
                    <h1 className={styles.about_header}>about</h1>
                    <div className={styles.about_cover}>
                        <div>
                            <div>
                                <img src="" alt="image" />
                            </div>
                            <h2>SocialMediaApp</h2>
                        </div>
                        <article>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate a quidem delectus labore! Hic quaerat tempore magni aut reprehenderit cumque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, neque animi distinctio eius laborum nulla. Possimus ducimus accusantium repellat velit, beatae veniam sit omnis sint numquam, dicta necessitatibus magni corrupti.</p>
                            <p>Aliquid exercitationem libero magni nisi minima iusto, sunt mollitia corporis commodi enim ipsum cupiditate quibusdam sapiente rerum laudantium ducimus id. Similique, iste odit. Corrupti aliquid velit fugit dicta soluta nemo.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </article>
                    </div>
                    <div className={styles.about_info}>
                        <div>
                            <div>
                                <i className={icons.aboutUsers}></i>
                                <h3>users</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente similique delectus sequi! Quia, ad quos? Dignissimos molestiae maiores accusantium.</p>
                        </div>
                        <div>
                            <div>
                                <i className={icons.aboutPosts}></i>
                                <h3>posts</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis similique laudantium, quam ullam vero sunt, pariatur, culpa accusamus neque magni quasi.</p>
                        </div>
                        <div>
                            <div>
                                <i className={icons.aboutChats}></i>
                                <h3>chats</h3>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odit, unde nihil debitis impedit esse facere blanditiis ipsa cum tenetur aperiam. Cum recusandae dicta vero ab! Aliquam molestias officia, necessitatibus ea blanditiis provident excepturi molestiae</p>
                        </div>
                    </div>
                    <div className={styles.about_stats}>
                        <div>
                            <div>
                                <strong>514</strong>
                                <span>users</span>
                            </div>
                            <hr />
                            <div>
                                <strong>70</strong>
                                <span>countries</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <strong>5.5M</strong>
                                <span>comments</span>
                            </div>
                            <hr />
                            <div>
                                <strong>1M</strong>
                                <span>posts</span>
                            </div>
                        </div>
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default About;
