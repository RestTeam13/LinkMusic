import React from "react";
import '../styles.css'
import Slider from 'react-slick'


function PrevArrow(props) {
    const {onClick} = props
    return(
        <button className="suggestion-column__slider-button suggestion-column__slider-button_prev" onClick={onClick}>
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9766 19.0671L3.47656 10.5671L11.9766 2.06714" stroke="#D4AA00" stroke-width="4"/>
            </svg>
        </button>
    )
}

function NextArrow(props) {
    const {onClick} = props
    return(
        <button className="suggestion-column__slider-button suggestion-column__slider-button_next" onClick={onClick}>
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9766 19.0671L3.47656 10.5671L11.9766 2.06714" stroke="#D4AA00" stroke-width="4"/>
            </svg>
        </button>
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
    nextArrow: <NextArrow/>
}

function BlockSuggestion() {
    return (
        <div id='services' className="block block-suggestion">
            <div className="content">
                <div className="suggestion-row">
                    <div className="suggestion-column__text-part">
                        <h2 className="suggestion-column__title">Мы предлагаем</h2>
                        <p className="suggestion-column__text">Рыбатекст используется дизайнерами, проектировщиками и
                            фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                        <button className="suggestion-column__btn tl_btn">Связаться с нами</button>
                    </div>
                    <Slider className="suggestion-column__slider" {...settings}>
                        <div className="suggestion-slider__item suggestion-slider__item_1">
                            <div className="suggestion-slider__img">
                                <img src="images/suggestion-slider__img-1.svg" alt=""/>
                            </div>

                            <div className="suggestion-slider__text-part">
                                <div className="suggestion-slider__title">Создание страницы релиза</div>
                                <div className="suggestion-slider__text">Мы предлагаем сервис по созданию страницы релиза</div>
                            </div>
                        </div>

                        <div className="suggestion-slider__item suggestion-slider__item_2">
                            <div className="suggestion-slider__img">
                                <img src="images/suggestion-slider__img-2.png" alt=""/>
                            </div>
                            <div className="suggestion-slider__text-part">
                                <div className="suggestion-slider__title">Дистрибуция</div>
                                <div className="suggestion-slider__text">Размещаем, сихнхронизируем и монетезируем
                                    музыкальный контент на всех цифровых витринах (Apple Music, iTunes, Spotify, Boom,
                                    YouTube Music, Яндекс.Музыка, и т.д.)
                                </div>
                            </div>
                        </div>

                        <div className="suggestion-slider__item suggestion-slider__item_3">
                            <div className="suggestion-slider__img">
                                <img src="images/suggestion-slider__img-3.png" alt=""/>
                            </div>
                            <div className="suggestion-slider__text-part">
                                <div className="suggestion-slider__title">Продвижение</div>
                                <div className="suggestion-slider__text">Находим, аккумулируем и развиваем целевую
                                    аудиторию исполнителей
                                </div>
                            </div>
                        </div>

                        <div className="suggestion-slider__item suggestion-slider__item_4">
                            <div className="suggestion-slider__img">
                                <img src="images/suggestion-slider__img-4.svg" alt=""/>
                            </div>
                            <div className="suggestion-slider__text-part">
                                <div className="suggestion-slider__title">Организация мероприятий</div>
                                <div className="suggestion-slider__text">Организуем концерты, частные и корпоративные
                                    события с участием популярынх российских и зарубежных исполнителей
                                </div>
                            </div>
                        </div>

                        <div className="suggestion-slider__item suggestion-slider__item_5">
                            <div className="suggestion-slider__img">
                                <img src="images/suggestion-slider__img-5.svg" alt=""/>
                            </div>
                            <div className="suggestion-slider__text-part">
                                <div className="suggestion-slider__title">Менеджмент</div>
                                <div className="suggestion-slider__text">Оказываем полный комплекс услуг по
                                    сопровождению
                                    деятельности исполнения, а так же юридическую, бухгалтерскую,
                                    административно-организационную поддержку
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="vector__bg vector__bg_5">
                <svg width="395" height="563" viewBox="0 0 395 563" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.3064 47.5329C71.3064 47.5329 178.383 48.7252 203.57 155.914C228.206 260.749 308.746 239.835 342.338 290.65C375.93 341.465 354.915 430.647 263.396 435.246C181.754 439.351 182.539 488.845 164.577 516.34C146.615 543.834 105.717 560.762 105.717 560.762" stroke="url(#paint0_linear_599:66)" stroke-width="3" stroke-miterlimit="10"/>
                    <path d="M106.683 460.86C106.683 460.86 184.798 395.529 254.271 392.313C323.743 389.097 321.282 338.333 309.312 320.401C284.475 283.215 195.712 293.715 176.264 229.304C161.663 180.892 181.449 107.516 97.5811 88.4733" stroke="url(#paint1_linear_599:66)" stroke-width="3" stroke-miterlimit="10"/>
                    <path d="M111.961 407.799C111.961 407.799 218.219 397.48 195.697 351.621C169.912 299.071 136.917 306.892 153.478 230.033C159.414 202.725 141.515 101.27 84.3549 134.48" stroke="url(#paint2_linear_599:66)" stroke-width="3" stroke-miterlimit="10"/>
                    <defs>
                        <linearGradient id="paint0_linear_599:66" x1="144.523" y1="32.1515" x2="249.24" y2="530.611" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3434FF"/>
                            <stop offset="1" stop-color="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_599:66" x1="143.775" y1="78.7687" x2="219.085" y2="437.247" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3434FF"/>
                            <stop offset="1" stop-color="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_599:66" x1="101.498" y1="128.077" x2="158.471" y2="399.272" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3434FF"/>
                            <stop offset="1" stop-color="#FF6534"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>
        </div>
    );
}

export default BlockSuggestion;