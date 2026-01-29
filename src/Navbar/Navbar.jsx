import React from 'react';
import { Link } from 'react-router-dom';   
import styles from './Navbar.module.css'
import sanctuary from '../assets/sanctuary.png'

export default function Navbar() {
    return (
        <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
            <div className={styles.navbarContainer}>
                <div className={styles.logoCenter}>
                    <Link to="/" className={styles.navbarBrand}>
                        <img src={sanctuary} alt="Rescue Track App Logo" className={styles.navbarLogo} />
                        <div className={styles.appTitle}>Rescue Track</div>
                    </Link>
                </div>
                <ul className={styles.navbarMenu}>
                    <li className={styles.navbarItem}>
                        <Link to="/animals" className={styles.navbarLink}>
                            Animals
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link to="/intake-form" className={styles.navbarLink}>
                            Intake Form
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
