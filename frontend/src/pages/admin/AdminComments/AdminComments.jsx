import React, { useState, useEffect } from "react";
import Table from "../../../components/ui/Table/Table.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./AdminComments.module.css";

function AdminComments() {
    return (
        <section className={"main_container " + styles.admincomments}>
            {/* center section admincomments */}
            {/*  */}

            <Table />
        </section>
    );
};

export default AdminComments;
