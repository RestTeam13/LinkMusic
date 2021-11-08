import React from "react";
import './style.css'
import Slider from 'react-slick'
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';


const listData = [
    {
        classes: 'suggestion-slider__item suggestion-slider__item_1',
        img: "images/suggestion-slider__img-1.svg",
        title: 'Создание страницы релиза',
        text: 'Мы предлагаем сервис по созданию страницы релиза'
    },
    {
        classes: 'suggestion-slider__item suggestion-slider__item_2',
        img: "images/suggestion-slider__img-2.png",
        title: 'Дистрибуция',
        text: 'Размещаем, сихнхронизируем и монетезируем музыкальный контент на всех цифровых витринах ' +
            '(Apple Music, iTunes, Spotify, Boom, YouTube Music, Яндекс.Музыка, и т.д.)'
    },
    {
        classes: 'suggestion-slider__item suggestion-slider__item_3',
        img: "images/suggestion-slider__img-3.png",
        title: 'Продвижение',
        text: 'Находим, аккумулируем и развиваем целевую аудиторию исполнителей'
    },
    {
        classes: 'suggestion-slider__item suggestion-slider__item_4',
        img: "images/suggestion-slider__img-4.svg",
        title: 'Организация мероприятий',
        text: 'Организуем концерты, частные и корпоративные события с участием популярынх ' +
            'российских и зарубежных исполнителей'
    },
    {
        classes: 'suggestion-slider__item suggestion-slider__item_5',
        img: "images/suggestion-slider__img-5.svg",
        title: 'Менеджмент',
        text: 'Оказываем полный комплекс услуг по сопровождению деятельности исполнения, ' +
            'а так же юридическую, бухгалтерскую, административно-организационную поддержку'
    },
]

function PrevArrow(props) { // ToDo сделать 1 слайдер (?)
    const {onClick} = props
    return (
        <button className="suggestion-column__slider-button suggestion-column__slider-button_prev" onClick={onClick}>
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9766 19.0671L3.47656 10.5671L11.9766 2.06714" stroke="#D4AA00" strokeWidth="4"/>
            </svg>
        </button>
    )
}

function NextArrow(props) {
    const {onClick} = props
    return (
        <button className="suggestion-column__slider-button suggestion-column__slider-button_next" onClick={onClick}>
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9766 19.0671L3.47656 10.5671L11.9766 2.06714" stroke="#D4AA00" strokeWidth="4"/>
            </svg>
        </button>
    )
}

function ExpandSlideIcon() {
    return (
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8L15 1" stroke="white" strokeWidth="1.8"/>
        </svg>
    )
}

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    responsive: [
        {
            breakpoint: 768,
            settings: "unslick"
        },
    ]
}

let isMobile = window.matchMedia('(max-width: 767px)').matches

