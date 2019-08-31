import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = props => {
  if (props.allClicks === 0)
    return (
      <div>
        <p>No statistics</p>
      </div>
    );
  return (
    <div>
      <h2>Statistics</h2>

      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.neutral} />
      <Statistic text="all" value={props.good + props.neutral + props.bad} />
      <Statistic
        text="average"
        value={
          props.good - props.bad / (props.good + props.neutral + props.bad)
        }
      />
      <Statistic
        text="positive"
        value={
          (props.good / (props.good + props.neutral + props.bad)) * 100 + "%"
        }
      ></Statistic>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(allClicks + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(allClicks + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(allClicks + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
