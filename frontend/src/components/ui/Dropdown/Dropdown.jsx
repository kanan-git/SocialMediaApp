import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Dropdown.module.css";
import languages from "../../../utilities/constants/languages.js";

function Dropdown( {state} ) {
    return (
        <div className={styles.dropdown} onMouseOver={() => {state(true)}} onMouseLeave={() => {state(false)}}>
            <p>aaaaaaaaaaaa</p>
            <p>cccccccccccccc</p>
            <p>ggggggggggggg</p>
        </div>
    );
};

export default Dropdown;
