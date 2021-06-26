import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { numberWithCommas } from "../utils/helper";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount >= 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((amount) => amount <= 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="card income-expense">
      <div className="income">
        <div>income</div>
        <div>${numberWithCommas(income)}</div>
      </div>
      <div className="expense">
        <div>expense</div>
        <div>${numberWithCommas(Math.abs(expense).toFixed(2))}</div>
      </div>
    </div>
  );
}
