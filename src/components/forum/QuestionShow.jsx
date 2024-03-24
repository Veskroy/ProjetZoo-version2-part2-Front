import PropTypes from 'prop-types';
import Author from './Author';
import formatDate from '../../services/transformers/formatDate';
import { useRolesUserByAuthor } from '../../hooks/getAccount';

export default function QuestionShow({ question }) {
    const { isAdmin, isEmployee } = useRolesUserByAuthor(question.author);
    return (
        <div className="show-question">
            <div className="data-question">
                <div className="question-main__informations">
                    <h2>{question.title}</h2>
                    <div className="question-state">
                        {/* réouverture, fermeture du post à implémenter */}
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

            {/* likes à implémenter */}
        </div>
    )
}

QuestionShow.propTypes = {
    question: PropTypes.object.isRequired
}

QuestionShow.defaultProps = {
    question: {}
}
