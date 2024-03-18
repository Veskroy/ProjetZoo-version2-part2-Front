import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import ErrorLogin from "../../components/commons/ErrorLogin";
import NotFound from "../NotFound";

import { useAccount, useCurrentUser, useRolesUser } from "../../hooks/getAccount"
import { getAllAnswersFromQuestion, getQuestion } from "../../services/api/WildWonderHub";

import back_icon from "../../../public/assets/images/icons/back_icon.svg";
import edit_icon from "../../../public/assets/images/icons/edit_icon.svg";
import QuestionShow from "../../components/forum/QuestionShow";
import AnswerList from "../../components/forum/AnswerList";

export default function QuestionDetails({ id }) {
    const { isLoggedIn, errorLogin } = useAccount();
    const { isAdmin, isEmployee } = useRolesUser();
    const user = useCurrentUser();
    //console.log(user);
    
    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        getQuestion(id).then((value) => {
            setQuestion(value);
        });
        getAllAnswersFromQuestion(id).then((value) => {
            setAnswers(value["hydra:member"]);
        });
    }, [id]);

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
                            <a href="/forum" className="link mbc">
                                <img src={back_icon} alt="back icon" className="basic-icon back-icon" />
                                Retour au forum
                            </a>
                            {(isAdmin || isEmployee) && (
                                <a href="/">
                                    <img src={edit_icon} alt="edit icon" className="basic-icon edit-icon" />
                                    Modifier
                                </a>
                            )}
                        </div>
                        <QuestionShow question={question} />
                        <AnswerList answers={answers} question={question} />
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
