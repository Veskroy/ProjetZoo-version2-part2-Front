import PropTypes from 'prop-types';

export default function Form({ className, children, onSubmit }) {
    return (
        <form className={className} onSubmit={onSubmit}>
            {/*inputs?.map((input, index) => {
                return (
                    <Element key={index} input={input} />
                )
            })*/}
            {children}
        </form>
    )
}

Form.propTypes = {
    className: PropTypes.string,
    //inputs: PropTypes.array,
    children: PropTypes.node,
    onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
    className: '',
    //inputs: [],
    children: null,
    onSubmit: () => {},
}
