import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { numberWithCommas } from "../utils/helper";

export default function Balance() {
  const { transactions, getTransactions, STORAGE_KEY } = useContext(
    GlobalContext
  );

  useEffect(() => {
    getTransactions();
  }, []);

  let balance = 0;
  transactions.forEach((transaction) => (balance += transaction.amount));

  return (
    <div className="balance">
      <div className="caption">your balance</div>
      <div className="amount">
        <span className={balance < 0 ? "red" : balance > 0 ? "green" : null}>
          {balance < 0 ? "-" : null}$
          {numberWithCommas(Math.abs(balance).toFixed(2))}
        </span>
      </div>
    </div>
  );
}
