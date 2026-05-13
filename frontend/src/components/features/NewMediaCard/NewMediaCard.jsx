import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./NewMediaCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function NewMediaCard( {index, value, state} ) {
    function removeMediaFile(e) {
        e.preventDefault();
        if(e.target.value != "") {
            state(prev => prev.filter((m,i) => i!=index));
        };
    };

    return (
        <div className={styles.newmediacard}>
            <span id={`newmedia_${index}`}>{value}</span>
            <button onClick={removeMediaFile}>
                <i className={icons.xMark}></i>
            </button>
        </div>
    );
};

export default NewMediaCard;
