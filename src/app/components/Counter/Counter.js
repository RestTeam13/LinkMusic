import React from 'react'
import {useCountUp} from 'react-countup';

const Counter = (props) => {
    const {number} = props
    const countUpRef = React.useRef(null);
    const countUp = useCountUp({
        ref: countUpRef,
        start: 0,
        end: number,
        duration: 2,
    });
    return (
        <p ref={countUpRef}/>
    );
};
export default Counter