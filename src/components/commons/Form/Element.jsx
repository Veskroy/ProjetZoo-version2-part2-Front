import PropTypes from 'prop-types';

export default function Element({ input, handleChange }) {
    const {
        type,
        text,
        required,
    } = input;

    //console.log(input);
    return (
        <div>
            {type === 'label' && (
                <label>{text}</label>
            )}
            {type === 'textarea' && (
                <textarea required={required} onChange={(e) => handleChange(e.target.value)}></textarea>
            )}
            {type === 'input' && (
                <input type="text" required={required} onChange={(e) => handleChange(e.target.value)} />
            )}
            {type === 'submit' && (
                <button type="submit" className={input.class}>
                    {text}
                </button>
            )}
        </div>
    )
}

Element.propTypes = {
    input: PropTypes.object.isRequired,
    handleChange: PropTypes.func
}

Element.defaultProps = {
    input: {},
    handleChange: () => {}
}
