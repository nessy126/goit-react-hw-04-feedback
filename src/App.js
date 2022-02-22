import { useState } from "react"
import "./App.css"
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Section from "./components/Section/Section"
import Statystics from "./components/Statystics/Statystics"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countTotalFeedback = () => {
    const total = good + neutral + bad
    return total
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    const positivePercentage = total ? Math.round((good / total) * 100) : 0
    return positivePercentage
  }

  const counterFeedbacks = (name) => {
    if (name === "good") setGood((prev) => prev + 1)
    if (name === "neutral") setNeutral((prev) => prev + 1)
    if (name === "bad") setBad((prev) => prev + 1)
  }

  const total = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()

  return (
    <div className="App">
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          counterFeedbacks={counterFeedbacks}
        />
        <Statystics
          title={"Statystics"}
          optionsWithValues={[["good", good],["neutral", neutral],["bad", bad]]}
          total={total}
          positivePercentage={positivePercentage}
        />{" "}
      </Section>{" "}
    </div>
  )
}

export default App
