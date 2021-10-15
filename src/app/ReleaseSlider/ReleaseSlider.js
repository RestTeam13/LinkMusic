import React from "react";
import './style.css'
import ReleaseSliderSlide from "./ReleaseSliderSlide";


class ReleaseSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        }
    }


    render() {
        return (
            <div className='release-slider'>
                <button className='release-slider__button release-slider__button_prev' />
                <button className='release-slider__button release-slider__button_next' />
                <ReleaseSliderSlide
                    style={{background: 'url(images/slide1-bg.png) center no-repeat', backgroundSize: '100%'}}/>
            </div>
        )
    }

}


export default ReleaseSlider;
