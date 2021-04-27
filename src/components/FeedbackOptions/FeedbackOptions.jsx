import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option =>
                (<button className={styles.button} 
                    type="button" 
                    name={option} 
                    key={option} 
                    onClick={onLeaveFeedback}>{option}</button>)
                )
            }
        </div>
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;