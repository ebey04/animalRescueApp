import { useState, useEffect } from 'react';
import { AnimalsContext } from './AnimalsContext';

export function AnimalsProvider({ children }) {
    const [animals, setAnimals] = useState([]);

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

    
    useEffect(() => {
  console.log('ANIMALS:', animals);
}, [animals]);



    return (
        <AnimalsContext.Provider
        value={{
            animals,
            addAnimal,
            updateAnimal,
            addNote,
        }}
        >
        {children}
        </AnimalsContext.Provider>
    );
}
