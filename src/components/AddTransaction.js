import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !text || !amount) return

    setDate('');
    setText('');
    setAmount('');

    const newTransaction = {
      date,
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <div className="add-transaction-form">
      <h2>Add Transaction</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input id="text" name="text" type="text" placeholder="Groceries" value={text} onChange={e => setText(e.target.value)} />
        </div>
        
        <div className="form-control">
          <label htmlFor="amount">Amount $</label>
          <input id="amount" name="amount" type="number" placeholder="-100.00" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddTransaction;