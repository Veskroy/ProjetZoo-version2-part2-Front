import PropTypes from 'prop-types'
import AnswerItem from './AnswerItem';

export default function AnswerList({ answers, question }) {
    return (
        <div className="question-answers-container mt-50">
            <div className="count-answers">
                <h3>
                    {answers.length > 1 ? answers.length + ' réponses' : answers.length + ' réponse' }
                </h3>
                <div className="line"></div>
            </div>
            {answers?.map((answer, index) => {
                return <AnswerItem key={index} answer={answer} question={question} />
            })}
        </div>
    )
}

AnswerList.propTypes = {
    answers: PropTypes.array.isRequired,
    question: PropTypes.object.isRequired
}

AnswerList.defaultProps = {
    answers: [],
    question: {}
}
