// SAM ONLY
import axios from "axios";
import {useEffect} from 'react';

function PizzaList () {
    useEffect(() => {
        fetchPizzaList();
    }, []);

    const fetchPizzaList = () =>{
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log('Error in the get route', error);
        })
    }
    return(
        <ul>
            {}
        </ul>
    );
}

export default PizzaList;