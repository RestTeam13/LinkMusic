import React from 'react'
import {useCountUp} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

function Counter(props) {
    const {number} = props
    let play = true
    return (
        <VisibilitySensor offset={{top: 100, bottom: -100}}>
            {({isVisible}) => (
                <>
                    {isVisible ? play ? (play = false, <CounterText endNumber={number}/>) : <p>{number}</p> :
                        <p>{number}</p>}
                </>
            )}
        </VisibilitySensor>
    )
}


function CounterText(props) {
    const {endNumber} = props
    const countUpRef = React.useRef(null);
    let redrawCount = false
    const countUp = useCountUp({
        ref: countUpRef,
        start: 0,
        end: endNumber,
        duration: 2,
        redraw: redrawCount
    });

    return (
        <p ref={countUpRef}/>
    );

};
export default Counter