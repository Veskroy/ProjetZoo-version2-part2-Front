import PropTypes from 'prop-types';
import Author from './Author';
import formatDate from '../../services/transformers/formatDate';
import {useRolesUser, useRolesUserByAuthor} from '../../hooks/getAccount';
import {patchQuestion} from "../../services/api/WildWonderHub.js";

import likeIcon from '../../../public/assets/images/icons/like_icon.svg';


export default function QuestionShow({ question }) {
    const { isAdmin, isEmployee } = useRolesUserByAuthor(question.author);
    const userRoles = useRolesUser();

    const handleResolvedPost = () => {
        const data = {
            isResolved: !question.isResolved
        };
        patchQuestion(data, question.id).then((value) => {
            console.log("then patchQuestion: ", value);
            window.location.reload();
        });
    }

    return (
        <div className="show-question">
            <div className="data-question">
                <div className="question-main__informations">
                    <h2>{question.title}</h2>
                    <div className="question-state">
                        {(userRoles.isAdmin || userRoles.isEmployee) &&
                            <span className="badge set-resolved" onClick={handleResolvedPost}>
                                {question.isResolved ? 'Réouvrir le post' : 'Fermer le post'}
                            </span>
                        }
                        <span className="badge badge-resolved">
                            Post {question.isResolved ? 'fermé' : 'ouvert'}
                        </span>
                    </div>
                </div>
                <div className="author">
                    <Author author={question.author} />

                    {isAdmin && (
                        <span className="badge badge-admin">
                            Admin
                        </span>
                    )}
                    {isEmployee && (
                        <span className="badge badge-employee">
                            Employé
                        </span>
                    )}
                </div>
                <p className="date-creation">Post créé le {formatDate(question.createdAt)}</p>
            </div>
            <p className="question__description">{question.description}</p>

            <p className="question__total-likes">
                {question.likes.length > 0 ?
                    (<span className="badge badge-likes">
                        {question.likes.length}
                        <img src={likeIcon} alt="like icon" className="basic-icon like-icon" />
                    </span>)
                :
                    ( <p>Ce post n'a pas été liké.</p> )
                }
            </p>
        </div>
    )
}

QuestionShow.propTypes = {
    question: PropTypes.object.isRequired
}

QuestionShow.defaultProps = {
    question: {}
}
