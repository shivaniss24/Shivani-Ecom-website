// create a context
// provider
//consumer => useContext Hook

import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <AppContext.Provider value={{ myName: 'shivani' }}>
            {children}
        </AppContext.Provider>
    );
};
//custom hooks

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };       
