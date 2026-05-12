import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./LoadMore.module.css";
import languages from "../../../utilities/constants/languages.js";

function LoadMore() {
    return (
        <div className={styles.loadmore}>
            <span>
                {/* loading more posts... */}
                load more
            </span>
            <i className={icons.reload}></i>
        </div>
    );
};

export default LoadMore;
