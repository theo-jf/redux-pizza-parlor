import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';

// Router 
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

// Import Components Here

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
  
        <p>Here is the Customer Form:</p>
        <CustomerForm />
      </Router>
    </div>
  );
}

export default App;
