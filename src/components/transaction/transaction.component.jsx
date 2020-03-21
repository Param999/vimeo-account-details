import React from "react";
import SearchBox from "../search-box/search-box.component";
import TransactionList from "../transaction-list/transaction-list.component";
import Pagination from "../pagination/pagination.component";
import "./transaction.styles.css";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      currentPage: 1,
      txPerPage: 10
    };
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  paginate = pageNumber => this.setState({ currentPage: pageNumber });

  render() {
    const { currentPage, txPerPage, searchField } = this.state;
    const filteredTxs = this.props.txs.filter(tx =>
      tx["Transaction Details"]
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );

    const indexOfLastTx = currentPage * txPerPage;
    const indexOfFirstTx = indexOfLastTx - txPerPage;
    const currentTxs = filteredTxs.slice(indexOfFirstTx, indexOfLastTx);

    return (
      <div className="transaction">
        <div className="transaction-list__title">TRANSACTIONS</div>
        <SearchBox
          placeholder="Search transactions"
          handleChange={this.handleChange}
        />
        <TransactionList txs={currentTxs} />
        <Pagination
          txPerPage={this.state.txPerPage}
          totalTxs={filteredTxs.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default Transaction;
