import React, { useState, useEffect } from "react";
import { test123 } from "./Table.features.js";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Table.module.css";

function Table( {headers, data, functions, states} ) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>manage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>lorem</td>

                    <td>
                        <button>edit</button>
                    </td>
                    <td>
                        <button>delete</button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john</td>

                    <td>
                        <button>edit</button>
                    </td>
                    <td>
                        <button>delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>someone</td>

                    <td>
                        <button>edit</button>
                    </td>
                    <td>
                        <button>delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
