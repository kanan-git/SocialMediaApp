import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo/logo.svg";
import Header from "../../../components/layout/Header/Header.jsx";
import CoreSideNavbar from "../../../components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "../../../components/layout/CoreSideDiscover/CoreSideDiscover.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
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
                                <label htmlFor="">confirm old password:</label>
                                <input type="password" />
                            </span>
                            <span>
                                <label htmlFor="">set new password:</label>
                                <input type="password" />
                            </span>
                            <span>
                                <label htmlFor="">repeat new password:</label>
                                <input type="password" />
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
                    <div>{/* animated background */}</div>
                    <div>
                        <div>
                            <h1>401</h1>
                            <p>unauthorized</p>
                        </div>
                        <Link to="/">go back to the homepage</Link>
                    </div>
                </section>

                {/* center section error404 */}
                <section className={styles.error404}>
                    <div>{/* animated background */}</div>
                    <div>
                        <div>
                            <h1>404</h1>
                            <p>page not found</p>
                        </div>
                        <Link to="/">go back to the homepage</Link>
                    </div>
                </section>

                {/* center section login */}
                <section className={styles.login}>
                    <div>{/* animated background */}</div>
                    <div>
                        {/* window center form */}
                        <div>
                            <div>
                                <img src="" alt="logo" />
                            </div>
                            <h2>welcome to the socialmediaapp</h2>
                            <Link to="/">continue as a guest</Link>
                            <form action="">
                                <input type="text" placeholder="email" />
                                <input type="password" />
                                <div>
                                    <span>
                                        <input type="checkbox" />
                                        <label htmlFor="">remember me</label>
                                    </span>
                                    <Link to="/auth/recovery">forgot password?</Link>
                                </div>
                                <button>login</button>
                                <button>
                                    <i className={icons.google}></i>
                                    <span>Continue with Google</span>
                                </button>
                                <div>
                                    <span>dont have an account?</span>
                                    <Link to="/auth/register">sign up</Link>
                                </div>
                            </form>
                        </div>
                        <div>
                            {/* company or community names, brand logos, something like that */}
                        </div>
                    </div>
                </section>

                {/* center section register */}
                <section className={styles.register}>
                        {/* window center form */}
                        <div>
                            <div>
                                <img src="" alt="logo" />
                            </div>
                            <h2>create an account</h2>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="firstname" />
                                    <input type="text" placeholder="lastname" />
                                </div>
                                <div>
                                    <input type="text" placeholder="set username" />
                                    <input type="email" placeholder="email address" />
                                </div>
                                <div>
                                    <select name="country" id="">
                                        <option value=""></option>
                                    </select>
                                    <select name="city" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" name="" id="" />
                                    <input type="tel" />
                                </div>
                                <div>
                                    <input type="password" placeholder="create password" />
                                    <input type="password" placeholder="repeat password" />
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">agree</label>
                                </div>
                                <button>register</button>
                                <button>
                                    <i className={icons.google}></i>
                                    <span>Continue with Google</span>
                                </button>
                                <div>
                                    <span>already have an account?</span>
                                    <Link to="/auth/login">sign in</Link>
                                </div>
                            </form>
                        </div>
                        <div>
                            {/* company or community names, brand logos, something like that */}
                        </div>
                </section>

                {/* center section forgotpassword */}
                <section className={styles.forgotpassword}>
                    <div>
                        {/* window center form */}

                        {/* phase 1 */}
                        <form action="">
                            <div>
                                <input type="text" placeholder="enter your username" />
                                <input type="tel" placeholder="your phone number" />
                                <button>send me verification code</button>
                                <Link to="/auth/login">back to the login page</Link>
                            </div>

                            {/* after click */}
                            <div>
                                <input type="text" placeholder="enter 6 digit code" />
                                <span>1:59</span>
                                <button>verify</button>
                            </div>
                        </form>

                        {/* phase 2 */}
                        <form action="">
                            <input type="password" placeholder="set new password" />
                            <input type="password" placeholder="confirm password" />
                            <button>change password</button>
                        </form>
                    </div>
                </section>

                <CoreSideDiscover />
            </main>

            <Footer />
        </>
    );
};

export default Home;
