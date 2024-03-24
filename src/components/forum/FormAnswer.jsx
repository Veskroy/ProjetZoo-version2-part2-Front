import PropTypes from 'prop-types';

export default function FormAnswer({ className, isResolved, children }) {
    return (
        <div className={className}>
            
            {isResolved ? (
                <div className="interaction-question__resolved mt-50">
                    <h5>Ce post est résolu, vous pouvez <a className="link" href="/">créer un nouveau post</a> si vous en avez besoin.</h5>
                </div>
            ) : (
                children
            )}

        </div>
    )
}

FormAnswer.propTypes = {
    className: PropTypes.string,
    isResolved: PropTypes.bool,
    children: PropTypes.node,
}

FormAnswer.defaultProps = {
    className: '',
    isResolved: false,
    children: null,
}
