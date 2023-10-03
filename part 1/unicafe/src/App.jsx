import { useState } from 'react'


const Button = ({handleClick, text}) => {

  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const handleAnecdotes = () => {
    return (
    setSelected(Math.floor(Math.random() * 8))
    )
  }


  return (
    <div>
    <h1><b>Give Feedback</b></h1>
    <Button 
      handleClick={handleGood}
      text='Good'
    />
    <Button 
      handleClick={handleNeutral}
      text='Neutral'
    />
    <Button 
      handleClick={handleBad}
      text='Bad'
    />
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}


const Statistics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
  
      <div>
        <br/>
        No Feedback Given
        
      </div>
    )
  }
  return (
    <div>
      <h1><b>Statistics</b></h1>
      <table>
        <tbody>
          <StatisticLine text={'Good'} value={props.good}/>
          <StatisticLine text={'Neutral'} value={props.neutral}/>
          <StatisticLine text={'Bad'} value={props.bad}/>
          <StatisticLine text={'All'} value={props.good + props.neutral + props.bad} />
          <StatisticLine text={'Average'} value={(props.good + props.neutral + props.bad) / 3} />
          <StatisticLine text={'Positive'} value={(props.good / (props.good + props.neutral + props.bad)) * 100 + ' %'}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
      {props.text}: {props.value}
      </td>
    </tr>
  )
}

export default App