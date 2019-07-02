import React, { useState,useEffect } from 'react';
import { classMethod } from '@babel/types';

const Payments = () => {

const [payments, setPayments] = useState([])



  return (
    <div className='container'>
      <div className='row'>
        <div id="payment" className='col s12' ></div>
      </div>
    </div>
  );
};

export default Payments;