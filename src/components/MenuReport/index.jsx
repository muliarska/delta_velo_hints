import React from "react";
import styles from "./styles.module.css";
import Header from "../Header"
import Footer from "../Footer"


function MenuReport() {
    return (
        <div id="myModal" className={styles.modal}>

            <div className={styles.modalContent}>
                <Header />
                <div className={styles.modalBody}>
                    <p>
                        <a id="badRoadReportButton" className={styles.report}>Bad Road</a>
                    </p>
                    <p>
                        <a id="accidentReportButton" className={styles.report}>Accident</a>
                    </p>
                    <p>
                        <a id="parkingPlaceReportButton" className={styles.report}>Parking Place</a>
                    </p>
                    <p>
                        <a id="closeButtonReport" className={styles.report}>Close</a>
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MenuReport;