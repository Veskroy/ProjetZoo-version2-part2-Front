import PropTypes from 'prop-types'
import truncate from '../../services/transformers/truncate';

import check_icon from '../../../public/assets/images/icons/check_icon.svg';
import Author from './Author';
import formatDate from '../../services/transformers/formatDate';

import iconMsg from '../../../public/assets/images/icons/message_icon.svg';
import likeIcon from '../../../public/assets/images/icons/like_icon.svg';

export default function QuestionItem({ question }) {
    // question : id, createdAt, description, isResolved, title, author
    // author : firstname, lastname, avatarPathname
    const {
        id,
        createdAt,
        isResolved,
        title,
        author,
        updatedAt,
        likes,
        answers
    } = question;
    return (
        <div className="card-question">
                <a href={`/forum/question/${id}`} className="question-link link-hidden"></a>
                <div className="card-question__mains-infos">
                    <div className="question-title">
                        <h5 className="question__title">{truncate(title, 30)}</h5>
                        <div className="data-answers">
                            <span>
                                <img src={iconMsg} alt="msg-icon" className="basic-icon msg-icon" />
                                {answers.length}
                            </span>
                            {isResolved ?
                                <img src={check_icon} alt="checked" className="basic-icon checked-icon" />
                                :
                                <a className="btn button-tertiary cursor-not-allowed">
                                    Non-résolu
                                </a>
                            }
                        </div>
                    </div>

                    <div className="question__author">
                        <div className="author">
                            <Author author={author} />
                        </div>

                        <div className="question-dates">
                            {updatedAt && <p className="date-creation">Dernière réponse le updatedAt</p>}

                            <p className="date-creation">Post créé le {formatDate(createdAt)}</p>
                        </div>

                        <span className="badge badge-likes">
                                {likes.length}
                            <img src={likeIcon} alt="like icon" className="basic-icon like-icon" />
                        </span>

                    </div>

                </div>
            </div>
    )
}

QuestionItem.propTypes = {
    question: PropTypes.object.isRequired
};

QuestionItem.defaultProps = {
    question: {}
};
