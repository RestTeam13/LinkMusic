import React from "react";
import './style.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Statistics() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-create block_first-on-page">
                <div className="content">
                    <h2 className="create__title"></h2>
                    <div className="create_main-row">
                        <div className="create__left-column"></div>
                        <div className="create__right-column">
                            <form action="#" className="create__form">

                                <div className="create-form__block">
                                    <div className="create-form__title">Основная информация</div>
                                    <input type="text" className="block-form__input-row"/>
                                    <label htmlFor="#" className="create-form__label"></label>
                                    <input type="text" className="block-form__input-row"/>
                                    <div className="block-form__input-group">
                                        <input type="text" className="block-form__input"/>
                                        <input type="text" className="block-form__input"/>
                                    </div>
                                </div>

                                <div className="create-form__block">
                                    <div className="create-form__title">Ссылки на соц. сети</div>
                                    <input type="text" className="block-form__input-row"/>
                                    <input type="text" className="block-form__input-row"/>
                                    <input type="text" className="block-form__input-row"/>
                                    <button className="create-form__add-btn">Добавить ещё</button>

                                </div>
                                <div className="create-form__block">

                                    <div className="create-form__title">Кнопка "Заказать выступление"</div>

                                    <div className="create-form__radio-row">
                                        <div className="create-form__radio-item">
                                            <input type="radio" className="create-form__radio"/>
                                            <label htmlFor="#" className="create-form__radio-label">Доступна</label>
                                        </div>
                                        <div className="create-form__radio-item">
                                            <input type="radio" className="create-form__radio"/>
                                            <label htmlFor="#" className="create-form__radio-label">Недоступна</label>
                                        </div>
                                    </div>

                                    <div className="create-form__btn-row">
                                        <button className="create-form__btn tl_btn">Создать</button>
                                        <button className="create-form__btn tl_btn">Отменить</button>
                                        <button className="create-form__btn tl_btn">Удалить</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>


                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Statistics;

