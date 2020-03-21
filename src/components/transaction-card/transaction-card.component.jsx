import React from "react";
import "./transaction-card.styles.css";

const TransactionCard = ({ tx }) => (
  <div className="tx-card">
    <div className="tx-card__date">{tx.Date}</div>
    <div className="tx-card__details">{tx["Transaction Details"]}</div>
    <div className="tx-card__amt">
      {tx["Withdrawal AMT"] === "" ? (
        <div className="tx-card__deposit">+ {tx["Deposit AMT"]}</div>
      ) : (
        <div className="tx-card__withdraw">- {tx["Withdrawal AMT"]}</div>
      )}
      <div className="tx-card__balance">Balance : {tx["Balance AMT"]}</div>
    </div>
  </div>
);

export default TransactionCard;
