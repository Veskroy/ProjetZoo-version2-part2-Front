import PropTypes from "prop-types";

import Element from "../commons/Form/Element.jsx";
import Form from "../commons/Form/Form.jsx";

export default function PostQuestion({ handlePostSubmit }) {
    return (
        <Form className="question-form" onSubmit={handlePostSubmit}>
            <Element input={{
                type: 'label',
                text: 'Titre du post'
            }}/>
            <Element input={{
                type: 'input',
                required: true,
                placeholder: "Écrivez le titre de votre post",
            }}/>
            <Element input={{
                type: 'label',
                text: 'Description du post'
            }}/>
            <Element input={{
                type: 'textarea',
                required: true,
                placeholder: "Décrivez votre problème ici",
            }}/>
            <Element input={{
                type: 'submit',
                text: 'Créer ce post',
                class: 'btn button-primary full-width',
            }} />
        </Form>
    );
}

PostQuestion.propTypes = {
    handlePostSubmit: PropTypes.func,
};

PostQuestion.defaultProps = {
    handlePostSubmit: null,
};
