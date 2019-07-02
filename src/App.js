import React, {useState, useEffect} from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar'
import Payments from './components/Payments';


function App() {

  const [payments, setPayments] = useState([])

  useEffect(() => {
    M.AutoInit();
    getPayments();
  }, [])

  const getPayments = async () => {
    const res = await fetch('/payments');
    const data = await res.json();

    return data

  }

  return (
    <div className="App">
      <SearchBar/>
    <Payments/>
    </div>
  );
}

export default App;
