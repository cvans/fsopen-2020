import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 

const Stats = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0)
    return (<p>No feedback given.</p>)
  else
    return (
      <table>
        <tbody>
          <Statistic stat={good} text={'good'} />
          <Statistic stat={neutral} text={'neutral'} />
          <Statistic stat={bad} text={'bad'} />
          <Statistic stat={good + neutral + bad} text={'all'} />
          <Statistic stat={(good - bad)/(good + neutral + bad)} text={'average'} />
          <Statistic stat={(good)/(good + neutral + bad) * 100} text={'positive'} />
        </tbody>
      </table>
    )
}

const Statistic = ({stat, text}) => (
  <tr>
    <td>{text}</td>
    <td>{stat.toFixed(2)}</td>
  </tr> 
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
