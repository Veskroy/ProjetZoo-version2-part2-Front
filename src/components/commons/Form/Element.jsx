import PropTypes from 'prop-types';

export default function Element({ input, handleChange }) {
    const {
        type,
        text,
        required,
        placeholder
    } = input;

    //console.log(input);
    return (
        <div>
            {type === 'label' && (
                <label>{text}</label>
            )}
            {type === 'textarea' && (
                <textarea placeholder={placeholder} required={required} onChange={(e) => handleChange(e.target.value)}></textarea>
            )}
            {type === 'input' && (
                <input type="text" placeholder={placeholder} required={required} onChange={(e) => handleChange(e.target.value)} />
            )}
            {type === 'submit' && (
                <button type="submit" className={input.class}>
                    {text}
                </button>
            )}
            {type === 'file' && (
                <input type="file" required={required} />
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
