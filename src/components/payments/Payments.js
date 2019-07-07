import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

import PaymentItem from './PaymentItem';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPayments();
    //eslint-disable-next-line
  }, []);

  const getPayments = async () => {
    setLoading(true);

    const res = await fetch('/payments');
    const data = await res.json();

    setPayments(data);
    setLoading(false);
  };

  if (loading || payments === []) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Payments</h4>
      </li>
      {!loading && payments.length === 0 ? (
        <p className='center'>No payments to show...</p>
      ) : (
        payments.map(payment => (
          <PaymentItem payment={payment} key={payment.Payee.Name} />
        ))
      )}
    </ul>
  );
};

Payments.propTypes = {
  payment: PropTypes.array.isRequired
};
export default Payments;
