import React, {useEffect} from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar'


function App() {

  useEffect(() => {
    M.AutoInit();
    getPayments();
  })

  const getPayments = async () => {
    const res = await fetch('/payments');
    const data = await res.json();

    console.log(data);

  }

  return (
    <div className="App">
      <SearchBar/>
     <h1>Payment Express</h1>
     <div id='payment'></div>
    </div>
  );
}

export default App;
