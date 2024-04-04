import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import ErrorLogin from "../../components/commons/ErrorLogin";
import NotFound from "../NotFound";

import { useAccount, useCurrentUser, useRolesUser } from "../../hooks/getAccount"
import { getAllAnswersFromQuestion, getQuestion, postAnswerToQuestion } from "../../services/api/WildWonderHub";

import edit_icon from "../../../public/assets/images/icons/edit_icon.svg";
import QuestionShow from "../../components/forum/QuestionShow";
import AnswerList from "../../components/forum/AnswerList";
import FormAnswer from "../../components/forum/FormAnswer";
import Form from "../../components/commons/Form/Form";
import Element from "../../components/commons/Form/Element";
import BackLink from "../../components/commons/BackLink";
import { Link } from "wouter";

export default function QuestionDetails({ id }) {
    const { isLoggedIn, errorLogin } = useAccount();
    const { isAdmin, isEmployee } = useRolesUser();
    const user = useCurrentUser();
    //console.log(user);
    
    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [formAnswer, setFormAnswer] = useState('');

    useEffect(() => {
        getQuestion(id).then((value) => {
            setQuestion(value);
        });
        getAllAnswersFromQuestion(id).then((value) => {
            setAnswers(value["hydra:member"]);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formAnswer,  id);
        postAnswerToQuestion(id, formAnswer).then((value) => {
            console.log("then postanswer: ", value);
            setFormAnswer('');
            window.location.reload();
        });
    };

    return (
        <div>
            {!user || errorLogin || !isLoggedIn ? (
                <ErrorLogin />
            ) : (
                question.status === 404 ? (
                    <NotFound />
                ) : (
                    <>
                        <div className="btn-actions-question">
                            <BackLink to="/forum" label="Retour au forum" />
                            {(isAdmin || isEmployee) && (
                                <Link href={`/forum/question/${question.id}/edit`}>
                                    <img src={edit_icon} alt="edit icon" className="basic-icon edit-icon" />
                                    Modifier
                                </Link>
                            )}
                        </div>
                        <QuestionShow question={question} />
                        <AnswerList answers={answers} question={question} />

                        <FormAnswer isResolved={question.isResolved} className="question-interaction">
                            <div className="reply mt-50 full-width">
                                <Form className="reply-form" onSubmit={handleSubmit}>
                                    <Element input={{
                                        type: 'label',
                                        text: 'Votre réponse',
                                    }} />
                                    <Element handleChange={setFormAnswer}
                                        input={{
                                            type: 'textarea',
                                            required: true,
                                        }}
                                    />
                                    <Element input={{
                                        type: 'submit',
                                        text: 'Répondre',
                                        class: 'btn button-primary full-width',
                                    }} />
                                </Form>
                            </div>
                        </FormAnswer>
                    </>
                )
            )}
        </div>
    )
}

QuestionDetails.propTypes = {
    id: PropTypes.string.isRequired
}

QuestionDetails.defaultProps = {
    id: ''
}
