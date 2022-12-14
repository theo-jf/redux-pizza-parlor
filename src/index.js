import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Import REDUX 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const allPizzas = (state=[], action) =>{
    if(action.type === 'SET_PIZZAS'){
        return action.payload;
    }
        return state;
}


const selectedPizzas = (state = [], action) => {

    switch(action.type) {
        case 'ADD_PIZZA':
            // Adds Pizza Object to state array
            return [...state, action.payload];

        case 'REM_PIZZA':
            // Removes Pizza Object from state array
            return state.filter(pizza => pizza.id != action.payload.id);

        case 'CLEAR_ALL':
            // State is now an empty array
            return [];

        case 'CLEAR_TOTAL_AND_PIZZAS':
            return [];
    }
    return state;
}

const totalPrice = (state = 0, action) => {

    // Adds or removes Pizza Price
    switch(action.type) {
        case 'ADD_PIZZA':
            return state + Number(action.payload.price);

        case 'REM_PIZZA':
            return state - Number(action.payload.price);

        case 'CLEAR_ALL':
            return 0;

        case 'CLEAR_TOTAL_AND_PIZZAS':
            return 0;
    }
    return state;
}

const currentCustomer = (state = {}, action) => {

    switch(action.type) {
        case 'SET_CUSTOMER':
            return action.payload;

        case 'CLEAR_ALL':
            return {};
    }
    return state;
}

const orders = (state = [], action) => {
    if(action.type === 'ADD_ORDERS'){
        return action.payload;
    }
        return state;
}

const back = (state = 'backHidden', action) => {

    switch (action.type) {
        case 'MAKE_HIDDEN':
            return 'backHidden'
        case 'MAKE_SHOWN':
            return 'back';
    }
    return state;
}

const total = (state = '', action) => {
    switch (action.type) {
        case 'MAKE_TOTAL_HIDDEN':
            return 'hidden'
        case 'MAKE_TOTAL_SHOWN':
            return '';
    }
    return state;
}

// Create store
const storeInstance = createStore(
    combineReducers(
        {
            selectedPizzas,
            totalPrice,
            currentCustomer,
            orders,
            allPizzas,
            back,
            total
        }
    ),
    applyMiddleware(logger)
)



ReactDOM.render( 
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
