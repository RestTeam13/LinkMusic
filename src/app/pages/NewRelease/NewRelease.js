import React from "react";
import './style.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function NewRelease() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-create block_first-on-page">
                <svg className="vector__bg vector__bg_right-top" width="149" height="313" viewBox="0 0 149 313" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M178.877 25.3372C178.877 25.3372 119.293 26.0007 105.278 85.6469C91.5691 143.983 46.7518 132.345 28.0592 160.622C9.36651 188.898 21.0609 238.524 71.9876 241.084C117.418 243.368 116.981 270.909 126.976 286.209C136.971 301.509 159.729 310.928 159.729 310.928"
                        stroke="url(#paint0_linear_850:5785)" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M159.191 255.337C159.191 255.337 115.723 218.983 77.0642 217.193C38.4055 215.404 39.7754 187.156 46.4362 177.177C60.2569 156.485 109.65 162.328 120.472 126.486C128.597 99.5463 117.586 58.7156 164.256 48.1189"
                        stroke="url(#paint1_linear_850:5785)" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M156.252 225.811C156.252 225.811 97.1241 220.069 109.657 194.55C124.005 165.308 142.365 169.66 133.15 126.891C129.847 111.695 139.807 55.2399 171.614 73.72"
                        stroke="url(#paint2_linear_850:5785)" strokeWidth="3" strokeMiterlimit="10"/>
                    <defs>
                        <linearGradient id="paint0_linear_850:5785" x1="138.135" y1="16.7781" x2="79.8647" y2="294.15"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_850:5785" x1="138.55" y1="42.7187" x2="96.6436" y2="242.197"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_850:5785" x1="162.075" y1="70.1564" x2="130.372" y2="221.065"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="content">
                    <h2 className="create__title title">Новый релиз</h2>
                    <div className="create_main-row">
                        <div className="load-img">
                            <label htmlFor="img-load" className="load-img__label">
                                <svg width="37" height="31" viewBox="0 0 37 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_823:1713)">
                                        <path
                                            d="M32.8522 31.2072H4.27009C1.98186 31.2072 0.121094 29.3582 0.121094 27.0843V6.01138C0.121094 3.73754 1.98186 1.88847 4.27009 1.88847H32.8522C35.1404 1.88847 37.0012 3.73754 37.0012 6.01138V27.0843C37.0012 29.3582 35.1404 31.2072 32.8522 31.2072ZM4.27009 4.63708C3.50667 4.63708 2.88709 5.25277 2.88709 6.01138V27.0843C2.88709 27.8429 3.50667 28.4586 4.27009 28.4586H32.8522C33.6156 28.4586 34.2352 27.8429 34.2352 27.0843V6.01138C34.2352 5.25277 33.6156 4.63708 32.8522 4.63708H4.27009Z"
                                            fill="#D4AA00"/>
                                        <path
                                            d="M9.34045 14.7155C7.30647 14.7155 5.65234 13.0718 5.65234 11.0506C5.65234 9.02942 7.30647 7.38569 9.34045 7.38569C11.3744 7.38569 13.0282 9.02942 13.0282 11.0506C13.0282 13.0718 11.3744 14.7155 9.34045 14.7155ZM9.34045 10.1343C8.83128 10.1343 8.41834 10.545 8.41834 11.0506C8.41834 11.5563 8.83128 11.9669 9.34045 11.9669C9.84929 11.9669 10.2622 11.5563 10.2622 11.0506C10.2622 10.545 9.84929 10.1343 9.34045 10.1343Z"
                                            fill="#D4AA00"/>
                                        <path
                                            d="M1.53857 29.338C1.18472 29.338 0.83053 29.2041 0.561426 28.9351C0.0211914 28.3982 0.0211914 27.5275 0.561426 26.9907L8.89623 18.7083C10.1577 17.4548 12.2099 17.4548 13.4693 18.7083L15.6988 20.9237L22.5473 12.7547C23.1594 12.0253 24.0576 11.6039 25.0111 11.5985C26.0362 11.5418 26.8661 12.0052 27.4837 12.7256L36.6633 23.368C37.1609 23.9435 37.0927 24.8121 36.5137 25.3067C35.9329 25.8016 35.0608 25.7338 34.5628 25.1584L25.3798 14.5122C25.2579 14.3673 25.1087 14.3747 25.0256 14.3488C24.9466 14.3488 24.7933 14.3726 24.6717 14.5156L16.8532 23.8428C16.604 24.1394 16.241 24.3193 15.8538 24.3357C15.4591 24.3575 15.0866 24.2072 14.8135 23.9344L11.513 20.6543C11.2787 20.4215 11.0852 20.4215 10.8509 20.6543L2.51606 28.9351C2.24662 29.2041 1.89277 29.338 1.53857 29.338Z"
                                            fill="#D4AA00"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_823:1713">
                                            <rect width="37" height="31" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="load-img__label-text">Загрузите обложку</p>
                                <p className="load-img__label-subtext">Квадратное изображение 3000x3000 px </p>
                                <input type="file" id='img-load' className="load-img__input"/>
                            </label>
                        </div>
                        <div className="create__right-column">
                            <form action="#" className="create__form">
                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mob-mt50">Тип</div>
                                    <div className="create-form__radio-row">
                                        <div className="create-form__radio-item">
                                            <label htmlFor="radio1" className="create-form__radio-label">
                                                <input type="radio" id='radio1' name='type' value='1' className="create-form__radio"/>
                                                <span className="create-form__radio-label-checkbox"/>
                                                <p>Сингл</p>
                                            </label>
                                        </div>
                                        <div className="create-form__radio-item">
                                            <label htmlFor="radio2" className="create-form__radio-label">
                                                <input type="radio" id='radio2' name='type' value='2' className="create-form__radio"/>
                                                <span className="create-form__radio-label-checkbox"/>
                                                <p>Альбом</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="create-form__block create-form__block_short">
                                    <div className="create-form__title create-form__title_mt30">Дата релиза</div>
                                    <input type="text" className="block-form__input-row" placeholder='Выберите дату'/>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.6">
                                            <path d="M12.0625 7.1875C12.4077 7.1875 12.6875 6.90768 12.6875 6.5625C12.6875 6.21732 12.4077 5.9375 12.0625 5.9375C11.7173 5.9375 11.4375 6.21732 11.4375 6.5625C11.4375 6.90768 11.7173 7.1875 12.0625 7.1875Z" fill="#676767"/>
                                            <path d="M13.5 1.25H12.6875V0.625C12.6875 0.279813 12.4077 0 12.0625 0C11.7173 0 11.4375 0.279813 11.4375 0.625V1.25H8.59375V0.625C8.59375 0.279813 8.31394 0 7.96875 0C7.62356 0 7.34375 0.279813 7.34375 0.625V1.25H4.53125V0.625C4.53125 0.279813 4.25144 0 3.90625 0C3.56106 0 3.28125 0.279813 3.28125 0.625V1.25H2.5C1.1215 1.25 0 2.3715 0 3.75V13.5C0 14.8785 1.1215 16 2.5 16H7.28125C7.62644 16 7.90625 15.7202 7.90625 15.375C7.90625 15.0298 7.62644 14.75 7.28125 14.75H2.5C1.81075 14.75 1.25 14.1892 1.25 13.5V3.75C1.25 3.06075 1.81075 2.5 2.5 2.5H3.28125V3.125C3.28125 3.47019 3.56106 3.75 3.90625 3.75C4.25144 3.75 4.53125 3.47019 4.53125 3.125V2.5H7.34375V3.125C7.34375 3.47019 7.62356 3.75 7.96875 3.75C8.31394 3.75 8.59375 3.47019 8.59375 3.125V2.5H11.4375V3.125C11.4375 3.47019 11.7173 3.75 12.0625 3.75C12.4077 3.75 12.6875 3.47019 12.6875 3.125V2.5H13.5C14.1892 2.5 14.75 3.06075 14.75 3.75V7.3125C14.75 7.65769 15.0298 7.9375 15.375 7.9375C15.7202 7.9375 16 7.65769 16 7.3125V3.75C16 2.3715 14.8785 1.25 13.5 1.25Z" fill="#676767"/>
                                            <path d="M12.2188 8.4375C10.1337 8.4375 8.4375 10.1337 8.4375 12.2188C8.4375 14.3038 10.1337 16 12.2188 16C14.3038 16 16 14.3038 16 12.2188C16 10.1337 14.3038 8.4375 12.2188 8.4375ZM12.2188 14.75C10.823 14.75 9.6875 13.6145 9.6875 12.2188C9.6875 10.823 10.823 9.6875 12.2188 9.6875C13.6145 9.6875 14.75 10.823 14.75 12.2188C14.75 13.6145 13.6145 14.75 12.2188 14.75Z" fill="#676767"/>
                                            <path d="M13.125 11.5938H12.8438V10.9375C12.8438 10.5923 12.5639 10.3125 12.2188 10.3125C11.8736 10.3125 11.5938 10.5923 11.5938 10.9375V12.2188C11.5938 12.5639 11.8736 12.8438 12.2188 12.8438H13.125C13.4702 12.8438 13.75 12.5639 13.75 12.2188C13.75 11.8736 13.4702 11.5938 13.125 11.5938Z" fill="#676767"/>
                                            <path d="M9.34375 7.1875C9.68893 7.1875 9.96875 6.90768 9.96875 6.5625C9.96875 6.21732 9.68893 5.9375 9.34375 5.9375C8.99857 5.9375 8.71875 6.21732 8.71875 6.5625C8.71875 6.90768 8.99857 7.1875 9.34375 7.1875Z" fill="#676767"/>
                                            <path d="M6.625 9.90625C6.97018 9.90625 7.25 9.62643 7.25 9.28125C7.25 8.93607 6.97018 8.65625 6.625 8.65625C6.27982 8.65625 6 8.93607 6 9.28125C6 9.62643 6.27982 9.90625 6.625 9.90625Z" fill="#676767"/>
                                            <path d="M3.90625 7.1875C4.25143 7.1875 4.53125 6.90768 4.53125 6.5625C4.53125 6.21732 4.25143 5.9375 3.90625 5.9375C3.56107 5.9375 3.28125 6.21732 3.28125 6.5625C3.28125 6.90768 3.56107 7.1875 3.90625 7.1875Z" fill="#676767"/>
                                            <path d="M3.90625 9.90625C4.25143 9.90625 4.53125 9.62643 4.53125 9.28125C4.53125 8.93607 4.25143 8.65625 3.90625 8.65625C3.56107 8.65625 3.28125 8.93607 3.28125 9.28125C3.28125 9.62643 3.56107 9.90625 3.90625 9.90625Z" fill="#676767"/>
                                            <path d="M3.90625 12.625C4.25143 12.625 4.53125 12.3452 4.53125 12C4.53125 11.6548 4.25143 11.375 3.90625 11.375C3.56107 11.375 3.28125 11.6548 3.28125 12C3.28125 12.3452 3.56107 12.625 3.90625 12.625Z" fill="#676767"/>
                                            <path d="M6.625 12.625C6.97018 12.625 7.25 12.3452 7.25 12C7.25 11.6548 6.97018 11.375 6.625 11.375C6.27982 11.375 6 11.6548 6 12C6 12.3452 6.27982 12.625 6.625 12.625Z" fill="#676767"/>
                                            <path d="M6.625 7.1875C6.97018 7.1875 7.25 6.90768 7.25 6.5625C7.25 6.21732 6.97018 5.9375 6.625 5.9375C6.27982 5.9375 6 6.21732 6 6.5625C6 6.90768 6.27982 7.1875 6.625 7.1875Z" fill="#676767"/>
                                        </g>
                                    </svg>

                                </div>

                                <div className="create-form__block" style={{position: 'relative'}}>
                                    <div className="create-form__title create-form__title_mt30">Основная информация</div>
                                    <input type="text" className="block-form__input-row" placeholder='Имя артиста / Название группы'/>
                                    <input type="text" className="block-form__input-row block-form__input-row_with-help" placeholder='Имя артиста для этого релиза'/>
                                    <button className="help-btn help-btn_position-left">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.2" cx="11" cy="11" r="10" stroke="#050505"/>
                                            <path opacity="0.25" d="M11.595 12.64H10.1C10.1 12.2933 10.178 11.9683 10.334 11.665C10.49 11.353 10.6807 11.0887 10.906 10.872C11.1313 10.6467 11.3567 10.4343 11.582 10.235C11.8073 10.027 11.998 9.80167 12.154 9.559C12.31 9.31633 12.388 9.06933 12.388 8.818C12.388 8.46267 12.2623 8.18533 12.011 7.986C11.7597 7.78667 11.4217 7.687 10.997 7.687C10.5897 7.687 10.2387 7.791 9.944 7.999C9.64933 8.207 9.437 8.50167 9.307 8.883L8.02 8.155C8.254 7.54833 8.63967 7.076 9.177 6.738C9.723 6.4 10.3427 6.231 11.036 6.231C11.816 6.231 12.4833 6.452 13.038 6.894C13.6013 7.336 13.883 7.947 13.883 8.727C13.883 9.08233 13.805 9.42033 13.649 9.741C13.493 10.0617 13.3023 10.3347 13.077 10.56C12.8517 10.7853 12.6263 11.0063 12.401 11.223C12.1757 11.431 11.985 11.6563 11.829 11.899C11.673 12.1417 11.595 12.3887 11.595 12.64ZM10.854 13.706C11.1227 13.706 11.3523 13.8013 11.543 13.992C11.7337 14.1827 11.829 14.4123 11.829 14.681C11.829 14.9497 11.7337 15.1793 11.543 15.37C11.3523 15.5607 11.1227 15.656 10.854 15.656C10.5853 15.656 10.3557 15.5607 10.165 15.37C9.97433 15.1793 9.879 14.9497 9.879 14.681C9.879 14.4123 9.97 14.1827 10.152 13.992C10.3427 13.8013 10.5767 13.706 10.854 13.706Z" fill="black"/>
                                        </svg>
                                    </button>
                                    <input type="text" className="block-form__input-row" placeholder='Название релиза'/>
                                </div>

                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mt30">Этот релиз на цифровых витринах</div>
                                    <input type="text" className="block-form__input-row" placeholder='Вставьте ссылку'/>
                                    <input type="text" className="block-form__input-row" placeholder='Вставьте ссылку'/>
                                    <input type="text" className="block-form__input-row" placeholder='Вставьте ссылку'/>
                                    <button className="create-form__add-btn">Добавить ещё</button>
                                </div>

                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mt30">Видеоклип</div>
                                    <input type="text" className="block-form__input-row" placeholder='Ссылка на видео в YouTube / Vimeo'/>
                                </div>

                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mt30">Адрес страницы релиза</div>
                                    <div className="create-form__radio-row">
                                        <div className="create-form__radio-item">
                                            <label htmlFor="radio3" className="create-form__radio-label">
                                                <input type="radio" id='radio3' name='address' value='1' className="create-form__radio"/>
                                                <span className="create-form__radio-label-checkbox"/>
                                                <p>Автоматически</p>
                                            </label>
                                        </div>
                                        <div className="create-form__radio-item">
                                            <label htmlFor="radio4" className="create-form__radio-label">
                                                <input type="radio" id='radio4' name='address' value='2' className="create-form__radio"/>
                                                <span className="create-form__radio-label-checkbox"/>
                                                <p>Вручную</p>
                                            </label>
                                        </div>
                                        <button className="help-btn">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.2" cx="11" cy="11" r="10" stroke="#050505"/>
                                                <path opacity="0.25" d="M11.595 12.64H10.1C10.1 12.2933 10.178 11.9683 10.334 11.665C10.49 11.353 10.6807 11.0887 10.906 10.872C11.1313 10.6467 11.3567 10.4343 11.582 10.235C11.8073 10.027 11.998 9.80167 12.154 9.559C12.31 9.31633 12.388 9.06933 12.388 8.818C12.388 8.46267 12.2623 8.18533 12.011 7.986C11.7597 7.78667 11.4217 7.687 10.997 7.687C10.5897 7.687 10.2387 7.791 9.944 7.999C9.64933 8.207 9.437 8.50167 9.307 8.883L8.02 8.155C8.254 7.54833 8.63967 7.076 9.177 6.738C9.723 6.4 10.3427 6.231 11.036 6.231C11.816 6.231 12.4833 6.452 13.038 6.894C13.6013 7.336 13.883 7.947 13.883 8.727C13.883 9.08233 13.805 9.42033 13.649 9.741C13.493 10.0617 13.3023 10.3347 13.077 10.56C12.8517 10.7853 12.6263 11.0063 12.401 11.223C12.1757 11.431 11.985 11.6563 11.829 11.899C11.673 12.1417 11.595 12.3887 11.595 12.64ZM10.854 13.706C11.1227 13.706 11.3523 13.8013 11.543 13.992C11.7337 14.1827 11.829 14.4123 11.829 14.681C11.829 14.9497 11.7337 15.1793 11.543 15.37C11.3523 15.5607 11.1227 15.656 10.854 15.656C10.5853 15.656 10.3557 15.5607 10.165 15.37C9.97433 15.1793 9.879 14.9497 9.879 14.681C9.879 14.4123 9.97 14.1827 10.152 13.992C10.3427 13.8013 10.5767 13.706 10.854 13.706Z" fill="black"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <input type="text" className="block-form__input-row" placeholder='linkmusic.ru/1231Nsdf9 '/>
                                </div>
                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mt30">Пиксель Вконтакте</div>
                                    <input type="text" className="block-form__input-row" placeholder='Вставить код пикселя Вконтакте'/>
                                </div>
                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mt30">Пиксель Facebook</div>
                                    <input type="text" className="block-form__input-row" placeholder='Вставить код пикселя Facebook'/>
                                </div>
                                <div className="create-form__btn-row">
                                    <button className="create-form__btn tl_btn">Создать</button>
                                    <button className="create-form__btn tl_btn">Отменить</button>
                                    <button className="create-form__btn tl_btn">Удалить</button>
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

export default NewRelease;