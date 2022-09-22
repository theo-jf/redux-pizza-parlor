// SAM ONLY
import axios from "axios";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function PizzaList () {
    useEffect(() => {
        fetchPizzaList();
    }, []);

    const pizzas = useSelector(store => store.allPizzas);

    const dispatch = useDispatch();

    const fetchPizzaList = () =>{
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
        .then((response) => {
            console.log(response.data);
            const action = {
                type: 'SET_PIZZAS',
                payload: response.data
            }
            dispatch(action);
        })
        .catch((error) => {
            console.log('Error in the get route', error);
        })
    }
 
    
    //do I need to make the LI for each Item component?
    return(
        <ul>
            {pizzas.map((pizza) => {
                return(
                    <PizzaItem
                    key={pizza.id}/>
                )
            })}
        </ul>
    );
}

export default PizzaList;