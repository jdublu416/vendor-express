import React, { Fragment, useEffect } from 'react';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import Payments from './components/payments/Payments';

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
      <Payments />
      </div>
    </Fragment>
  );
}

export default App;
