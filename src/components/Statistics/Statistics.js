import React, { Component } from "react";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   handleGoodIncrement = () => {
  //     this.setState((prevState) => {
  //       return { good: prevState.good + 1 };
  //     });
  //   };

  //   handleNeutralIncrement = () => {
  //     this.setState((prevState) => {
  //       return { neutral: prevState.neutral + 1 };
  //     });
  //   };

  //   handleBadIncrement = () => {
  //     this.setState((prevState) => {
  //       return { bad: prevState.bad + 1 };
  //     });
  //   };

  handleIncrement = (event) => {
    console.log(event.target.textContent);
    const btnLabel = event.target.textContent;
    this.setState((prevState) => {
      if (btnLabel === "Good") {
        return { good: prevState.good + 1 };
      } else if (btnLabel === "Neutral") {
        return { neutral: prevState.neutral + 1 };
      } else if (btnLabel === "Bad") {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  render() {
    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0
      );
    const positivePercentage =
      this.state.good > 0
        ? Math.floor((this.state.good / countTotalFeedback) * 100)
        : 0;
    return (
      <>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
        <div>
          <p>Total feedbacks: {countTotalFeedback}</p>
          <p>Positive feedbacks: {positivePercentage}%</p>
        </div>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
      </>
    );
  }
}

export default Statistics;
