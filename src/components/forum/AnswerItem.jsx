import PropTypes from 'prop-types';

import { useCurrentUser, useRolesUserByAuthor } from '../../hooks/getAccount';
import formatDate from '../../services/transformers/formatDate';

import Author from './Author';
import Dropdown from '../commons/Dropdown';

export default function AnswerItem({ question, answer }) {
    const { author, createdAt, description, updatedAt } = answer;
    const { questionAuthor } = question;
    const user = useCurrentUser();

    const { isAdmin, isEmployee } = useRolesUserByAuthor(author);
    return (
        <div className="answer">
            <div className="answer__informations">
                <div className="author">

                    <Author author={author} dateAnswer={createdAt} />
                    
                    {author === questionAuthor &&
                        <span className="badge badge-author">
                            Auteur
                        </span>
                    }
                    {isAdmin &&
                        <span className="badge badge-admin">
                            Admin
                        </span>
                    }
                    {isEmployee &&
                        <span className="badge badge-employee">
                            Employé
                        </span>
                    }
                </div>
            </div>
            <div className="answer-description">
                <p className="text">{description}</p>
                    {((user === author) || user.isAdmin || user.isEmployee) && (
                        <Dropdown actions={[
                            {
                                label: 'Modifier',
                                path: '/'
                            }
                        ]} />
                    )}
                {answer.updatedAt && <p className="update">Modifié le {formatDate(updatedAt)}</p>}
            </div>
        </div>
    )
}

AnswerItem.propTypes = {
    answer: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired
}

AnswerItem.defaultProps = {
    answer: {},
    question: {}
}
