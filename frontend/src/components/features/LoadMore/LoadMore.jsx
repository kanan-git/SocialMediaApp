import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./LoadMore.module.css";
import languages from "../../../utilities/constants/languages.js";

function LoadMore( {onclick} ) {
    const [loading, setLoading] = useState(false);

    function activateLoading() {
        setLoading(true);
        onclick();
        // setTimeout(() => {
            // async function
            setLoading(false);
        // }, 3000);
    };
    
    return (
        <div className={styles.loadmore} onClick={activateLoading}>
            <span>
                {loading ? "loading more posts..." : "load more"}
            </span>
            <i className={`${icons.reload} ${loading ? styles.loading : null}`}></i>
        </div>
    );
};

export default LoadMore;
