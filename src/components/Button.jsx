import PropTypes from 'prop-types'

function Button({ children, text, type, isDisabled }) {
  return (
    <button 
      type={type}
      disabled={isDisabled}
      className='p-2 m-2 bg-black text-white text-lg rounded-lg shadow-xl
      hover:bg-red-400 hover:scale-95 hover:cursor-pointer
      transition-all ease-linear'>
        {children}{text}
    </button>
  )
}

Button.defaultProps = {
  text: 'Button',
  isDisabled: false,
  type: 'button',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button

