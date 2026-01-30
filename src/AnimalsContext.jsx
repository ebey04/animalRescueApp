import { createContext } from 'react';

export const AnimalsContext = createContext({
    animals: [],
    addAnimal: () => {},
    updateAnimal: () => {},
    addNote: () => {},
});
