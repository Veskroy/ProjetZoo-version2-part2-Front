import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getQuestion, patchQuestion} from "../../services/api/WildWonderHub.js";
import {useAccount, useCurrentUser, useRolesUser} from "../../hooks/getAccount.js";
import NotFound from "../NotFound.jsx";
import ErrorLogin from "../../components/commons/ErrorLogin.jsx";
import {Link} from "wouter";
import BackLink from "../../components/commons/BackLink.jsx";
import Form from "../../components/commons/Form/Form.jsx";
import Element from "../../components/commons/Form/Element.jsx";

export default function QuestionEdit({ id }) {
    const [question, setQuestion] = useState({});
    const user = useCurrentUser();
    const { isAdmin, isEmployee } = useRolesUser();
    const { userContext, isLoggedIn, errorLogin } = useAccount();

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getQuestion(id).then((value) => {
            setQuestion(value);
        }).catch((error) => {
            console.error("Error getQuestion: ", error);
        });
    }, [id]);

    if (!userContext || errorLogin || !isLoggedIn) {
        return <ErrorLogin />
    }

    if (question.status === 404) {
        return (
            <NotFound />
        )
    }

    //console.log("question: ", question);
    //console.log("question author: ", question.author.id, user.id);
    //console.log(isAdmin, isEmployee);

    if (!((isAdmin || isEmployee) || question.author.id === user.id)) {
        return (
            <div className="unauthorized">
                <div>
                    <h1>Vous n'êtes pas autorisé à modifier ce post.</h1>
                    <p className="center">Pour pouvoir modifier un post, vous devez en être l'auteur ou être administrateur ou employé de
                        notre Zoo.</p>
                </div>
                <Link style={{color: 'black'}} className="link" to="/">
                    Retour à l'accueil
                </Link>
            </div>
        )
    }

    const handlePatchPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        console.log("formData: ", formData.get('title'), formData.get('description'));

        const data = {
            title: formData.get('title') === '' ? question.title : formData.get('title'),
            description: formData.get('description') === '' ? question.description : formData.get('description'),
        };

        console.log("data: ", data);

        patchQuestion(data, question.id).then((value) => {
             console.log("then patchQuestion: ", value);
             window.location.reload();
             setSuccess(true);
        }).catch((error) => {
            console.error("Error patchQuestion: ", error);
            setError(true);
        });
    }

    return (
        <div>
            <h1 className="main-title">Édition du post</h1>

            <BackLink to={`/forum/question/${question.id}`} label="Retour au post" />

            {success &&
                <p className="message message-success">
                    Le post a bien été modifié.
                </p>
            }

            {error &&
                <p className="message message-error">
                    Une erreur est survenue lors de la modification du post.
                </p>
            }

            <div className="mt-50">
                <Form className="question-form" onSubmit={handlePatchPost}>
                    <Element input={{
                        type: 'label',
                        text: 'Titre du post',
                    }} />
                    <Element input={{
                        type: 'input',
                        name: 'title',
                        placeholder: question.title,
                        required: true,
                    }} />
                    <Element input={{
                        type: 'label',
                        text: 'Description du post',
                    }} />
                    <Element input={{
                        type: 'textarea',
                        name: 'description',
                        placeholder: question.description,
                        required: true,
                    }} />
                    <Element input={{
                        type: 'submit',
                        text: 'Modifier le post',
                        class: 'btn button-primary full-width',
                    }} />
                </Form>
            </div>

        </div>
    )
}

QuestionEdit.propTypes = {
    id: PropTypes.string.isRequired
};

QuestionEdit.defaultProps = {
    id: ''
};
