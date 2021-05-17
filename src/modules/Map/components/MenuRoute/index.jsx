import styles from "./styles.module.css";
import Footer from "../Footer"
import Header from "../Header"


const MenuRoute = () => (
    <div id="directionsStart" className={styles.directionsStart}>
        <div className={styles.directionsStartContent}>
            <Header />
                <div className={styles.directionsStartBody}>
                    <div className={styles.bottomSection}>
                        <a id="startNewRouteButton" className={styles.linkStart}>START NEW ROUTE</a>
                        <a id="closeButton" className={styles.linkClose}>CLOSE</a>
                    </div>
                </div>
            <Footer />
        </div>
    </div>
);

export default MenuRoute;