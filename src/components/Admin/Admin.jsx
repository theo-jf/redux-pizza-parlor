// EVERYONE!!!!!
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function Admin (){
    const dispatch = useDispatch();
    const orders = useSelector(store => store.orders);

    
    useEffect(() => {
        getOrders();
      }, []);
     
      //add a button to call new orders?

    const getOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        })
        .then((response) => {
            // console.log(response);
            const action = {
                type: 'ADD_ORDERS',
                payload: response.data
            }
            dispatch(action);
        })
        .catch((error) => {
            console.log('Error in get route for admin orders', error);
        })
    }
    


    return(
       
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => {
                    return(
                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    );
                })}

            </tbody>
        </table>
    );

}

export default Admin;