import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./TrendHashtagCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function TrendHashtagCard( {imgPath, category, postCount} ) {
    return (
        <div className={styles.hashtagcard}>
            <div>
                <img src={imgPath} alt="photo" />
            </div>
            <div>
                <strong>#{category}</strong>
                <span>{postCount} posts</span>
            </div>
        </div>
    );
};

export default TrendHashtagCard;
