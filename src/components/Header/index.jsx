import styles from "./styles.module.css";
import React from 'react';

const Header = () => (
    <div className={styles.directionsStartHeader}>
        <span className={styles.close}>&times;</span>
        <h2>Velohints</h2>
    </div>
);


export default Header;