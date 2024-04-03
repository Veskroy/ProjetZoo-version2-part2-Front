import PropTypes from 'prop-types';

export default function Element({ input, handleChange }) {
    const {
        type,
        text,
        required,
        placeholder,
        name
    } = input;

    //console.log(input);
    return (
        <>
            {type === 'label' && (
                <label>{text}</label>
            )}
            {type === 'textarea' && (
                <textarea placeholder={placeholder} required={required} onChange={(e) => handleChange(e.target.value)}></textarea>
            )}
            {type === 'input' && (
                <input name={name} type="text" placeholder={placeholder} required={required} onChange={(e) => handleChange(e.target.value)} />
            )}
            {type === 'submit' && (
                <button type="submit" className={input.class}>
                    {text}
                </button>
            )}
            {type === 'file' && (
                <input type="file" required={required} />
            )}
        </>
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
