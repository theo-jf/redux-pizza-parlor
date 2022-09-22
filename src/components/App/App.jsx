import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

// Router 
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

// Import Components Here

import PizzaList from '../PizzaList/PizzaList';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';


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
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route exact path ="/">
          <PizzaList />
        </Route>
        <Route exact path ="/ConfirmOrder">
          <ConfirmOrder />
        </Route>
        {/* <Route exact path ="/admin">

        </Route> */}
  
      </Router>
    </div>
  );
}

export default App;
