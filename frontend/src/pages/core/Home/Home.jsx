import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo/logo.svg";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Home.module.css";
import languages from "../../../utilities/constants/languages.js";

function Home() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        navigate("/explore?search=" + encodeURIComponent(query));
    };

    useEffect(() => {
        // 
    }, []);

    return (
        <>
            <header className={styles.header}>
                {/* mobile menu toggle */}
                {/* <button></button> */}

                {/* leftside logo */}
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                </div>

                {/* center searchbar */}
                <form 
                className={styles.search} 
                onSubmit={handleSearch}
                >
                    <button className={styles.search_button}>
                        search
                    </button>
                    <input 
                    className={styles.search_bar} 
                    type="search" 
                    value={query} 
                    onChange={e => setQuery(e.target.value)} 
                    placeholder="search for posts, people, hashtags..." 
                    />
                </form>

                {/* rightside guest authentication */}
                <div className={styles.auth}>
                    <button className={styles.auth_button} onClick={e => navigate("/auth/login")}>
                        sign in
                    </button>
                    <button className={styles.auth_button} onClick={e => navigate("/auth/register")}>
                        create account
                    </button>
                </div>

                {/* rightside user actions */}
                <div className={styles.cta}>
                    {/* —lightmode— */}
                    <div className={styles.cta_lightmode}>
                        <button className={styles.cta_lightmode_button}>
                            <div className={styles.cta_lightmode_button_switch}>
                                <i className={icons.sunFill}></i>
                            </div>
                            <i className={icons.sun}></i>
                            <i className={icons.moon}></i>
                        </button>
                    </div>

                    {/* —language— */}
                    <div className={styles.cta_language}>
                        <div className={styles.cta_language_output}>
                            {languages.en}
                        </div>
                        <i className={icons.chevronDown}></i>

                        {/* —dropdown— */}
                        <div className={styles.cta_language_dropdown}>
                            <div>
                                <img src="/public/images/countries/flag_en.svg" alt="flag_en" />
                                <span>{languages.en}</span>
                            </div>
                            <div>
                                <img src="/public/images/countries/flag_az.svg" alt="flag_az" />
                                <span>{languages.az}</span>
                            </div>
                            <div>
                                <img src="/public/images/countries/flag_tr.svg" alt="flag_tr" />
                                <span>{languages.tr}</span>
                            </div>
                        </div>
                    </div>

                    {/* —profile— */}
                    <div className={styles.cta_profile}>
                        <div className={styles.cta_profile_image}>
                            <img src="/profile/guest.png" alt="avatar" />
                        </div>
                        <i className={icons.chevronDown}></i>

                        {/* —dropdown— */}
                        <div className={styles.dropdown}>
                            <button className={styles.dropdown_button}>
                                notifications
                                <div className={styles.indicator}>
                                    999
                                </div>
                            </button>
                            <button className={styles.dropdown_button}>
                                messages
                                <div className={styles.indicator}>
                                    999
                                </div>
                            </button>
                            <button className={styles.dropdown_button}>
                                logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                {/* admin navbar left */}
                <aside className={styles.adminnav}>
                    <ul>
                        <li>
                            <Link to="/admin/#">
                                <i className={icons.dashboard}></i>
                                <span>dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/#">
                                <i className={icons.profile}></i>
                                <span>notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/#">
                                <i className={icons.people}></i>
                                <span>users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/#">
                                <i className={icons.posts}></i>
                                <span>posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/#">
                                <i className={icons.comments}></i>
                                <span>comments</span>
                            </Link>
                        </li>
                    </ul>
                </aside>

                {/* sidebar left */}
                <aside className={styles.nav}>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className={icons.home}></i>
                                <span>home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className={icons.explore}></i>
                                <span>explore</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className={icons.profile}></i>
                                <span>profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className={icons.messages}></i>
                                <span>messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className={icons.notifications}></i>
                                <span>notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className={icons.settings}></i>
                                <span>settings</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className={icons.about}></i>
                                <span>about</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className={icons.contact}></i>
                                <span>contact</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button>+ create post</button>
                    </div>
                </aside>

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
                        <span>loading more posts...</span>
                    </div>
                </section>

                {/* center section explore */}
                <section className={styles.explore}>
                    <div className={styles.explore_top}>
                        <h1>
                            explore
                        </h1>
                        <div>
                            <span>"John Doe" search results (99):</span>
                        </div>
                    </div>
                    <div className={styles.explore_preferences}>
                        <button>all</button>
                        <button>people</button>
                        <button>posts</button>
                        <button>hashtags</button>
                        <button>trending</button>
                    </div>
                    <div className={styles.explore_container}>
                        {/* postcards here */}
                    </div>
                </section>

                {/* center section messages */}
                <section className={styles.messages}>
                    {/*  */}
                </section>

                {/* center section profile */}
                <section className={styles.profile}>
                    {/*  */}
                </section>

                {/* sidebar right */}
                <aside className={styles.discover}>
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
            </main>

            <footer className={styles.footer}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet cum dolor?
                        </p>
                        <div>
                            <button>
                                <i className={icons.youtube}></i>
                            </button>
                            <button>
                                <i className={icons.linkedin}></i>
                            </button>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.group}>
                            <div className={styles.column}>
                                <h4>platform</h4>
                                <ul>
                                    <li>
                                        <Link to="/">home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">explore</Link>
                                    </li>
                                    <li>
                                        <Link to="/">messages</Link>
                                    </li>
                                    <li>
                                        <Link to="/">notifications</Link>
                                    </li>
                                    <li>
                                        <Link to="/">profile</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <h4>company</h4>
                                <ul>
                                    <li>
                                        <Link to="/">about</Link>
                                    </li>
                                    <li>
                                        <Link to="/">contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/">blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/">careers</Link>
                                    </li>
                                    <li>
                                        <Link to="/">press</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.column}>
                                <h4>support</h4>
                                <ul>
                                    <li>
                                        <Link to="/">help center</Link>
                                    </li>
                                    <li>
                                        <Link to="/">terms of service</Link>
                                    </li>
                                    <li>
                                        <Link to="/">privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">community guidelines</Link>
                                    </li>
                                    <li>
                                        <Link to="/">cookies policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <h4>contact us</h4>
                                <ul>
                                    <li>
                                        <i className={icons.envelopeAt}></i>
                                        <span>hello@socialmediaapp.com</span>
                                    </li>
                                    <li>
                                        <i className={icons.telephone}></i>
                                        <span>+994-01-234-56-78</span>
                                    </li>
                                    <li>
                                        <i className={icons.map}></i>
                                        <span>987 Untitled Street, Baku</span>
                                    </li>
                                    <li>
                                        <i className={icons.postage}></i>
                                        <span>AZ 1234, Azerbaijan</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>
                        © 2026 SocialMediaApp. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Home;
