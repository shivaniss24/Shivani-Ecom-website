// create a context
// provider
//consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
// import products from "../backend/db/products";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// const API = "/api/products";
// const API = "https://mocki.io/v1/98b274fb-5342-45c1-aa74-7021b5831c9e";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await axios.get(url);
            console.log("res:", response);
            const data = await response.data;
            const products = { products: data };
            console.log(products)
            dispatch({ type: "SET_API_DATA", payload: products });
        }
        catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    };
    //my 2nd api call for single product

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const response = await axios.get(url);
            const singleProduct = await response.data;
            console.log(">>>>>>>>>>>", singleProduct);
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        }
        catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
        ;
    }

    useEffect(() => {
        console.log("API", API)
        getProducts(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};


//custom hooks

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };

