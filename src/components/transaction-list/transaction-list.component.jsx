import React from "react";
import TransactionCard from "../transaction-card/transaction-card.component";

const TransactionList = ({ txs }) => (
  <div className="transaction-list">
    {txs.map((tx, idx) => (
      <TransactionCard key={idx} tx={tx} />
    ))}
  </div>
);

export default TransactionList;
