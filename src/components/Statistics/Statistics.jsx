import { Component } from 'react';

//import { Fragment } from "react";

class Statistics extends Component {
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // }

    // countTotalFeedback() {

    // }

    render () {
        return (
            <section>
                <h1>Please leave feedback</h1>
                <div>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                </div>
            </section>          
        )
    }
}


export default Statistics;


// <>
    // <Fragment>
    //     <div></div>
    //     <div></div>
    // </Fragment>