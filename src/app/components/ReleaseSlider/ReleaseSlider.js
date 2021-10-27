import React from "react";
import './style.css'
import ReleaseSliderSlide from "./ReleaseSliderSlide";
import ReleaseSliderMainSlide from "./ReleaseSliderMainSlide";
import Slider from 'react-slick'

const slidesData = [
    <ReleaseSliderMainSlide/>,
    <ReleaseSliderSlide bg='images/slide1-bg.png'/>,
    <ReleaseSliderSlide bg='images/slide2-bg.png'/>,
    <ReleaseSliderSlide bg='images/slide1-bg.png'/>,
]


function PrevArrow(props) {
    const {onClick} = props
    return (
        <button className='release-slider__button release-slider__button_prev' onClick={onClick}/>
    )
}

function NextArrow(props) {
    const {onClick} = props
    return (
        <button className='release-slider__button release-slider__button_next' onClick={onClick}/>
    )
}

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <PrevArrow/>, //ToDo сделать неактивными кнопки, если двигаться некуда
    nextArrow: <NextArrow/>,
    centerMode: true,
    customPaging: i => (
            <p className="release-slider__pagination-item">0{i + 1}</p>
    )
}

class ReleaseSlider extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='release-slider block_first-on-page'>
                <Slider {...settings}>
                    {
                        slidesData.map(slide=>{
                            return slide
                        })
                    }

                </Slider>

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
