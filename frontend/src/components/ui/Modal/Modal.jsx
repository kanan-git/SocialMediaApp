import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Modal.module.css";
import languages from "../../../utilities/constants/languages.js";

function Modal( {state} ) {
    return (
        <>
            <div className={styles.overlay}>
                {/* overlay with category transparent color */}
            </div>

            <div className={styles.modal}>
                {/* modal */}
                <div className={styles.modal_top}>
                    <h3>title</h3>
                    <button onClick={() => {state(false)}}>
                        <i className={icons.xMark}></i>
                    </button>
                </div>
                <div className={styles.modal_content}>
                    {/* content */}aaaaaaaaaaaaaaaaaaaaaa
                </div>
                <div className={styles.modal_buttons}>
                    <button>cancel</button>
                    <button>save</button>
                    {/* buttons [cancel, save, apply, reset, ok, yes, no, ...] */}
                </div>
            </div>
        </>
    );
};

export default Modal;
