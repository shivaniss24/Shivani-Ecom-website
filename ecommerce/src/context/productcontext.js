// create a context
// provider
//consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

const API = "https://mocki.io/v1/5e8e04f0-d658-4c89-b7dd-b7ce7e517985";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get(url);
            const products = await response.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        }
        catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    };
    useEffect(() => {
        getProducts(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};


//custom hooks

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };

