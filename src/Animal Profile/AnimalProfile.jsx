import styles from './AnimalProfile.module.css';
import { useState } from 'react';
import Button from '../Button/Button.jsx';

export default function AnimalProfile({ animalId }) {
    const [animal, setAnimal] = useState({
        name: '',
        photo: '',
        species: '',
        breed: '',
        age: '',
        sex: '',
        weight: '',
        intakeDate: '',
        status: 'available',
    });

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnimal(prev => ({ ...prev, [name]: value }));
    };

    const handleAddNote = () => {
        if (newNote.trim()) {
            const dateTime = new Date().toLocaleString();
            setNotes(prev => [...prev, { text: newNote, date: dateTime }]);
            setNewNote('');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Save' : 'Edit'}
                </Button>
            </div>

            <div className={styles.profileSection}>
                {isEditing ? (
                    <>
                        <div className={styles.inputSelect}>
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" value={animal.name} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="species">Species</label>
                            <input id="species" name="species" value={animal.species} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="breed">Breed</label>
                            <input id="breed" name="breed" value={animal.breed} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="age">Age</label>
                            <input id="age" name="age" value={animal.age} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="sex">Sex</label>
                            <input id="sex" name="sex" value={animal.sex} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="weight">Weight</label>
                            <input id="weight" name="weight" value={animal.weight} onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="intakeDate">Intake Date</label>
                            <input id="intakeDate" name="intakeDate" type="date" value={animal.intakeDate} 
                            onChange={handleInputChange} />
                        </div>
                        <div className={styles.inputSelect}>
                            <label htmlFor="status">Status</label>
                            <select id="status" name="status" value={animal.status} onChange={handleInputChange}>
                                <option>Available</option>
                                <option>Fostered</option>
                                <option>Adopted</option>
                                <option>Medical Hold</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        {animal.photo && <img src={animal.photo} alt={animal.name} className={styles.photo} />}
                        <h2>{animal.name}</h2>
                        <p><strong>Species:</strong> {animal.species}</p>
                        {animal.breed && <p><strong>Breed:</strong> {animal.breed}</p>}
                        <p><strong>Age:</strong> {animal.age}</p>
                        <p><strong>Sex:</strong> {animal.sex}</p>
                        <p><strong>Weight:</strong> {animal.weight}</p>
                        <p>
                            <strong>Intake Date:</strong>{' '}
                            {animal.intakeDate
                            ? new Date(animal.intakeDate).toLocaleDateString('en-US')
                            : ''}
                        </p>
                        <p><strong>Status:</strong> {animal.status}</p>
                    </>
                )}
            </div>

            <div className={styles.notesSection}>
                <h3>Notes</h3>
                <div className={styles.notesContainer}>
                    <div className={styles.notesList}>
                        {notes.map((note, index) => (
                            <div key={index} className={styles.note}>
                                <p className={styles.noteDate}>{note.date}</p>
                                <p className={styles.noteText}>{note.text}</p>
                            </div>
                        ))}
                    </div>
                    <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Add a new note..."
                        className={styles.noteInput}
                    />
                    <Button onClick={handleAddNote}>Add Note</Button>
                </div>
            </div>
        </div>
    );
}