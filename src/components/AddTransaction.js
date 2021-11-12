const AddTransaction = () => {
  return (
    <div className="add-transaction-form">
      <h2>Add Transaction</h2>
      <hr />
      <form>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" />
        </div>
        
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input id="text" name="text" type="text" placeholder="Groceries" />
        </div>
        
        <div className="form-control">
          <label htmlFor="amount">Amount $</label>
          <input id="amount" name="amount" type="number" placeholder="-100.00" />
        </div>
        
      </form>
    </div>
  )
}

export default AddTransaction;