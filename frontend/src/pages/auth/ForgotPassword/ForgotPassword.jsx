import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
    return (
        <main className={styles.main}>
            <section className={styles.forgotpassword}>
                {/* center section forgotpassword */}
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
        </main>
    );
};

export default ForgotPassword;
