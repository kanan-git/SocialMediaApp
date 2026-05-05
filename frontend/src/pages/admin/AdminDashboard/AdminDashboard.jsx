import React, { useState, useEffect } from "react";
import Header from "../../../components/layout/Header/Header.jsx";
import AdminSideNavbar from "../../../components/layout/AdminSideNavbar/AdminSideNavbar.jsx";
import Footer from "../../../components/layout/Footer/Footer.jsx";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <AdminSideNavbar />

                <section className={styles.admindashboard}>
                    {/* center section admindashboard */}
                    {/*  */}
                </section>
            </main>

            <Footer />
        </>
    );
};

export default AdminDashboard;
