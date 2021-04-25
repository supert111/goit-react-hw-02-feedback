import { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

//import Statistics from './components/Statistics/Statistics';
//import MySecondComponent from './components/MySecondComponent';



class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    countTotalFeedback = () => {
        const stateValues = Object.values(this.state);
        const total = stateValues.reduce((acc, value) => acc + value, 0);
        return total;
    } 
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
    }

    handleClick = (element) => {
        const { name } = element.target;
        this.setState(state => ({ [name]: state[name] + 1 }));
    }

    render () {
        console.log(this.countTotalFeedback())
        return (
            <div>
                <Section title="Please leave feedback"> 
                    <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick} />

                </Section>
            </div>
        )
    }
}
export default App;