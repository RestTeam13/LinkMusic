import React from "react";
import './style.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CountUp from "react-countup";


function Statistics() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-statistics block_first-on-page">
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
                    <h2 className="statistics__title">Сводка по релизу</h2>
                    <div className="statistics__sorting">
                        <div className="block-statistics__sorting-item">Всё время</div>
                        <div className="block-statistics__sorting-item">24 часа</div>
                        <div className="block-statistics__sorting-item">7 дней</div>
                        <div className="block-statistics__sorting-item">14 дней</div>
                        <div className="block-statistics__sorting-item">30 дней</div>
                    </div>
                    <div className="statistics-tablets">

                        <div className="statistics-tablet">
                            <div className="statistics-tablet__title">
                                <p>Социальные сети и поисковики</p>
                            </div>
                            <div className="statistics-tablet__main-content">
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__img">
                                        <img src="images/statistics-tablet__img-1(vk).svg" alt=""/>
                                    </div>
                                    <div className="statistics-tablet__name">Вконтакте</div>
                                    <div className="statistics-tablet__number">3 1313</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__img">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_887:4147)">
                                                <path d="M1.74966 1.90517C-0.450671 4.19067 -0.000337188 6.6185 -0.000337188 13.9942C-0.000337188 20.1192 -1.069 26.2593 4.524 27.7048C6.2705 28.154 21.7452 28.154 23.4893 27.7025C25.818 27.1017 27.7127 25.2128 27.9717 21.9193C28.0078 21.4597 28.0078 6.53683 27.9705 6.06783C27.6952 2.55967 25.5357 0.537833 22.6902 0.128333C22.038 0.0338328 21.9073 0.00583279 18.5613 -5.47051e-07C6.69283 0.00583279 4.09116 -0.522667 1.74966 1.90517V1.90517Z" fill="url(#paint0_linear_887:4147)"/>
                                                <path d="M14.0002 6.00771C10.7234 6.00771 7.61177 5.71645 6.42325 8.76431C5.93232 10.0231 6.00361 11.658 6.00361 13.9989C6.00361 16.053 5.93773 17.9836 6.42325 19.2325C7.60907 22.2822 10.746 21.99 13.9984 21.99C17.1362 21.99 20.3715 22.3165 21.5744 19.2325C22.0663 17.9611 21.9941 16.3506 21.9941 13.9989C21.9941 10.8771 22.1664 8.8617 20.6512 7.34859C19.1171 5.81564 17.0423 6.00771 13.9966 6.00771H14.0002ZM13.2837 7.44778C20.1188 7.43696 20.9888 6.6777 20.5086 17.2253C20.3381 20.9557 17.4954 20.5464 14.0011 20.5464C7.62982 20.5464 7.44662 20.3642 7.44662 13.9953C7.44662 7.55238 7.952 7.45139 13.2837 7.44598V7.44778ZM18.2688 8.77423C17.739 8.77423 17.3095 9.20346 17.3095 9.73277C17.3095 10.2621 17.739 10.6913 18.2688 10.6913C18.7985 10.6913 19.2281 10.2621 19.2281 9.73277C19.2281 9.20346 18.7985 8.77423 18.2688 8.77423V8.77423ZM14.0002 9.89508C11.7323 9.89508 9.89406 11.7328 9.89406 13.9989C9.89406 16.2649 11.7323 18.1018 14.0002 18.1018C16.268 18.1018 18.1054 16.2649 18.1054 13.9989C18.1054 11.7328 16.268 9.89508 14.0002 9.89508V9.89508ZM14.0002 11.3352C17.5243 11.3352 17.5288 16.6626 14.0002 16.6626C10.477 16.6626 10.4716 11.3352 14.0002 11.3352Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_887:4147" x1="1.80335" y1="26.2116" x2="27.8264" y2="3.68897" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFDD55"/>
                                                    <stop offset="0.5" stop-color="#FF543E"/>
                                                    <stop offset="1" stop-color="#C837AB"/>
                                                </linearGradient>
                                                <clipPath id="clip0_887:4147">
                                                    <rect width="28" height="28" rx="14" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="statistics-tablet__name">Instagram</div>
                                    <div className="statistics-tablet__number">3 1313</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__img">
                                        <img src="images/statistics-tablet__img-3(fb).svg" alt=""/>
                                    </div>
                                    <div className="statistics-tablet__name">Facebook</div>
                                    <div className="statistics-tablet__number">3 1313</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__img">
                                        <img src="images/statistics-tablet__img-4(yt).svg" alt=""/>
                                    </div>
                                    <div className="statistics-tablet__name">YouTube</div>
                                    <div className="statistics-tablet__number">3 1313</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__img">
                                        <img src="images/statistics-tablet__img-5(ya).svg" alt=""/>
                                    </div>
                                    <div className="statistics-tablet__name">Яндекс</div>
                                    <div className="statistics-tablet__number">3 1313</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__img">
                                        <img src="images/statistics-tablet__img-6(goog).svg" alt=""/>
                                    </div>
                                    <div className="statistics-tablet__name">Google</div>
                                    <div className="statistics-tablet__number">3 1313</div>
                                </div>
                            </div>


                        </div>

                        <div className="statistics-tablet">
                            <div className="statistics-tablet__title statistics-tablet__title_sorting">
                                <p>Переходов из стран и городов</p>
                                <div className="statistics-tablet__sorting">
                                    <div className="statistics-tablet__sorting-item">Страны</div>
                                    <div className="statistics-tablet__sorting-item">Города</div>
                                </div>
                            </div>
                            <div className="statistics-tablet__main-content">
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">Россия</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">Россия</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">Россия</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">Россия</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">Россия</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">Россия</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                            </div>
                        </div>

                        <div className="statistics-tablet">
                            <div className="statistics-tablet__title">
                                <p>Пол</p>
                            </div>
                            <div className="statistics-tablet__content">
                                <div className="statistics-tablet__column statistics-tablet__column_blue">
                                    <CountUp end={31313} duration={1}/>
                                    <p>Мужчины</p>
                                </div>
                                <div className="statistics-tablet__column statistics-tablet__column_orange">
                                    <CountUp end={31313} duration={1}/>
                                    <p>Женщины</p>
                                </div>

                            </div>
                        </div>

                        <div className="statistics-tablet">
                            <div className="statistics-tablet__title">
                                <p>Возраст</p>
                            </div>
                            <div className="statistics-tablet__main-content">
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">12 - 15 лет</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">16 - 20 лет</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                                <div className="statistics-tablet__row">
                                    <div className="statistics-tablet__name">21 - 26 лет</div>
                                    <div className="statistics-tablet__number">3 123 333</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Statistics;

