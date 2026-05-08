import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./DiscoverPeopleCard.module.css";
import languages from "../../../utilities/constants/languages.js";

function DiscoverPeopleCard( {imgPath, firstname, lastname, city, country, isFollowing} ) {
    return (
        <div className={styles.peoplecard}>
            <div>
                <img src={imgPath} alt="photo" />
            </div>
            <div>
                <h5>{firstname} {lastname}</h5>
                <span>{city}, {country}</span>
            </div>
            <div>
                {!isFollowing && <button>
                    follow
                </button>}
                <button>
                    <i className={icons.xMark}></i>
                </button>
            </div>
        </div>
    );
};

export default DiscoverPeopleCard;
