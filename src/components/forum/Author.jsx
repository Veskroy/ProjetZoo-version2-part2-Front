import PropTypes from 'prop-types';

export default function Author({ author }) {
    const { avatarPathname, firstname, lastname } = author;
    return (
        <div>
            {/* avatar à implémenter */}
            <p className="author">
                {firstname + ' ' + lastname}
            </p>
        </div>
    )
}

Author.propTypes = {
    author: PropTypes.object.isRequired
}

Author.defaultProps = {
    author: {}
}
