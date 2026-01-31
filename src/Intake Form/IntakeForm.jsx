import { AnimalsContext } from '../AnimalsContext.jsx';
import {useState, useContext} from 'react'
import styles from './IntakeForm.module.css'
import Button from '../Button/Button.jsx'

export default function IntakeForm() {
    const { addAnimal } = useContext(AnimalsContext);

    const generateId = () =>
    `ANIMAL-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

    const initialState = {
        id: generateId(),
        name: '',
        species: '',
        age: '',
        weight: '',
        notes: '',
        photo: null,
        intakeDate: new Date().toISOString().split('T')[0],
        diagnosis: '',
        status: ''
    };

    const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
    });

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]:  value,
        }))
    }

    const handlePhotoChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const base64Image = await fileToBase64(file);

        setFormData(prev => ({
            ...prev,
            photo: base64Image,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addAnimal(formData);

        setFormData(prev => ({
        ...initialState,
        id: generateId()
    }))
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h1 className={styles.title}>Animal Intake Form</h1>
            <p>Please fill out the form below to register a new animal.</p>
            
            <div className={styles.formGroup}>

                <div className={styles.animalInput}>
                    <label htmlFor="id">Animal ID</label>
                    <input type="text" id="id" value={formData.id} disabled className={`${styles.input} ${styles.idInput}`} />
                </div>

                <div className={styles.animalInput}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} 
                    required className={styles.input} />
                </div>

                <fieldset className={styles.animalInput}>
                    <legend>Species</legend>
                    {['Dog', 'Cat', 'Bird', 'Reptile', 'Small Mammal'].map(species => (
                        <label key={species} className={styles.radioLabel}>
                            <input type="radio" name="species" value={species} onChange={handleChange} required/>
                            {species.charAt(0).toUpperCase() + species.slice(1)}
                        </label>
                    ))}
                </fieldset>

                <div className={styles.animalInput}>
                    <label htmlFor="age">Age (years)</label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} min="0" step="0.1" 
                    className={styles.input} placeholder="optional" />
                </div>

                <div className={styles.animalInput}>
                    <label htmlFor="weight">Weight (lbs)</label>
                    <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} min="0" 
                    step="0.1" className={styles.input} placeholder="optional"/>
                </div>

                <div className={styles.animalInput}>
                    <label htmlFor="intakeDate">Intake Date</label>
                    <input type="date" id="intakeDate" name="intakeDate" value={formData.intakeDate} onChange={handleChange} 
                    required className={styles.input} />
                </div>

                <div className={styles.animalInput}>
                    <label htmlFor="diagnosis">Diagnosis</label>
                    <input type="text" id="diagnosis" name="diagnosis" value={formData.diagnosis} onChange={handleChange} 
                    className={styles.input} />
                </div>

                <fieldset className={styles.animalInput}>
                    <legend>Status</legend>
                    {['critical', 'stable', 'healing', 'adoptable'].map(status => (
                        <label key={status} className={styles.radioLabel}>
                            <input type="radio" name="status" value={status} onChange={handleChange} required/>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </label>
                    ))}
                </fieldset>

                <div className={styles.animalInput}>
                    <label htmlFor="notes">Notes</label>
                    <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} 
                    className={styles.textarea} />
                </div>

                <div className={styles.animalInput}>
                    <label htmlFor="photo">Photo</label>
                    <input type="file" id="photo" name="photo" onChange={handlePhotoChange} accept="image/*" 
                    className={styles.fileInput} />
                </div>

                <Button className={styles.submitBtn}>Submit</Button>
            </div>

        </form>
    )
}