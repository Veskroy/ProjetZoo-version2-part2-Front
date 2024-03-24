import PropTypes from 'prop-types';

import formatDate from '../../services/transformers/formatDate';

export default function Author({ author, dateAnswer }) {
    const { avatarPathname, firstname, lastname } = author;
    return (
        <div>
            {/* avatar à implémenter */}
            <p className="author">
                {firstname + ' ' + lastname}

                {dateAnswer &&
                    ' - ' + formatDate(dateAnswer)
                }
            </p>
        </div>
    )
}

Author.propTypes = {
    author: PropTypes.object.isRequired,
    dateAnswer: PropTypes.string
}

Author.defaultProps = {
    author: {},
    dateAnswer: ''
}
