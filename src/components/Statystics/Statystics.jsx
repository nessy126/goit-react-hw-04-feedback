import { StatysticCounter, StatysticItem } from "./Statystics.styled"
import PropTypes from 'prop-types';

const Statystics = ({
  title,
  optionsWithValues,
  total,
  positivePercentage,
}) => {
  return (
    <StatysticCounter>
      <h2>{title}</h2>
      {total > 0 ? (
        <>
          {optionsWithValues.map((el) => (
            <StatysticItem key={el}>
              {el[0]}: {el[1]}
            </StatysticItem>
          ))}
          <StatysticItem>Totat: {total}</StatysticItem>
          <StatysticItem>
            Positive feedback: {positivePercentage}%
          </StatysticItem>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </StatysticCounter>
  )
}

Statystics.prototype = {
  title: PropTypes.string.isRequired,
  optionsWithValues: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}

export default Statystics
