import React, { Component } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddNew from "./components/AddNew";

import { GlobalProvider } from "./context/context";

import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <div className="container">
          <div className="row">
            <div className="col mx-auto col-lg-4 col-md-5 col-sm-11">
              <Header />
              <Balance />
              <IncomeExpense />
              <TransactionList />
              <AddNew />
            </div>
          </div>
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
