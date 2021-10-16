import React from "react";
import './styles.css'


function BlockForm() {
    return (
        <div className="block block-form">
            <div className="content">
                <div className="block-form__row">
                    <div className="block-form__left-column">
                        <div className="block-form__left-img">
                            <img src="images/block-form__left-column-img.svg" alt=""/>
                        </div>
                        <p className="block-form__left-title">Опишите свои потребности - и мы свяжемся с вами</p>
                        <p className="block-form__left-text">Мы обрабатываем все запросы и можем найти индивидуальное решение для каждого клиента</p>

                    </div>
                    <div className="block-form__column">
                        <form action="#" className="block-form__form">
                            <div className="block-form__title">Напишите нам</div>
                            <div className="block-form__input-row">
                                <label htmlFor="" className="block-form__label">Тема сообщения</label>
                                <input type="text" className="block-form__input"/>
                                 <div className="block-form__input-arrow">
                                     <img src="images/block-form_list-arrow.svg" alt=""/>
                                 </div>
                            </div>
                            <div className="block-form__input-row">
                                <label htmlFor="" className="block-form__label">Как к вам обращаться?</label>
                                <input type="text" className="block-form__input"/>
                            </div>
                            <div className="block-form__input-group">
                                <div className="block-form__input-row">
                                    <label htmlFor="" className="block-form__label">Телефон</label>
                                    <input type="tel" className="block-form__input"/>
                                </div>
                                <div className="block-form__input-row">
                                    <label htmlFor="" className="block-form__label">E-mail</label>
                                    <input type="mail" className="block-form__input"/>
                                </div>
                            </div>
                            <div className="block-form__input-row">
                                <label htmlFor="" className="block-form__label">Сообщение</label>
                                <input type="text" className="block-form__input block-form__input_text"/>
                            </div>
                            <div className="block-form__input-row">
                                <label htmlFor="" className="block-form__label">Приложить файл</label>
                                <input type="file" className="block-form__input block-form__input_file"/>
                            </div>
                            <div className="block-form__input-row ">
                                <label htmlFor="" className="block-form__label">Введите указанное слово</label>
                                <div className="block-form__input-row-check">
                                    <input type="text" className="block-form__input block-form__input_check"/>
                                    <div className="block-form__input-check-img">
                                        <img src="images/block-form_img-check.png" alt=""/>
                                    </div>
                                    <div className="block-form__refresh">

                                    </div>
                                </div>
                            </div>
                            <div className="block-form__btn-row">
                                <button className="block-form__btn tl_btn">Отправить</button>
                                <p className="block-form__politic">
                                    Отправляя сообщение вы соглашаетесь
                                    с <a href="#">Политикой конфиденциальности</a>
                                </p>
                            </div>


                        </form>
                    </div>
                </div>
                <div className="block-form__sponsors">
                    <div className="block-form__sponsors-img-wrapper">
                        <div className="block-form__sponsors-img block-form__sponsors-img_1">

                        </div>
                    </div>

                    <div className="block-form__sponsors-img-wrapper">
                        <div className="block-form__sponsors-img block-form__sponsors-img_2">

                        </div>
                    </div>

                    <div className="block-form__sponsors-img-wrapper">
                        <div className="block-form__sponsors-img block-form__sponsors-img_3">

                        </div>
                    </div>

                    <div className="block-form__sponsors-img-wrapper">
                        <div className="block-form__sponsors-img block-form__sponsors-img_4">

                        </div>
                    </div>

                    <div className="block-form__sponsors-img-wrapper">
                        <div className="block-form__sponsors-img block-form__sponsors-img_5">

                        </div>
                    </div>

                    <div className="block-form__sponsors-img-wrapper">
                        <div className="block-form__sponsors-img block-form__sponsors-img_6">

                        </div>
                    </div>
                </div>
            </div>
            <div className="vector__bg vector__bg_3">
                <img src="images/vector-bg_form-left.svg" alt=""/>
            </div>
            <div className="vector__bg vector__bg_4">
                <img src="images/vector-bg_form-left.svg" alt=""/>
            </div>
        </div>
    );
}

export default BlockForm;