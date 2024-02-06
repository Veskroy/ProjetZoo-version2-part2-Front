import PropTypes from 'prop-types';

export default function Modal({ fullWidth, action, question, onClick }) {
  return (
    <div className="modal-delete">
        <button className={`btn button-danger open-modal mt-50 ${fullWidth ? 'full-width' : ''} `}>
            {action}
        </button>
        <div className="modal-form">
            <div className="modal-form__content">
                <h5>{question}</h5>
                <div>
                    {/* form: todo */}
                </div>
            </div>
        </div>
    </div>
  )
}

Modal.propTypes = {
    fullWidth: PropTypes.bool,
    action: PropTypes.string,
    question: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

Modal.defaultProps = {
    fullWidth: false,
    action: 'Supprimer',
    question: 'Êtes-vous sûr(e)?',
    onClick: null
};
