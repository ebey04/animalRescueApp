import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
    const [animals] = useState([
        { id: 1, name: 'Max', type: 'Dog', emoji: '🐕', status: 'critical', notes: 'Injured leg' },
        { id: 2, name: 'Luna', type: 'Cat', emoji: '🐱', status: 'stable', notes: 'Recovering' },
        { id: 3, name: 'Charlie', type: 'Rabbit', emoji: '🐰', status: 'healing', notes: 'Post-surgery' },
        { id: 4, name: 'Bella', type: 'Dog', emoji: '🐕', status: 'adoptable', notes: 'Ready for home' },
    ]);

    const statusOrder = { critical: 0, stable: 1, healing: 2, adoptable: 3 };
    const sortedAnimals = [...animals].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

    const statusColors = {
        critical: '#ff4444',
        stable: '#ffaa00',
        healing: '#4488ff',
        adoptable: '#44aa44',
    };

    return (
        <div className={styles.homeContainer}>
            <main className={styles.mainContent}>
                <section className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>Rescuer Dashboard</h1>
                    <p className={styles.heroSubtitle}>Manage and track animals in your care</p>
                </section>

                <section className={styles.featuredSection} aria-label="Animals by Status">
                    <h2 className={styles.sectionTitle}>Animals in System</h2>
                    <div className={styles.animalsGrid}>
                        {sortedAnimals.map((animal) => (
                            <article key={animal.id} className={styles.animalCard}>
                                {animal.image && <img src={animal.image} alt={animal.name} className={styles.animalImage} />}
                                <h3 className={styles.animalName}>{animal.name}</h3>
                                <p className={styles.animalType}>{animal.type}</p>
                                <div style={{ color: statusColors[animal.status], fontWeight: 'bold' }}>
                                    {animal.status.toUpperCase()}
                                </div>
                                <p className={styles.cardDescription}>{animal.notes}</p>
                                <button className={styles.learnMoreBtn}>View Details</button>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
