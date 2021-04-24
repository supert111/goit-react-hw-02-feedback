import { Component } from 'react';
import Section from './components/Section/Section';
//import Statistics from './components/Statistics/Statistics';

//import Statistics from './components/Statistics/Statistics';
//import MySecondComponent from './components/MySecondComponent';



class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }


    render () {
        return (
            <div>
                <Section title="Please leave feedback"> 
                    {/* <FeedbackOptions options={this.state} onLeaveFeedback={}> */}

                </Section>
            </div>
        )
    }
}
export default App;