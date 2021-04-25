import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    const { good, neutral, bad } = options;
    return (
        <div>
            <button className={styles} type="button" name={good} onClick={onLeaveFeedback}>Good</button>
            <button className={styles} type="button" name={neutral} onClick={onLeaveFeedback}>Neutral</button>
            <button className={styles} type="button" name={bad} onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(
        PropTypes.shape({
            good: PropTypes.string.isRequired,
            neutral: PropTypes.string.isRequired,
            bad: PropTypes.string.isRequired,
        })
    ),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;