import PropTypes from 'prop-types';
import { getAvatarFromUser } from '../../services/api/WildWonderHub';
import { useEffect, useState } from 'react';

export default function UserAvatar({ userId }) {

    const avatar = getAvatarFromUser(userId);
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        avatar.then((res) => {
            console.log(res);
            setAvatarUrl(res);
        });
    }, [userId])

    return (
        <img src={avatarUrl} alt="avatar" className="avatar utilisateur" />
    );
}

UserAvatar.propTypes = {
    userId: PropTypes.number.isRequired,
};

UserAvatar.defaultProps = {
    userId: null,
};
