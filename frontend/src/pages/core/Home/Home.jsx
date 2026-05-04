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
                        <i className={icons.reload}></i>
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
                    <h1>messages</h1>
                    <div className={styles.messages_top}>
                        <h2>
                            chats (3):
                        </h2>
                        <div>
                            <input type="search" placeholder="Search for chats" />
                        </div>
                    </div>
                    <div className={styles.messages_container}>
                        <div className={styles.dmcard}>
                            <div>
                                <div>
                                    <img src="" alt="photo" />
                                </div>
                                <div>
                                    <p>John Doe</p>
                                    <span>you conditional: last message</span>
                                </div>
                            </div>
                            <div>
                                <span>3</span>
                            </div>
                        </div>
                        <div className={styles.dmcard}>
                            <div>
                                <div>
                                    <img src="" alt="photo" />
                                </div>
                                <div>
                                    <p>John Doe</p>
                                    <span>you conditional: last message</span>
                                </div>
                            </div>
                            <div>
                                <span>3</span>
                            </div>
                        </div>
                        <div className={styles.dmcard}>
                            <div>
                                <div>
                                    <img src="" alt="photo" />
                                </div>
                                <div>
                                    <p>John Doe</p>
                                    <span>you conditional: last message</span>
                                </div>
                            </div>
                            <div>
                                <span>3</span>
                            </div>
                        </div>
                        {/* open chat on right side over discovery or replace */}
                    </div>
                </section>

                {/* center section profile */}
                <section className={styles.profile}>
                    <div className={styles.profile_main}>
                        <div>
                            <img src="" alt="cover" />
                        </div>
                        <div>
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
                        <article>
                            <span>
                                Bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi beatae eos facere ab, tempore quis.
                            </span>
                            <span>#hashtag1</span>
                            <span>#hashtag2</span>
                            <span>#hashtag3</span>
                        </article>
                        <div>
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
                        <div>
                            <button>
                                <i className={icons.editProfile}></i>
                                <span>edit profile</span>
                            </button>
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

                {/* center section about */}
                <section className={styles.about}>
                    <h1>about</h1>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="image" />
                            </div>
                            <h1>socialmediaapp</h1>
                        </div>
                        <article>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate a quidem delectus labore! Hic quaerat tempore magni aut reprehenderit cumque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, neque animi distinctio eius laborum nulla. Possimus ducimus accusantium repellat velit, beatae veniam sit omnis sint numquam, dicta necessitatibus magni corrupti.</p>
                            <p>Aliquid exercitationem libero magni nisi minima iusto, sunt mollitia corporis commodi enim ipsum cupiditate quibusdam sapiente rerum laudantium ducimus id. Similique, iste odit. Corrupti aliquid velit fugit dicta soluta nemo.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </article>
                    </div>
                    <div>
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
                    <div>
                        <div>
                            <div>
                                <strong>514</strong>
                                <span>users</span>
                            </div>
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
                            <div>
                                <strong>1M</strong>
                                <span>posts</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* center section contact */}
                <section className={styles.contact}>
                    <h1>contact us</h1>
                    <div>
                        {/* geo location api */}
                    </div>
                    <div>
                        <div>
                            <form action="">
                                <h2>get in touch</h2>
                                <div>
                                    <div>
                                        <label htmlFor="">name</label>
                                        <input type="text" placeholder="enter your full name" />
                                    </div>
                                    <div>
                                        <label htmlFor="">email</label>
                                        <input type="email" placeholder="enter your email address" />
                                    </div>
                                    <div>
                                        <label htmlFor="">message</label>
                                        <textarea name="" id="" placeholder="write your message here..."></textarea>
                                    </div>
                                    <button>send message</button>
                                </div>
                            </form>
                            <div>
                                <h2>our office</h2>
                                <ul>
                                    <li>
                                        <i className={icons.map}></i>
                                        <span>987 Untitled Street, Baku</span>
                                    </li>
                                    <li>
                                        <i className={icons.telephone}></i>
                                        <span>+994-01-234-56-78</span>
                                    </li>
                                    <li>
                                        <i className={icons.envelopeAt}></i>
                                        <span>hello@socialmediaapp.com</span>
                                    </li>
                                    <li>
                                        <i className={icons.postage}></i>
                                        <span>AZ 1234, Azerbaijan</span>
                                    </li>
                                    <li>
                                        <i className={icons.clock}></i>
                                        <span>mon - fri, 9:00 AM - 5:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* center section notifications */}
                <section className={styles.notifications}>
                    <h1>notifications</h1>
                    <div>
                        <div>
                            <button>all</button>
                            <button>unread</button>
                            <button>read</button>
                        </div>
                        <div>
                            <button>
                                <span>mark all as read</span>
                                <i className={icons.markAllRead}></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className={styles.notificationcard}>
                            <div>
                                <div>
                                    <img src="" alt="profile" />
                                </div>
                                <div>
                                    <i className={icons.like}></i>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <b>Wade Warren</b>
                                    <span>liked your post.</span>
                                </span>
                                <span>
                                    2m ago
                                </span>
                            </div>
                            <div>{/* indicator */}</div>
                        </div>
                        <div className={styles.notificationcard}>
                            <div>
                                <div>
                                    <img src="" alt="profile" />
                                </div>
                                <div>
                                    <i className={icons.like}></i>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <b>Wade Warren</b>
                                    <span>liked your post.</span>
                                </span>
                                <span>
                                    2m ago
                                </span>
                            </div>
                            <div>{/* indicator */}</div>
                        </div>
                    </div>
                </section>

                {/* center section settings */}
                <section className={styles.settings}>
                    <h1>settings</h1>
                    <form action="">
                        <div>
                            <span>
                                <label htmlFor="">firstname:</label>
                                <input type="text" />
                            </span>
                            <span>
                                <label htmlFor="">lastname:</label>
                                <input type="text" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">username:</label>
                                <input type="text" />
                            </span>
                            <span>
                                <label htmlFor="">email:</label>
                                <input type="email" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">country:</label>
                                <select name="country" id="">
                                    <option value=""></option>
                                </select>
                            </span>
                            <span>
                                <label htmlFor="">city:</label>
                                <select name="city" id="">
                                    <option value=""></option>
                                </select>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label htmlFor="">mobile number:</label>
                                <input type="tel" />
                            </span>
                            <span>
                                <label htmlFor="">date of birth:</label>
                                <input type="date" />
                            </span>
                        </div>
                        <div>
                            <span>
                                <button>cancel</button>
                                <button>save</button>
                            </span>
                            <span>
                                <button>delete account</button>
                            </span>
                        </div>
                    </form>
                </section>

                {/* center section admindashboard */}
                <section className={styles.admindashboard}>
                    {/*  */}
                </section>

                {/* center section adminusers */}
                <section className={styles.adminusers}>
                    {/*  */}
                </section>

                {/* center section adminposts */}
                <section className={styles.adminposts}>
                    {/*  */}
                </section>

                {/* center section admincomments */}
                <section className={styles.admincomments}>
                    {/*  */}
                </section>

                {/* center section adminnotifications */}
                <section className={styles.adminnotifications}>
                    {/*  */}
                </section>

                {/* center section error401 */}
                <section className={styles.error401}>
                    {/*  */}
                </section>

                {/* center section error404 */}
                <section className={styles.error404}>
                    {/*  */}
                </section>

                {/* center section login */}
                <section className={styles.login}>
                    {/*  */}
                </section>

                {/* center section register */}
                <section className={styles.register}>
                    {/*  */}
                </section>

                {/* center section forgotpassword */}
                <section className={styles.forgotpassword}>
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
