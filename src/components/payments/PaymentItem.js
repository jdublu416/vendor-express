import React from 'react';
import InfoButton from '../buttons/InfoButton';

const PaymentItem = ({ payment }) => {
  const { Name, Attention, SubmissionDate } = payment.Payee;
  return (
    <li className='collection-item'>
      <div className='left-align'>
        <p>{Name}</p>
        <p>
          {' '}
          Attention: {Attention} <br />
          Submitted: {SubmissionDate}
        </p>
      </div>
      <div className='right-align'>
        <InfoButton />
      </div>
    </li>
  );
};

export default PaymentItem;
