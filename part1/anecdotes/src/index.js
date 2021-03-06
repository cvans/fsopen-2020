import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.onClickHandler}>
    {props.text}
  </button>
)

const MostVoted = ({votes}) => {
  const idx = votes.indexOf(Math.max(...votes))
  return (
    <p>
      {anecdotes[idx]}
      <br />
      has {votes[idx]} votes
    </p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const onNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const onVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button onClickHandler={onVoteClick} text={'vote'} />
      <Button onClickHandler={onNextClick} text={'next anectdote'} />
      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)