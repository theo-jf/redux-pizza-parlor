// THEO ONLY
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ConfirmOrder() {

    // Dispatch for CLEAR_ALL on order confirm
    const dispatch = useDispatch();

    const history = useHistory();

    const pizzasInOrder = useSelector(selector => selector.selectedPizzas);
    const customer = useSelector(selector => selector.currentCustomer);
    const totalPrice = useSelector(selector => selector.totalPrice);

    const [orderObject, setOrderObject] = useState({
                                            customer_name: customer.customer_name,
                                            street_address: customer.street_address,
                                            city: customer.city,
                                            zip: customer.zip,
                                            type: customer.type,
                                            total: totalPrice,
                                            pizzas: pizzasInOrder
                                        });

                                        console.log(orderObject);


    // POST request to send confirmed order
    const sendOrder = () => {
        axios.post('/api/order', orderObject)
        .then(response => {
            console.log('Order submit successful', response);

            // On successful submit, clear reducers and orderObject
            const action = {
                type: 'CLEAR_ALL'
            }
            // setOrderObject({});
            history.push("/");
            dispatch(action);
        })
        .catch(error => {
            alert('Order submission error, please try again');
            console.log(error);
        });
    }

    return(
        <>
            <h2>Checkout</h2>
            <h3>{orderObject.customer_name}</h3>
            <h3>{orderObject.street_address}</h3>
            <h3>{orderObject.city}</h3>
            <h3>{orderObject.zip}</h3>
            <h3>For {orderObject.type}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orderObject.pizzas.map(pizza => {
                        return (
                            <tr>
                                <td>{pizza.name}</td>
                                <td>{pizza.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>Total: {orderObject.total}</h3>
            <button onClick={sendOrder}>Confirm Checkout</button>
        </>
    );
}