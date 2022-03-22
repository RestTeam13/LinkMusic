import React, {useRef, useState} from "react";
import './style.css'
import Slider from 'react-slick'
import {Accordion, AccordionSummary, AccordionDetails, Modal, Box} from '@material-ui/core';
import {logMissingFieldErrors} from "@apollo/client/core/ObservableQuery";

const listData = [
    {
        id: 1,
        classes: 'suggestion-slider__item suggestion-slider__item_1',
        bgColor: 'linear-gradient(90deg, #3479FF 0%, #343CFF 100%)',
        img: "images/suggestion-slider__img-1.svg",
        title: 'Создание страницы релиза',
        text: 'Мы предлагаем сервис по созданию страницы релиза',
        fullText: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.'
    },
    {
        id: 3,
        classes: 'suggestion-slider__item suggestion-slider__item_2',
        bgColor: 'linear-gradient(77.81deg, #DA1AA4 -19.28%, #FF6534 100%)',
        img: "images/suggestion-slider__img-2.png",
        title: 'Дистрибуция',
        text: 'Размещаем, сихнхронизируем и монетезируем музыкальный контент на всех цифровых витринах ' +
            '(Apple Music, iTunes, Spotify, Boom, YouTube Music, Яндекс.Музыка, и т.д.)',
        fullText: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.'

    },
    {
        id: 12,
        classes: 'suggestion-slider__item suggestion-slider__item_3',
        bgColor: 'linear-gradient(90deg, #3479FF 0%, #343CFF 100%)',
        img: "images/suggestion-slider__img-3.png",
        title: 'Продвижение',
        text: 'Находим, аккумулируем и развиваем целевую аудиторию исполнителей',
        fullText: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.'

    },
    {
        id: 123,
        classes: 'suggestion-slider__item suggestion-slider__item_4',
        bgColor: 'linear-gradient(77.81deg, #EE38BB -19.28%, #F7BA44 100%)',
        img: "images/suggestion-slider__img-4.svg",
        title: 'Организация мероприятий',
        text: 'Организуем концерты, частные и корпоративные события с участием популярынх ' +
            'российских и зарубежных исполнителей',
        fullText: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.'

    },
    {
        id: 124,
        classes: 'suggestion-slider__item suggestion-slider__item_5',
        bgColor: 'linear-gradient(77.81deg, #DA1AA4 -19.28%, #FF6534 100%)',
        img: "images/suggestion-slider__img-5.svg",
        title: 'Менеджмент',
        text: 'Оказываем полный комплекс услуг по сопровождению деятельности исполнения, ' +
            'а так же юридическую, бухгалтерскую, административно-организационную поддержку',
        fullText: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.\n' +
            'C помощью этого онлайн-генератора рыботекста можно пачками плодить как отдельные предложения и заголовки, так и целые абзацы отменнейшего рыбы-текста. А для любителей автоматизации даже реализован API фиштекста.'

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

const settingsModal = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    draggable: false,
    swipe: false,
}

let isMobile = window.matchMedia('(max-width: 767px)').matches

function Suggestion() {
    const [openModal, toggleModal] = useState(false)
    const [openTabIndex, changeTab] = useState(0)
    const [modalState, changeModalState] = useState({})
    const sliderRef = useRef()

    return (
        <div className="block block-suggestion">
            <span key='services-anchor' id='services' className="block__anchor"/>
            <div className="content">
                <div className="suggestion-row">
                    <div className="suggestion-column__text-part">
                        <h2 className="suggestion-column__title">Мы предлагаем</h2>
                        <p className="suggestion-column__text">Рыбатекст используется дизайнерами, проектировщиками и
                            фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                        <a href='#contacts' className="suggestion-column__btn tl_btn">Связаться с нами</a>
                        <div className="vector__bg vector__bg_5">
                            <svg width="392" height="561" viewBox="0 0 392 561" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M70.3064 45.5329C70.3064 45.5329 177.383 46.7252 202.57 153.914C227.206 258.749 307.746 237.835 341.338 288.65C374.93 339.465 353.915 428.647 262.396 433.246C180.754 437.351 181.539 486.845 163.577 514.34C145.615 541.834 104.717 558.762 104.717 558.762"
                                    stroke="url(#paint0_linear_599:66)" strokeWidth="3" strokeMiterlimit="10"/>
                                <path
                                    d="M105.683 458.86C105.683 458.86 183.798 393.529 253.271 390.313C322.743 387.097 320.282 336.333 308.312 318.401C283.475 281.215 194.712 291.715 175.264 227.304C160.663 178.892 180.449 105.516 96.5811 86.4733"
                                    stroke="url(#paint1_linear_599:66)" strokeWidth="3" strokeMiterlimit="10"/>
                                <path
                                    d="M110.961 405.799C110.961 405.799 217.219 395.48 194.697 349.621C168.912 297.071 135.917 304.892 152.478 228.033C158.414 200.725 140.515 99.2704 83.3549 132.48"
                                    stroke="url(#paint2_linear_599:66)" strokeWidth="3" strokeMiterlimit="10"/>
                                <defs>
                                    <linearGradient id="paint0_linear_599:66" x1="143.523" y1="30.1515" x2="248.24"
                                                    y2="528.611" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3434FF"/>
                                        <stop offset="1" stopColor="#FF6534"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_599:66" x1="142.775" y1="76.7687" x2="218.085"
                                                    y2="435.247" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3434FF"/>
                                        <stop offset="1" stopColor="#FF6534"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_599:66" x1="100.498" y1="126.077" x2="157.471"
                                                    y2="397.272" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3434FF"/>
                                        <stop offset="1" stopColor="#FF6534"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <Slider className="suggestion-column__slider" {...settings}>
                        {
                            !isMobile && listData.map(({classes, img, title, text, id, fullText, bgColor}, slideIndex) => {
                                return (
                                    <div>
                                        <div key={id} className={classes} style={{background: bgColor}}
                                             onClick={() => {
                                                 changeModalState({title, img, fullText, id, bgColor, slideIndex})
                                                 toggleModal(openModal => !openModal)
                                             }}>
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
                                    </div>
                                )
                            })
                        }
                        {
                            isMobile && listData.map(({classes, img, title, text, id, fullText, bgColor}, slideIndex) => {
                                return (
                                    <Accordion key={id} expanded={id === openTabIndex} className={classes}
                                               style={{background: bgColor}}
                                               onChange={() => {
                                                   changeTab(id)
                                               }}>
                                        <AccordionSummary className="suggestion-slider__summary"
                                                          expandIcon={<ExpandSlideIcon/>}>
                                            <p className="suggestion-slider__title">{title}</p>
                                        </AccordionSummary>
                                        <AccordionDetails className='suggestion-slider__details'>
                                            <div className="suggestion-slider__img">
                                                <img src={img} alt=""/>
                                            </div>
                                            <p className="suggestion-slider__text">{text}</p>
                                            <button className="suggestion-slider__button-more tl_btn"
                                                    onClick={() => {
                                                        changeModalState({
                                                            title,
                                                            img,
                                                            fullText,
                                                            id,
                                                            bgColor,
                                                            slideIndex
                                                        })
                                                        toggleModal(openModal => !openModal)
                                                    }}>
                                                Подробнее
                                            </button>
                                        </AccordionDetails>

                                    </Accordion>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className="vector__bg vector__bg_5 vector__bg_5_2">
                <svg width="392" height="561" viewBox="0 0 392 561" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M70.3064 45.5329C70.3064 45.5329 177.383 46.7252 202.57 153.914C227.206 258.749 307.746 237.835 341.338 288.65C374.93 339.465 353.915 428.647 262.396 433.246C180.754 437.351 181.539 486.845 163.577 514.34C145.615 541.834 104.717 558.762 104.717 558.762"
                        stroke="url(#paint4_linear_599:66)" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M105.683 458.86C105.683 458.86 183.798 393.529 253.271 390.313C322.743 387.097 320.282 336.333 308.312 318.401C283.475 281.215 194.712 291.715 175.264 227.304C160.663 178.892 180.449 105.516 96.5811 86.4733"
                        stroke="url(#paint5_linear_599:66)" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M110.961 405.799C110.961 405.799 217.219 395.48 194.697 349.621C168.912 297.071 135.917 304.892 152.478 228.033C158.414 200.725 140.515 99.2704 83.3549 132.48"
                        stroke="url(#paint6_linear_599:66)" strokeWidth="3" strokeMiterlimit="10"/>
                    <defs>
                        <linearGradient id="paint4_linear_599:66" x1="143.523" y1="30.1515" x2="248.24" y2="528.611"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_599:66" x1="142.775" y1="76.7687" x2="218.085" y2="435.247"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_599:66" x1="100.498" y1="126.077" x2="157.471" y2="397.272"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <Modal open={openModal} className='block modal' style={{background: modalState.bgColor}}>
                <div>
                    <Slider className="modal__slider" {...settingsModal} initialSlide={modalState.slideIndex}>
                        {
                            listData.map(({img, title, id, fullText, bgColor}) => {
                                return (
                                    <div style={{width: '45vw'}}  onClick={() => {
                                        changeModalState({title, img, fullText, id, bgColor})
                                    }}>
                                        <div key={id} className='modal__slide' style={{background: bgColor}}>
                                            <div className="modal__slide-img"><img src={img} alt=""/></div>
                                            <p className="modal__slide-title">{title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <div className="modal__content">
                        <div className="modal__header">
                            <h3 className="modal__title">{openModal && modalState.title}</h3>
                            <div className="modal__content-img"><img src={openModal && modalState.img} alt=""/></div>
                        </div>

                        <div className="modal__description">
                            {openModal && modalState.fullText.split('\n').map(textPart => {
                                return (<p>{textPart}</p>)
                            })}
                        </div>
                        <a href='/#contacts' className="modal__contacts-btn tl_btn" onClick={() => {
                            toggleModal(openModal => !openModal)
                        }}>Связаться с нами</a>
                        <button className="modal__close" onClick={() => {
                            toggleModal(openModal => !openModal)
                        }}>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.78125" y="3.05176e-05" width="20.1133" height="2.51416"
                                      transform="rotate(45 1.78125 3.05176e-05)" fill="white"/>
                                <rect x="16" y="1.77777" width="20.1133" height="2.51416"
                                      transform="rotate(135 16 1.77777)"
                                      fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Suggestion;