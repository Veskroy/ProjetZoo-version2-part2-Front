import PropTypes from 'prop-types';

// props => {label, onClick, type, disabled, className}
export default function Button({ type, className, label, onClick, disabled }) {
  return (
      <button
        type={type}
        className={`btn ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
  )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
    className: ''
};
