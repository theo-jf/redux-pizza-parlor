// SAM ONLY
import {useSelector, useDispatch } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import { useHistory } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

import Button from '@mui/material/Button';

function PizzaList () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'MAKE_TOTAL_SHOWN'}),
        dispatch({type: 'MAKE_HIDDEN'})
    },[])

    const pizzas = useSelector(store => store.allPizzas);
    const history = useHistory();

    const next = () => {
        history.push("/CustomerForm");
        dispatch({type: 'MAKE_SHOWN'})
    }

    const clearSelections = () => {
        dispatch({type: 'CLEAR_TOTAL_AND_PIZZAS'});
        window.location.reload();
    }

    //do I need to make the LI for each Item component?
    return(
        <>
            <Button onClick={next}>Start Checkout</Button>
            <Button onClick={clearSelections}>Clear Selections</Button>
            <ul>
                {pizzas.map((pizza) => {
                    return(
                        <PizzaItem
                        key={pizza.id}
                        pizza={pizza}/>
                    )
                })}
            </ul>
        </>
    );
}

export default PizzaList;