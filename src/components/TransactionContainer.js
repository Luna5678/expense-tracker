import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionContainer = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
    {transactions.map((transaction,idx) => <Transaction key={idx} transaction={transaction} />)}
    </>
  )
}

export default TransactionContainer;