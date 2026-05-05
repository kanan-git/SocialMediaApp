import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Register.module.css";

function Register() {
    return (
        <main className={styles.main}>
            <section className={styles.register}>
                {/* center section register */}
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
        </main>
    );
};

export default Register;
