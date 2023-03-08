import { legacy_createStore as createStore, compose, applyMiddleware } from "@reduxjs/toolkit";


const initState = {
    products: []
}

const productReducer = (state = initState, action) => {
    const {payload, type} = action;

    if(type === "SET_PRODUCTS"){
        return {...state, products: payload}
    }


    return state;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(productReducer, composeEnhancers(applyMiddleware()));

export default store;