// SAM ONLY
import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

function PizzaList () {

    const pizzas = useSelector(store => store.allPizzas);
    const history = useHistory();

    const next = () => {
        history.push("/CustomerForm")
    }

    //do I need to make the LI for each Item component?
    return(
        <>
            <Button onClick={next}>Start Checkout</Button>
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