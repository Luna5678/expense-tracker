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

    let newId = Math.floor(Math.random()*1000);

    const newTransaction = {
      id: newId,
      date,
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <div className="add-transaction-container box">
      <h2>Add Transaction</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="date" className="form-label">Date</label>
          <input id="date" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        
        <div className="form-control">
          <label htmlFor="text" className="form-label">Description</label>
          <input id="text" name="text" type="text" placeholder="Groceries" className="input-amount" value={text} onChange={e => setText(e.target.value)} />
        </div>
        
        <div className="form-control">
          <label htmlFor="amount"><span className="form-label">Amount</span> $</label>
          <input id="amount" name="amount" type="number" placeholder="-100.00" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default AddTransaction;