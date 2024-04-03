import PropTypes from 'prop-types';

import formatDate from '../../services/transformers/formatDate';
import UserAvatar from "../user/userAvatar.jsx";

export default function Author({ author, dateAnswer }) {
    const { firstname, lastname } = author;

    return (
        <div>
            <p className="author">
                <UserAvatar userId={author.id} />
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
