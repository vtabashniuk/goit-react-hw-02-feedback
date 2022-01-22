import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics/Statistics";
import FeedbackOption from "./components/Statistics/FeedbackOption/FeedbackOption";
import NotificationMessage from "./components/Statistics/NotificationMessage/NotificationMessage";
import Section from "./components/Statistics/Section/Section";
// import Counter from "./components/Counter";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  title = "Task 2.1 Feedback widjet";

  options = Object.keys(this.state);

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositivePercentage() {
    return this.state.good > 0
      ? Math.floor((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }

  handleIncrement = (event) => {
    const btnLabel = event.target.textContent.toLowerCase();
    this.setState((prevState) => {
      return { [btnLabel]: prevState[btnLabel] + 1 };
    });
  };
  render() {
    const options = this.options;
    const state = this.state;
    const title = this.title;
    return (
      <>
        <h1>Homework 2</h1>
        <Section title={title}>
          <FeedbackOption
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={options}
              state={state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositivePercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

/* <Counter initialValue={0} /> */

export default App;
