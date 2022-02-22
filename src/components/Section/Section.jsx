import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>{title}
      <h1>
        {children}
      </h1>
    </section>
  )
}

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node
}
 
export default Section;