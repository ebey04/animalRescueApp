import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <p>© 2026 Rescue Track/Design by Elizabeth Bey.All rights reserved.</p>
        <span>Logo designed by <a href="https://www.flaticon.com/authors/gravisio" target="_blank" 
        rel="noopener noreferrer" aria-label="Gravisio on Flaticon (opens in new tab)">Gravisio</a> on Flaticon</span>
        </footer>
    );
}