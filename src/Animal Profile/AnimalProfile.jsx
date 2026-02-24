import styles from './AnimalProfile.module.css';
import { useState, useContext, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import { AnimalsContext } from '../AnimalsContext.jsx';
import { useParams } from 'react-router-dom';

export default function AnimalProfile() {
    const { animalId } = useParams();
    const { animals, updateAnimal, addNote, removeAnimal } = useContext(AnimalsContext);

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

    const handleRemoveAnimal = () => {
        if (window.confirm(`Are you sure you want to remove ${animal.name}?`)) {
            removeAnimal(animalId);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Button
                    onClick={() => {
                        if (isEditing) handleSave();
                        else setIsEditing(true);
                    }}
                >
                    {isEditing ? 'Save' : 'Edit'}
                </Button>
                <Button onClick={handleRemoveAnimal} className={styles.removeButton}>
                    Remove Animal
                </Button>
            </div>

            <div className={styles.profileSection}>
                {isEditing ? (
                    <>
                        <div className={styles.inputSelect}>
                            <label>Name</label>
                            <input name="name" value={draftAnimal.name} onChange={handleInputChange} />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Species</label>
                            <input name="species" value={draftAnimal.species} onChange={handleInputChange} />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Breed</label>
                            <input name="breed" value={draftAnimal.breed || ''} onChange={handleInputChange} />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Age</label>
                            <input name="age" value={draftAnimal.age} onChange={handleInputChange} />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Sex</label>
                            <input name="sex" value={draftAnimal.sex || ''} onChange={handleInputChange} />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Weight</label>
                            <input name="weight" value={draftAnimal.weight} onChange={handleInputChange} />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Intake Date</label>
                            <input
                                type="date"
                                name="intakeDate"
                                value={draftAnimal.intakeDate}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={styles.inputSelect}>
                            <label>Status</label>
                            <select
                                name="status"
                                value={draftAnimal.status}
                                onChange={handleInputChange}
                            >
                                <option value="adoptable">Adoptable</option>
                                <option value="stable">Stable</option>
                                <option value="healing">Healing</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <div className={styles.profileDetails}>
                        {animal.photo && (
                            <img
                                src={animal.photo}
                                alt={animal.name}
                                className={styles.photo}
                            />
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
                    </div>
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
