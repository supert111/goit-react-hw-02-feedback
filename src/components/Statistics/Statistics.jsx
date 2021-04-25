

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h2>Statistics</h2>
            { good || neutral || bad                         
                ?   <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {total}</li>
                        <li>Positive fedback: {positivePercentage}%</li>
                    </ul>
                :   <p>No feedback given</p>}
        </>         
    )
}

export default Statistics;