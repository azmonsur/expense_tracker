import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import Transaction from "./Transaction";

export default function HistoryList() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  return (
    <div className="history">
      <h5>History</h5>
      {transactions.length == 0 ? (
        <div className="no-transaction">
          <em>No transaction record yet.</em>
        </div>
      ) : (
        transactions.map((transaction, key) => (
          <Transaction key={key} transaction={transaction} />
        ))
      )}
    </div>
  );
}
