import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Login.module.css";

function Login() {
    return (
        <main className={styles.main}>
            <section className={styles.login}>
                {/* center section login */}
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
        </main>
    );
};

export default Login;
