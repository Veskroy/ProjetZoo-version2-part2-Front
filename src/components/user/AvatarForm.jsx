import Element from "../commons/Form/Element";
import Form from "../commons/Form/Form";

import PropTypes from 'prop-types';

export default function AvatarForm({ handleAvatarSubmit, loading }) {
    let textElement = loading ? 'Modification de votre avatar...' : 'Modifier mon avatar';
    return (
        <Form className="avatar-form" onSubmit={handleAvatarSubmit}>
            <Element input={{
                type: 'label',
                text: 'Ma photo de profil',
            }} />
            <Element input={{
                type: 'file',
            }} />
            <Element input={{
                type: 'submit',
                text: textElement,
                class: 'btn button-primary full-width',
                onSubmit: handleAvatarSubmit,
            }} />
        </Form>
    )
}

AvatarForm.propTypes = {
    handleAvatarSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
}

AvatarForm.defaultProps = {
    handleAvatarSubmit: () => {},
    loading: false,
}
