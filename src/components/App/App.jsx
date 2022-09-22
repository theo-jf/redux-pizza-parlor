import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

// Router 
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

// Import Components Here
import Admin from '../Admin/Admin';
import CustomerForm from '../CustomerForm/CustomerForm';
import PizzaList from '../PizzaList/PizzaList';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';
import Header from '../Header/Header';


function App() {

  const dispatch = useDispatch();

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

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path ="/">
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
          <PizzaList />
        </Route>
        <Route exact path="/CustomerForm">
          <CustomerForm />
        </Route>
        <Route exact path ="/ConfirmOrder">
          <ConfirmOrder />
        </Route>
        <Route exact path ="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
