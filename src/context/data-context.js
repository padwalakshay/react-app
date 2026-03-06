import { createContext } from 'react';

export const dataContext = createContext({
    data: '',
    updateData: () => {}
}); // Default value is null