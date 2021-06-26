import React, { useState, useContext, useEffect } from "react";
import v4 from "uuid/dist/v4";
import { GlobalContext } from "../context/context";

export default function HistoryList() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("income");

  const { transactions, addTransaction, STORAGE_KEY } = useContext(
    GlobalContext
  );

  const onChangeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const submitTransaction = (e) => {
    e.preventDefault();

    if (text == "") return;
    if (amount == 0) return;

    const newAmount =
      selectedOption === "income" ? parseInt(amount) : -parseInt(amount);

    const newTransaction = {
      id: v4(),
      text,
      amount: newAmount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="add-new">
      <h5>Add new transaction</h5>
      <div>
        <form onSubmit={submitTransaction}>
          <div className="form-group">
            <label htmlFor="">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>

          <div className="form-group">
            <input
              type="radio"
              checked={selectedOption === "income"}
              name="amountFor"
              value="income"
              onChange={onChangeOption}
              id="income"
            />
            <label htmlFor="income">Income</label>

            <input
              type="radio"
              checked={selectedOption === "expense"}
              name="amountFor"
              value="expense"
              onChange={onChangeOption}
              id="expense"
            />
            <label htmlFor="expense">Expense</label>
          </div>
          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    </div>
  );
}
