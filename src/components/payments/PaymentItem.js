import React from 'react'

const PaymentItem = ({payment}) => {

    
    return (
       <li className="collection-item center-align">
           <h3>{payment.Payee.Name}</h3>

       </li>
    )
}

export default PaymentItem
