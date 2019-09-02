import React, { useState } from "react";
import ReacDOM from "react-dom";

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = props => {
  const [selected, setSelected] = useState(0);
  let [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  let mostVotes = 0;
  let array = new Array(...votes);
  let i = Math.max(...array);
  for (var a = 0; a < array.length; a++) {
    if (votes[a] === i) {
      mostVotes = a;
    }
  }

  const randomAnecdote = () => {
    const a = getRandomInt(6);
    setSelected(a);
  };

  const handleVote = () => {
    let newArray = [...votes];
    newArray[selected] += 1;
    setVotes(newArray);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{props.anecdotes[selected]} </div>

      <div>has {votes[selected]} votes</div>

      <div>
        <Button onClick={handleVote} text="vote" />
        <Button onClick={randomAnecdote} text="next anecdote" />
      </div>

      <div>
        {console.log(mostVotes)}
        <h2>Anecdote with the most votes</h2>
        <p>{anecdotes[mostVotes]}</p>
      </div>
    </div>
  );
};
function getRandomInt(max) {
  //this function creates a random number from 0 to max - 1 ;
  return Math.floor(Math.random() * Math.floor(max));
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReacDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
