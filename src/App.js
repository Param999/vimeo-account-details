import React from "react";
import Transaction from "./components/transaction/transaction.component";
import LineChart from "./components/line-chart/line-chart.component";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://starlord.hackerearth.com/bankAccount")
      .then(res => res.json())
      .then(data => this.setState({ txs: [...data], loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { txs, loading } = this.state;
    return (
      <div className="homepage">
        {loading ? (
          <div>Loading..</div>
        ) : (
          <div>
            <div className="title">Account Number : {txs[0]["Account No"]}</div>
            <p>
              Note: Balance is divided by 10,000 in the line graph for the ease
              of reading and convenience.
            </p>
            <div className="line-chart">
              <LineChart txs={txs} />
            </div>
            <Transaction txs={txs} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
