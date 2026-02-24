import styles from './Dashboard.module.css';
import Button  from '../Button/Button.jsx';
import { useContext } from 'react';
import { AnimalsContext } from '../AnimalsContext.jsx';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { animals } = useContext(AnimalsContext);

    const statusOrder = { critical: 0, stable: 1, healing: 2, adoptable: 3 };
    const sortedAnimals = [...animals].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

    const statusColors = {
        critical: '#E00000',
        stable: '#A917EE',
        healing: '#0561FF',
        adoptable: '#317C31',
    };

    return (
        <div className={styles.homeContainer}>
            <main className={styles.mainContent}>
                <section className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>Rescuer Dashboard</h1>
                    <div className={styles.heroDivider}>
                        <p className={styles.heroSubtitle}>Manage and track animals in your care</p>
                            <Link to="/intake-form" className={styles.formBtn} className={styles.formBtn}>
                                Intake Form
                            </Link>
                    </div>
                </section>

                <section className={styles.featuredSection} aria-label="Animals by Status">
                    <h2 className={styles.sectionTitle}>Animals in System</h2>
                    <div className={styles.animalsGrid}>
                        {sortedAnimals.map((animal) => (
                            <article key={animal.id} className={styles.animalCard}>
                                {animal.photo && <img src={animal.photo} alt={animal.name} className={styles.animalImage} />}
                                <h3 className={styles.animalName}>{animal.name}</h3>
                                <p className={styles.animalType}>{animal.species}</p>
                                <div style={{ color: statusColors[animal.status], fontWeight: 'bold', letterSpacing: '1.75px' }}>
                                    {animal.status.toUpperCase()}
                                </div>
                                <p className={styles.cardDescription}>{animal.diagnosis}</p>
                                <Link to={`/animals/${animal.id}`} className={styles.learnMoreBtn}>
                                    View Details
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
