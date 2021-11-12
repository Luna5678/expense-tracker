import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionContainer = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transaction-container">
    {transactions.map((transaction,idx) => <Transaction key={idx} transaction={transaction} />)}
    </div>
  )
}

export default TransactionContainer;