import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Header.module.css";
import languages from "../../../utilities/constants/languages.js";

function Header() {
    return (
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
    );
};

export default Header;
