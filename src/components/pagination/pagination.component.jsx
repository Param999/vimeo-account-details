import React from "react";
import "./pagination.styles.css";

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 1
    };
  }

  render() {
    const pageNumbers = [];

    for (
      let i = 1;
      i <= Math.ceil(this.props.totalTxs / this.props.txPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        <div className="page-numbers">
          {pageNumbers.map(number => (
            <div
              key={number}
              onClick={() => {
                this.setState({ active: number });
                return this.props.paginate(number);
              }}
              className={
                this.state.active === number
                  ? "active-page page-number"
                  : "page-number"
              }
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pagination;
