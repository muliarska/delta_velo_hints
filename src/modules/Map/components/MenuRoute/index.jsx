import styles from "./styles.module.css";
import Footer from "../Footer"
import Header from "../Header"


const MenuRoute = () => (
    <div id="directionsStart" className={styles.directionsStart}>
        <div className={styles.directionsStartContent}>
            <Header />
            <div className={styles.directionsStartBody}>
                <div className={styles.bottomSection}>
                    <button id="startNewRouteButton" className={styles.linkStart}>START NEW ROUTE</button>
                    <button id="closeButton" className={styles.linkClose}>CLOSE</button>
                </div>
            </div>
            <Footer />
        </div>
    </div>
);

export default MenuRoute;