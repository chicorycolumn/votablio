import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    qObj: {
      q1: {
        question: "What is best car?",
        answer1: "Ford",
        answer1votes: 0,
        answer2: "Ferrari",
        answer2votes: 0
      },
      q2: {
        question: "What is best pet?",
        answer1: "Dog",
        answer1votes: 0,
        answer2: "Cat",
        answer2votes: 0
      }
    },
    currentQuestion: 1
  };

  voteLeft = () => {
    this.setState(function(currentState) {
      let newQObj = {};
      newQObj[`q${this.state.currentQuestion}`] = {
        ...currentState.qObj[`q${this.state.currentQuestion}`]
      };
      newQObj[`q${this.state.currentQuestion}`].answer1votes =
        currentState.qObj[`q${this.state.currentQuestion}`].answer1votes + 1;
      return { qObj: newQObj };
    });
  };

  voteRight = () => {
    this.setState(function(currentState) {
      let newQObj = {};
      newQObj[`q${this.state.currentQuestion}`] = {
        ...currentState.qObj[`q${this.state.currentQuestion}`]
      };
      newQObj[`q${this.state.currentQuestion}`].answer2votes =
        currentState.qObj[`q${this.state.currentQuestion}`].answer2votes + 1;
      return { qObj: newQObj };
    });
  };

  nextQuestion = () => {
    this.setState(currentState => {
      return { currentQuestion: currentState.currentQuestion + 1 };
    });
  };

  render() {
    return (
      <div className="Votablio" onKeyPress={this.handleKeyPress}>
        <p>Let's vote!</p>

        <p>{this.state.qObj[`q${this.state.currentQuestion}`].question}</p>

        <button onClick={this.voteLeft}>
          {this.state.qObj[`q${this.state.currentQuestion}`].answer1}
        </button>

        <span>
          {this.state.qObj[`q${this.state.currentQuestion}`].answer1votes}
        </span>

        <button onClick={this.voteRight}>
          {this.state.qObj[`q${this.state.currentQuestion}`].answer2}
        </button>

        <span>
          {this.state.qObj[`q${this.state.currentQuestion}`].answer2votes}
        </span>

        <br />

        <button onClick={this.nextQuestion}>Sod this, next question!</button>
      </div>
    );
  }
}

export default App;
