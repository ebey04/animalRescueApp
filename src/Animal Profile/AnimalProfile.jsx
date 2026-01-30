import styles from './AnimalProfile.module.css';
import { useState, useContext, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import { AnimalsContext } from '../AnimalsContext.jsx';

export default function AnimalProfile({ animalId }) {
    const { animals, updateAnimal, addNote } = useContext(AnimalsContext);

    const animal = animals.find(a => a.id === animalId);
    if (!animal) return <p>Animal not found.</p>;

    const [draftAnimal, setDraftAnimal] = useState(animal);
    const [newNote, setNewNote] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setDraftAnimal(animal);
    }, [animal]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDraftAnimal(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        updateAnimal(animalId, draftAnimal);
        setIsEditing(false);
    };

    const handleAddNote = () => {
        if (!newNote.trim()) return;
        addNote(animalId, newNote);
        setNewNote('');
    };

    return (
        <div className={styles.container}>
        <div className={styles.header}>
            <Button onClick={() => {
            if (isEditing) handleSave();
            else setIsEditing(true);
            }}>
            {isEditing ? 'Save' : 'Edit'}
            </Button>
        </div>

        <div className={styles.profileSection}>
            {isEditing ? (
            <>
                <div className={styles.inputSelect}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={draftAnimal.name} onChange={handleInputChange} />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="species">Species</label>
                <input id="species" name="species" value={draftAnimal.species} onChange={handleInputChange} />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="breed">Breed</label>
                <input id="breed" name="breed" value={draftAnimal.breed || ''} onChange={handleInputChange} />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="age">Age</label>
                <input id="age" name="age" value={draftAnimal.age} onChange={handleInputChange} />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="sex">Sex</label>
                <input id="sex" name="sex" value={draftAnimal.sex || ''} onChange={handleInputChange} />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="weight">Weight</label>
                <input id="weight" name="weight" value={draftAnimal.weight} onChange={handleInputChange} />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="intakeDate">Intake Date</label>
                <input
                    id="intakeDate"
                    name="intakeDate"
                    type="date"
                    value={draftAnimal.intakeDate}
                    onChange={handleInputChange}
                />
                </div>

                <div className={styles.inputSelect}>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    value={draftAnimal.status}
                    onChange={handleInputChange}
                >
                    <option value="available">Available</option>
                    <option value="fostered">Fostered</option>
                    <option value="adopted">Adopted</option>
                    <option value="medical hold">Medical Hold</option>
                </select>
                </div>
            </>
            ) : (
            <>
                {animal.photo && (
                <img src={animal.photo} alt={animal.name} className={styles.photo} />
                )}
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

            <div className={styles.notesList}>
            {(animal.notes || []).map((note, index) => (
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
    );
}
