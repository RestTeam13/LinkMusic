import React, {useContext, useEffect, useState} from "react";
import './style.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useLazyQuery} from "@apollo/client";
import {GET_USERPROFILE_INFO} from "../../query/getUserInfo";
import {AuthContext} from "../../context/AuthContext";


function CreateProfile() {
    const {userInfo, userInfoLoading, userInfoError} = useContext(AuthContext)

    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-create block_first-on-page">
                <svg className="vector__bg vector__bg_right-top" width="149" height="313" viewBox="0 0 149 313"
                     fill="none"
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
                    <h2 className="create__title title">СОЗДАНИЕ ПРОФИЛЯ</h2>
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
                                    <div className="create-form__title create-form__title_mob-mt50">Основная
                                        информация
                                    </div>
                                    <input type="text" className="block-form__input-row"
                                           placeholder='Имя артиста / Название группы' defaultValue={userInfo.name}/>
                                    <label htmlFor="#" className="create-form__label">Задаётся один раз, без возможности
                                        изменения</label>
                                    <p className="form__description">Краткое описание </p>
                                    <textarea type="text"
                                              className="block-form__input-row block-form__input-row_textarea"
                                              style={{marginTop: 0, outline: 'none'}}
                                              defaultValue={userInfo.description}/>
                                    <div className="block-form__input-group block-form__input-group_create-profile">
                                        <input type="text" className="block-form__input-row block-form__input-row_half"
                                               placeholder='Адрес эл. почты ' defaultValue={userInfo.emailAddress}/>
                                        <input type="text" className="block-form__input-row block-form__input-row_half"
                                               placeholder='Адрес сайта ' defaultValue={userInfo.siteAddress}/>
                                    </div>
                                </div>

                                <div className="create-form__block">
                                    <div className="create-form__title create-form__title_mt30">Ссылки на соцсети</div>
                                    {
                                        userInfo.socialLinks.map(({link})=>{
                                            return <input type="text" className="block-form__input-row" placeholder='Вставьте ссылку' value={link}/>
                                        })
                                    }
                                    <button className="create-form__add-btn">Добавить ещё</button>
                                </div>
                                <div className="create-form__block">

                                    <div className="create-form__title create-form__title_mt30">Кнопка «Заказать выступление»</div>

                                    <div className="create-form__radio-row">
                                        <div className="create-form__radio-item">
                                            <label htmlFor="radio1" className="create-form__radio-label">
                                                <input type="radio" id='radio1' name='order' value='1'
                                                       className="create-form__radio"
                                                       defaultChecked={userInfo.canBookPerformance}/>
                                                <span className="create-form__radio-label-checkbox"/>
                                                <p>Доступна</p>
                                            </label>
                                        </div>
                                        <div className="create-form__radio-item">
                                            <label htmlFor="radio2" className="create-form__radio-label">
                                                <input type="radio" id='radio2' name='order' value='2'
                                                       className="create-form__radio"
                                                       defaultChecked={!userInfo.canBookPerformance}/>
                                                <span className="create-form__radio-label-checkbox"/>
                                                <p>Недоступна</p>
                                            </label>
                                        </div>
                                        <button className="help-btn">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.2" cx="11" cy="11" r="10" stroke="#050505"/>
                                                <path opacity="0.25"
                                                      d="M11.595 12.64H10.1C10.1 12.2933 10.178 11.9683 10.334 11.665C10.49 11.353 10.6807 11.0887 10.906 10.872C11.1313 10.6467 11.3567 10.4343 11.582 10.235C11.8073 10.027 11.998 9.80167 12.154 9.559C12.31 9.31633 12.388 9.06933 12.388 8.818C12.388 8.46267 12.2623 8.18533 12.011 7.986C11.7597 7.78667 11.4217 7.687 10.997 7.687C10.5897 7.687 10.2387 7.791 9.944 7.999C9.64933 8.207 9.437 8.50167 9.307 8.883L8.02 8.155C8.254 7.54833 8.63967 7.076 9.177 6.738C9.723 6.4 10.3427 6.231 11.036 6.231C11.816 6.231 12.4833 6.452 13.038 6.894C13.6013 7.336 13.883 7.947 13.883 8.727C13.883 9.08233 13.805 9.42033 13.649 9.741C13.493 10.0617 13.3023 10.3347 13.077 10.56C12.8517 10.7853 12.6263 11.0063 12.401 11.223C12.1757 11.431 11.985 11.6563 11.829 11.899C11.673 12.1417 11.595 12.3887 11.595 12.64ZM10.854 13.706C11.1227 13.706 11.3523 13.8013 11.543 13.992C11.7337 14.1827 11.829 14.4123 11.829 14.681C11.829 14.9497 11.7337 15.1793 11.543 15.37C11.3523 15.5607 11.1227 15.656 10.854 15.656C10.5853 15.656 10.3557 15.5607 10.165 15.37C9.97433 15.1793 9.879 14.9497 9.879 14.681C9.879 14.4123 9.97 14.1827 10.152 13.992C10.3427 13.8013 10.5767 13.706 10.854 13.706Z"
                                                      fill="black"/>
                                            </svg>
                                        </button>
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

export default CreateProfile;

