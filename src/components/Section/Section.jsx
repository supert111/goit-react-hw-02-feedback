//import PropTypes from 'prop-types';


const Section = ({title, children}) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
            {/* <div>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </div> */}
        </section>          
    )
}

export default Section;