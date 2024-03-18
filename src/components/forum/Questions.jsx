import PropTypes from 'prop-types'
import QuestionItem from './QuestionItem'

export default function QuestionList({ page, data }) {
    console.log('forumData from list', data);
    return (
        <div className="faq-container">
            <h2 className="second-title mt-50 mb-50">Les posts les plus récents (page {page})</h2>
            
            <div className="questions-container">
                {data.map((question, index) => (
                    <QuestionItem key={index} question={question} />    
                ))}
            </div>
        </div>
    )
}

QuestionList.propTypes = {
    data: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired
}

QuestionList.defaultProps = {
    data: [],
    page: 1
}
