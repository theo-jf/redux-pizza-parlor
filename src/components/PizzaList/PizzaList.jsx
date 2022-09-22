// SAM ONLY
import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function PizzaList () {

    const pizzas = useSelector(store => store.allPizzas);

    //do I need to make the LI for each Item component?
    return(
        <ul>
            {pizzas.map((pizza) => {
                return(
                    <PizzaItem
                    key={pizza.id}
                    pizza={pizza}/>
                )
            })}
        </ul>
    );
}

export default PizzaList;