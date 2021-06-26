import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { numberWithCommas } from "../utils/helper";

export default function Transaction({ transaction }) {
  const borderRightColor = transaction.amount < 0 ? "rgb(151, 45, 45)" : null;
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div style={{ borderRightColor }} className="card transaction">
      <span className="desc">{transaction.text}</span>
      <span className="amount">
        {sign}${numberWithCommas(Math.abs(transaction.amount).toFixed(2))}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </div>
  );
}
