import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import TrendHashtagCard from "../../features/TrendHashtagCard/TrendHashtagCard.jsx";
import DiscoverPeopleCard from "../../features/DiscoverPeopleCard/DiscoverPeopleCard.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./CoreSideDiscover.module.css";
import languages from "../../../utilities/constants/languages.js";

function CoreSideDiscover() {
    return (
        <aside className={styles.discover}>
            {/* sidebar right */}
            <div className={styles.trendtags}>
                <div className={styles.trendtags_top}>
                    <h3>trending hashtags</h3>
                    <Link to="/explore">see all</Link>
                </div>
                <div className={styles.trendtags_container}>
                    <TrendHashtagCard imgPath="" category="travel" postCount={1000} />
                    <TrendHashtagCard imgPath="" category="art" postCount={0} />
                    <TrendHashtagCard imgPath="" category="tech" postCount={99999} />
                    <TrendHashtagCard imgPath="" category="food" postCount={1} />
                    <TrendHashtagCard imgPath="" category="politics" postCount={5} />
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.people_top}>
                    <h3>people you may know hashtags</h3>
                    <Link to="/explore">see all</Link>
                </div>
                <div className={styles.people_container}>
                    <DiscoverPeopleCard imgPath="" firstname="Lorem" lastname="Ipsum" city="Baku" country="Azerbaijan" isFollowing={false} />
                    <DiscoverPeopleCard imgPath="" firstname="Firstname" lastname="Lastname" city="Ganja" country="Azerbaijan" isFollowing={false} />
                    <DiscoverPeopleCard imgPath="" firstname="John" lastname="Doe" city="Istanbul" country="Turkey" isFollowing={false} />
                    <DiscoverPeopleCard imgPath="" firstname="Unnamed" lastname="User" city="Ankara" country="Turkey" isFollowing={false} />
                    <DiscoverPeopleCard imgPath="" firstname="Abc" lastname="Def" city="New York" country="USA" isFollowing={false} />
                </div>
            </div>
        </aside>
    );
};

export default CoreSideDiscover;
