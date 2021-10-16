import React from "react";
import './styles.css'


function BlockSuggestion() {
    return (
        <div className="block block-suggestion">
            <div className="content">
                <div className="suggestion-row">
                    <div className="suggestion-column__text-part">
                        <h2 className="suggestion-column__title">Мы предлагаем</h2>
                        <p className="suggestion-column__text">Рыбатекст используется дизайнерами, проектировщиками и
                            фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                        <button className="suggestion-column__btn tl_btn">Связаться с нами</button>
                    </div>
                    <div className="suggestion-column__slider">

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

                    </div>

                </div>
                <div className="suggestion-slider__btns">
                    <div className="suggestion-slider__btn-wrapper">
                        <button className="suggestion-slider__btn"></button>
                        <div className="suggestion-slider__arrow"/>
                    </div>
                    <div className="suggestion-slider__btn-wrapper">
                        <button className="suggestion-slider__btn"></button>
                        <div className="suggestion-slider__arrow suggestion-slider__arrow_rotate"/>                    </div>
                </div>
            </div>
            <div className="vector__bg vector__bg_5">
                <img src="images/vector-bg_suggestion.svg" alt=""/>
            </div>
        </div>
    );
}

export default BlockSuggestion;