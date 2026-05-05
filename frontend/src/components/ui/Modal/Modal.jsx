import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Modal.module.css";
import languages from "../../../utilities/constants/languages.js";

function Modal() {
    return (
        <>
            <div>
                {/* overlay with category transparent color */}
            </div>

            <div>
                {/* modal */}
                <div>
                    <h3>title</h3>
                    <button>
                        <i className={icons.xMark}></i>
                    </button>
                </div>
                <div>
                    {/* content */}
                </div>
                <div>
                    {/* buttons [cancel, save, apply, reset, ok, yes, no, ...] */}
                </div>
            </div>
        </>
    );
};

export default Modal;
