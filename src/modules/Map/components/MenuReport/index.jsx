import React from "react";
import styles from "./styles.module.css";
import Header from "../Header"
import Footer from "../Footer"
import Map from "../Map"

const MenuReport = () => (
    <div id="myModal" className={styles.modal}>

        <div className={styles.modalContent}>
            <Header />
            <div className={styles.modalBody}>
                <p>
                    <button id="badRoadReportButton" className={styles.report}>Bad Road</button>
                </p>
                <p>
                    <button id="accidentReportButton" className={styles.report}>Accident</button>
                </p>
                <p>
                    <button id="parkingPlaceReportButton" className={styles.report}>Parking Place</button>
                </p>
                <p>
                    <button id="closeButtonReport" className={styles.report}>Close</button>
                </p>
            </div>
            <Footer />
            <Map />
        </div>
    </div>

);

export default MenuReport;