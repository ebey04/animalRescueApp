import { useState, useEffect } from 'react';
import { AnimalsContext } from './AnimalsContext';

export function AnimalsProvider({ children }) {
    const [animals, setAnimals] = useState(() => {
        const stored = localStorage.getItem('animals');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('animals', JSON.stringify(animals));
    }, [animals]);

    const addAnimal = (newAnimal) => {
        setAnimals(prev => [...prev, newAnimal]);
    };

    const updateAnimal = (animalId, updatedFields) => {
        setAnimals(prev =>
        prev.map(animal =>
            animal.id === animalId
            ? { ...animal, ...updatedFields }
            : animal
        )
        );
    };

    const removeAnimal = (animalId) => {
        setAnimals(prev => prev.filter(animal => animal.id !== animalId));
    };


    const addNote = (animalId, noteText) => {
        const note = {
        text: noteText,
        date: new Date().toLocaleString(),
        };

        setAnimals(prev =>
        prev.map(animal =>
            animal.id === animalId
            ? {
                ...animal,
                notes: animal.notes ? [...animal.notes, note] : [note],
                }
            : animal
        )
        );
    };


    return (
        <AnimalsContext.Provider
        value={{
            animals,
            addAnimal,
            updateAnimal,
            removeAnimal,
            addNote,
        }}
        >
        {children}
        </AnimalsContext.Provider>
    );
}
