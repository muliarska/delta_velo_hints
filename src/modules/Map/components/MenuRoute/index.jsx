import styles from "./styles.module.css";
import Footer from "../Footer"
import Header from "../Header"


function MenuRoute() {

    return (
        <div id="directionsStart" className={styles.directionsStart}>
            <div className={styles.directionsStartContent}>
                <Header />
                <div className={styles.directionsStartBody}>
                    <div className={styles.bottomSection}>
                        <a id="startNewRouteButton" className={styles.linkStart} onClick={handleStartNewRoute}>START NEW ROUTE</a>
                        <a id="closeButton" className={styles.linkClose} onClick={handleClose}>CLOSE</a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}


function handleStartNewRoute(el) {

    var directionsStart = document.getElementById("directionsStart");
    directionsStart.style.display = "none";
    console.log("Starting new route");
    // cancelRouteButton.style.display = 'inline-block';
    // startMenuButton.style.display = 'none';
}

function handleClose() {
    // directionsStart.style.display = "none";
    console.log("Closing start screen")
    // startMenuButton.style.display = 'inline-block';
}


export default MenuRoute;