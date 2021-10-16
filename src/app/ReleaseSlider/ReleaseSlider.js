import React from "react";
import './style.css'
import ReleaseSliderSlide from "./ReleaseSliderSlide";
import ReleaseSliderMainSlide from "./ReleaseSliderMainSlide";

const slides = [
    {bg: 'images/slide1-bg.png'},
    {bg: 'images/slide2-bg.png'}
]


class ReleaseSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            allSlides: 2
        }
    }

    changeSlide = (revert = false) => {
        let {currentSlide, allSlides} = this.state
        if (!revert) {
            if (currentSlide <= allSlides - 2) {
                this.setState(({currentSlide}) => ({
                    currentSlide: currentSlide + 1
                }))
            }
        } else {
            if (currentSlide > 0) {
                this.setState(({currentSlide}) => ({
                    currentSlide: currentSlide - 1
                }))
            }
        }
    }


    render() {
        const {currentSlide} = this.state
        return (
            <div className='release-slider'>
                <button className='release-slider__button release-slider__button_prev'
                        onClick={() => {
                            this.changeSlide(true)
                        }}/>
                <button className='release-slider__button release-slider__button_next'
                        onClick={() => {
                            this.changeSlide()
                        }}/>
                <div className="release-slider__pagination">{/*ToDo Сделать через цикл*/}
                    <p className="release-slider__pagination-item active">01</p>
                    <p className="release-slider__pagination-item">02</p>
                    <p className="release-slider__pagination-item">03</p>
                    <p className="release-slider__pagination-item">04</p>
                </div>

                {currentSlide === 0 && <ReleaseSliderMainSlide/>}
                {currentSlide === 1 && <ReleaseSliderSlide bg='images/slide2-bg.png'/>}
                {currentSlide === 2 && <ReleaseSliderSlide bg='images/slide2-bg.png'/>}

                <svg className='vinyl-record__center' viewBox="0 0 290 290">
                    <linearGradient id="grad">
                        <stop id="stop1" offset="0%" stopColor='#3434FF'/>
                        <stop id="stop2" offset="97.85%" stopColor='#FF6534'/>
                    </linearGradient>
                    <path d="M145,145 m-125,0 a125,125 0 1,1 250,0 a125,125 0 1,1 -250,0" fillOpacity='0'
                          id="tophalf"/>
                    <circle cx="145" cy="145" r="113" fill='#fff'/>
                    <text fill="url(#grad)">
                        <textPath xlinkHref="#tophalf" startOffset="2%">Стань частью Link Music -</textPath>
                        <textPath xlinkHref="#tophalf" startOffset="52%">Стань частью Link Music -</textPath>
                    </text>
                </svg>
            </div>
        )
    }

}


export default ReleaseSlider;
