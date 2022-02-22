import PropTypes from 'prop-types';

import {
  ButtonsConteiner,
  Button,
  MainConteiner,
} from "./FeedbackOptions.styled"

const FeedbackOptions = ({options =[], counterFeedbacks}) => {
  return (
    <MainConteiner>
      <ButtonsConteiner>
        {options.map((el) => (
          <Button
            onClick={(e) => counterFeedbacks(el)}
            type="button"
            key={el}
            name={el}
          >
            {el}
          </Button>
        ))}
      </ButtonsConteiner>
    </MainConteiner>
  )
}

FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  counterFeedbacks: PropTypes.func.isRequired
}
 
export default FeedbackOptions;