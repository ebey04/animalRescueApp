import React from 'react';
import { Link } from 'react-router-dom';   
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.navbarBrand}>
                    Animal Rescue App
                </Link>
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
