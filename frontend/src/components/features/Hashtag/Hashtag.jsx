import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Hashtag.module.css";
import languages from "../../../utilities/constants/languages.js";

function Hashtag( {name} ) {
    function removeTag(e) {
        e.preventDefault();
    };

    return (
        <Link className={styles.hashtag} to={`/explore?tag=${name}`}>
            <span>
                #{name}
            </span>
            <button onClick={removeTag}>
                <i className={icons.xMark}></i>
            </button>
        </Link>
    );
};

export default Hashtag;