function Suggestion() {
    return (
        <div id='services' className="block block-suggestion">
            <div className="content">
                <div className="suggestion-row">
                    <div className="suggestion-column__text-part">
                        <h2 className="suggestion-column__title">Мы предлагаем</h2>
                        <p className="suggestion-column__text">Рыбатекст используется дизайнерами, проектировщиками и
                            фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                        <button className="suggestion-column__btn tl_btn">Связаться с нами</button>
                        <div className="vector__bg vector__bg_5">
                            <svg width="594" height="638" viewBox="0 0 594 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M365.086 551.221C383.049 523.726 382.263 474.232 463.905 470.127C555.424 465.528 576.44 376.346 542.848 325.531C509.255 274.716 428.715 295.63 404.079 190.795C378.893 83.606 271.816 82.4137 271.816 82.4137C220.009 82.4137 241.009 102.381 202.009 114.881C163.009 127.381 145.513 128.381 136.509 120.881C127.506 113.381 90.0082 56.8808 93.0082 92.3808C96.0082 127.881 94.0112 112.881 96.0082 145.381C98.0052 177.881 55.0124 228.381 52.0088 289.381C49.0052 350.381 56.8119 379.881 66.5094 396.381C76.207 412.881 97.5191 424.635 136.509 447.381C175.499 470.127 181.009 509.881 162.509 539.381C144.009 568.881 116.019 586.881 144.009 610.381C171.999 633.881 245.499 604.881 257.009 604.881C268.519 604.881 285.453 601.905 306.226 595.643C326.999 589.381 347.124 578.715 365.086 551.221Z" stroke="url(#paint0_linear_1347:6)" strokeWidth="3" strokeMiterlimit="10"/>
                                <path d="M307.191 495.741C316.293 471.601 385.307 430.41 454.779 427.194C524.252 423.978 521.79 373.214 509.82 355.281C484.983 318.096 396.22 328.596 376.773 264.185C362.172 215.773 366.683 125.327 298.09 123.354C229.497 121.381 258.496 127.881 225.497 151.381C192.499 174.881 171.497 169.881 158.997 161.881C146.496 153.881 143.997 146.881 129.997 157.381C115.997 167.881 119.497 182.381 115.997 202.881C112.497 223.381 93.9965 299.48 97.9969 327.381C101.997 355.281 113.995 374.881 138.497 395.381C162.998 415.881 211.996 410.381 229.497 443.381C246.998 476.381 195.496 519.881 215.997 539.381C236.498 558.881 267.996 561.381 290.497 547.881C312.998 534.381 298.09 519.881 307.191 495.741Z" stroke="url(#paint1_linear_1347:6)" strokeWidth="3" strokeMiterlimit="10"/>
                                <path d="M312.471 442.679C330.445 441.478 418.73 432.361 396.208 386.502C370.422 333.952 337.428 341.772 353.989 264.913C359.925 237.605 342.026 136.151 284.865 169.361C284.865 169.361 272.498 187.881 252.499 198.881C232.499 209.881 214.999 221.381 194.5 221.381C174.001 221.381 165.498 186.381 147.498 198.881C129.498 211.381 123.453 273.381 129.498 291.881C135.544 310.381 126.498 353.381 160.499 375.881C194.5 398.381 221.499 417.381 236.999 417.881C252.499 418.381 250.133 413.381 267.499 390.381C284.865 367.381 294.498 443.881 312.471 442.679Z" stroke="url(#paint2_linear_1347:6)" strokeWidth="3" strokeMiterlimit="10"/>
                                <defs>
                                    <linearGradient id="paint0_linear_1347:6" x1="240.403" y1="50.5043" x2="353.095" y2="586.925" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3434FF"/>
                                        <stop offset="1" stopColor="#FF6534"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1347:6" x1="259.379" y1="123.835" x2="346.672" y2="539.355" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3434FF"/>
                                        <stop offset="1" stopColor="#FF6534"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1347:6" x1="227.944" y1="178.516" x2="285.147" y2="450.806" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3434FF"/>
                                        <stop offset="1" stopColor="#FF6534"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>
                    <Slider className="suggestion-column__slider" {...settings}>
                        {
                            !isMobile && listData.map(({classes, img, title, text}, i) => {
                                return (
                                    <div className={classes} onClick={()=>{console.log(i)}}>
                                        <div className="suggestion-slider__img">
                                            <img src={img} alt=""/>
                                        </div>
                                        <div className="suggestion-slider__summary">
                                            <p className="suggestion-slider__title">{title}</p>
                                        </div>
                                        <p className="suggestion-slider__text">{text}</p>
                                        <button className="suggestion-slider__button-more tl_btn">Подробнее</button>
                                        <span className="suggestion-slider__effect"/>
                                    </div>
                                )
                            })
                        }
                        {
                            isMobile && listData.map(({classes, img, title, text}) => {
                                return (
                                    <Accordion className={classes}>
                                        <AccordionSummary className="suggestion-slider__summary"
                                                          expandIcon={<ExpandSlideIcon/>}>
                                            <p className="suggestion-slider__title">{title}</p>
                                        </AccordionSummary>
                                        <AccordionDetails className='suggestion-slider__details'>
                                            <div className="suggestion-slider__img">
                                                <img src={img} alt=""/>
                                            </div>
                                            <p className="suggestion-slider__text">{text}</p>
                                            <button className="suggestion-slider__button-more tl_btn">Подробнее</button>
                                        </AccordionDetails>

                                    </Accordion>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;