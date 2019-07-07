import React, {useState} from 'react'

const PostPayment = () => {
    const [payee, setPayee] = useState('')
    const [paymentAmount, setPaymentAmount] = useState(0)
    const [invoices, setInvoices] = useState([])
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState(0)
    const [invoiceDate, setInvoiceDate] = useState('')

   const handleSubmit = () => {
console.log('working')
    }

    return (
        <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default PostPayment
