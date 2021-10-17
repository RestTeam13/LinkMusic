import React from "react";

class ReleaseSliderMainSlide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='block release-slider__slide release-slider__slide_main'>
                <div className="vector__bg vector__bg_7"> {/*ToDo дорисовать линии*/}
                    <svg width="646" height="646" viewBox="0 0 646 646" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00097 208.167C2.00097 208.167 97.0432 243.812 158.894 158.726C228.226 63.344 339.107 103.43 370.234 175.371C401.361 247.312 322.172 319.387 417.808 419.676C515.594 522.214 441.56 638.434 441.56 638.434" stroke="#204CEC" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M55.3427 305.846C55.3427 305.846 146.404 271.354 198.737 198.755C251.07 126.156 304.039 164.517 314.943 190.029C337.542 242.949 263.791 331.21 319.518 397.473C361.414 447.261 454.398 477.553 415.925 581.321" stroke="#204CEC" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M113.813 308.357C113.813 308.357 167.808 233.969 201.381 290.496C239.869 355.245 208.233 385.297 302.702 421.515C336.304 434.328 433.036 524.979 357.043 563.212" stroke="#204CEC" stroke-width="3" stroke-miterlimit="10"/>
                    </svg>
                </div>

                <div className="release-slider__slide-content">
                    <div className="release-slider__img-wrapper-color-notes">
                        <svg width="90" height="58" viewBox="0 0 90 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M46.1091 36.6871C47.5191 35.1903 48.0065 33.2536 47.4873 31.2147L47.3343 30.615L39.3694 16.7753C33.4049 6.41063 31.349 2.88137 31.1813 2.72102C31.0039 2.55093 30.811 2.43291 30.6094 2.3684C30.3636 2.35838 30.1118 2.42396 29.8662 2.56577C29.6964 2.66381 29.156 3.08755 28.6658 3.50712C26.4966 5.36308 13.8561 16.555 13.6651 16.7883C13.3691 17.1501 13.1906 17.7071 13.2215 18.1711L13.2473 18.5641C13.2473 18.5641 25.6907 40.2805 25.7218 40.5882C25.7689 41.0558 25.6019 41.6216 25.3253 41.9309C25.1942 42.0775 24.6387 42.5939 24.0909 43.0786C21.5547 45.3238 20.7305 46.3619 20.3511 47.7904C20.136 48.6016 20.162 49.5241 20.4238 50.3573C20.6745 51.153 21.3363 52.1785 21.9306 52.6908C22.5525 53.2273 23.2608 53.5828 24.0146 53.7488C24.6671 53.8438 25.3486 53.8015 26.0334 53.6136C27.5485 53.1988 29.79 51.3933 30.6197 49.9205C30.9661 49.305 31.2657 48.2594 31.3077 47.5181C31.3243 47.2254 31.2866 46.6749 31.2243 46.2965C31.0049 44.9695 19.8067 25.5438 19.7181 25.2686C19.5675 24.8029 19.669 24.3387 19.9918 24.0152C20.2823 23.7239 32.4656 12.9679 32.8216 12.6885C33.1353 12.4424 33.5231 12.3687 33.8271 12.4887C33.965 12.486 34.0976 12.5129 34.2144 12.5719C34.4247 12.6781 34.6268 13.0119 38.1927 19.1501C42.2976 26.215 42.2098 26.0446 42.0921 26.7079C42.0066 27.1906 41.7372 27.5134 40.5042 28.6154C38.6284 30.2925 38.0205 30.9261 37.4396 31.8059C36.7138 32.9048 36.4697 33.7906 36.5679 34.9712C36.6371 35.8068 36.8055 36.3657 37.1837 37.0187C37.8604 38.1857 38.7812 38.8713 40.1857 39.2522C40.3147 39.2871 40.4397 39.3172 40.5621 39.3429C41.2141 39.4381 41.7935 39.388 42.4453 39.192C43.4285 38.8963 45.1124 37.7449 46.1091 36.6871V36.6871Z"
                                stroke="url(#paint0_linear_1242:3)" stroke-width="2.5" stroke-miterlimit="10"/>
                            <path
                                d="M80.3851 45.9856C81.7196 45.9058 82.8136 45.2066 83.4768 44.0104L83.6718 43.6583L86.0722 33.5586C87.8701 25.995 88.4705 23.4083 88.4626 23.2577C88.4545 23.0981 88.4159 22.9563 88.3492 22.8359C88.2374 22.7216 88.089 22.6404 87.9095 22.598C87.7855 22.5687 87.3408 22.5283 86.9218 22.5083C85.068 22.4196 74.0971 22.0809 73.9027 22.1061C73.6014 22.1454 73.2686 22.3294 73.0763 22.5627L72.9134 22.7602C72.9134 22.7602 69.121 38.5838 68.9985 38.7433C68.8123 38.9856 68.4811 39.1789 68.2123 39.2019C68.0849 39.2129 67.5919 39.2096 67.1166 39.1948C64.9155 39.1267 64.0627 39.2505 63.2464 39.7573C62.783 40.0453 62.3841 40.4935 62.1365 41.0044C61.9004 41.4927 61.7565 42.273 61.8093 42.7804C61.8644 43.3115 62.0412 43.7955 62.3239 44.21C62.5903 44.5459 62.9316 44.8297 63.3394 45.046C64.2413 45.5251 66.1069 45.67 67.1561 45.3429C67.5944 45.206 68.2022 44.8448 68.5526 44.5127C68.6909 44.3816 68.9185 44.1043 69.0577 43.8975C69.5455 43.1717 72.9059 28.9872 72.9867 28.8175C73.123 28.5299 73.378 28.3555 73.6749 28.3463C73.9423 28.338 84.5025 28.6793 84.7955 28.7057C85.0536 28.7291 85.27 28.8671 85.3604 29.0594C85.4269 29.1196 85.4776 29.1914 85.5066 29.2714C85.5587 29.4154 85.5056 29.6635 84.4567 34.1578C83.2498 39.3309 83.2842 39.2112 82.9328 39.4725C82.6772 39.6628 82.4058 39.6955 81.3311 39.6674C79.6958 39.6248 79.1257 39.6536 78.4586 39.811C77.6252 40.0075 77.1149 40.3178 76.635 40.9203C76.2953 41.3465 76.1258 41.6861 76.0137 42.1637C75.8137 43.0176 75.9438 43.7525 76.4387 44.5589C76.4841 44.6329 76.5298 44.7028 76.5763 44.7696C76.8424 45.1053 77.1389 45.3399 77.5347 45.5377C78.1318 45.836 79.4419 46.0419 80.3851 45.9856V45.9856Z"
                                stroke="url(#paint1_linear_1242:3)" stroke-width="2.5" stroke-miterlimit="10"/>
                            <defs>
                                <linearGradient id="paint0_linear_1242:3" x1="12.61" y1="37.0314" x2="41.4561"
                                                y2="20.377" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3434FF"/>
                                    <stop offset="1" stop-color="#FF6534"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1242:3" x1="64.3794" y1="31.2151" x2="85.4541"
                                                y2="36.1932" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3434FF"/>
                                    <stop offset="1" stop-color="#FF6534"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="release-slider__slide-half-circle">
                        <p className="release-slider__slide-title">Расскажи <br/> всем о релизе</p>
                        <p className="release-slider__slide-subtitle">Создай уникальную страницу
                            своего <br/> музыкального
                            релиза</p>
                        <button className="release-slider__slide-button">Создать релиз</button>
                        <div className="release-slider__img-wrapper-notes">
                            <img src="images/notes.svg" alt=""/>
                        </div>
                    </div>
                    <p className="release-slider__slide-title release-slider__slide-title_main">Расскажи <br/> всем о
                        релизе</p>
                    <div className="release-slider__slide-character">
                        <img src="images/main-character.png" alt=""/>
                        <img src="images/release-slider-music-services1.png" alt=""
                             className="release-slider__music-services release-slider__music-services_1"/>
                        <img src="images/release-slider-music-services2.png" alt=""
                             className="release-slider__music-services release-slider__music-services_2"/>
                        <img src="images/release-slider-music-services3.png" alt=""
                             className="release-slider__music-services release-slider__music-services_3"/>
                        <img src="images/release-slider-music-services4.svg" alt=""
                             className="release-slider__music-services release-slider__music-services_4"/>
                        <img src="images/release-slider-music-services5.svg" alt=""
                             className="release-slider__music-services release-slider__music-services_5"/>
                        <img src="images/release-slider-music-services6.png" alt=""
                             className="release-slider__music-services release-slider__music-services_6"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default ReleaseSliderMainSlide;