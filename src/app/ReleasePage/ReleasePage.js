import React from "react";
import './styles.css'
import releaseBg from "./images/releases__main-bg.png"


function ReleasePage() {
    return (
        <div className='wrapper'>
            <section className="block block-release">
                <div className="block-release__bg-img" style={{backgroundImage:`url(${releaseBg})`}}/>
                <div className="content">
                    <div className="release__wrapper">
                        <div className="release-column__img">
                            <img src={releaseBg} alt=""/>
                        </div>
                        <div className="release-column">
                            <div className="release-column__title"><p>Legends Never Die</p>
                                <span>Juice WRLD</span>
                            </div>
                            <div className="release-column__video">
                                <div className="catalog-videos__img">
                                    <img src="images/release__video-img.png" alt=""/>
                                    <div className="catalog-videos__youtube">
                                        <img src="images/youtube.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="release-column__tracks-list">
                                <div className="release-column__track-row">
                                    <div className="release-column__track-item">
                                        <div className="release-column__track-img">
                                            <img src="images/release-slider-music-services6.png" alt=""/>
                                        </div>
                                        <div className="release-column__track-name">iTunes</div>
                                    </div>
                                    <div className="release-column__track-btn tl_btn">КУПИТЬ</div>
                                </div>
                                <div className="release-column__track-row">

                                    <div className="release-column__track-item">
                                        <div className="release-column__track-img release-column__track-img_apple">
                                            <img src="images/release-slider-music-services7.svg" alt=""/>
                                        </div>
                                        <div className="release-column__track-name">Apple Music</div>
                                    </div>
                                    <div className="release-column__track-btn tl_btn">СЛУШАТЬ</div>

                                </div>
                                <div className="release-column__track-row">

                                    <div className="release-column__track-item">
                                        <div className="release-column__track-img">
                                            <img src="images/release-slider-music-services5.svg" alt=""/>
                                        </div>
                                        <div className="release-column__track-name">Spotify</div>
                                    </div>
                                    <div className="release-column__track-btn tl_btn">СЛУШАТЬ</div>

                                </div>
                                <div className="release-column__track-row">

                                    <div className="release-column__track-item">
                                        <div className="release-column__track-img">
                                            <img src="images/release-slider-music-services3.png" alt=""/>
                                        </div>
                                        <div className="release-column__track-name">Яндекс Музыка</div>
                                    </div>
                                    <div className="release-column__track-btn tl_btn">СЛУШАТЬ</div>

                                </div>
                                <div className="release-column__track-row">

                                    <div className="release-column__track-item">
                                        <div className="release-column__track-img">
                                            <img src="images/release-slider-music-services2.png" alt=""/>
                                        </div>
                                        <div className="release-column__track-name">Сбер.Звук</div>
                                    </div>
                                    <div className="release-column__track-btn tl_btn">СЛУШАТЬ</div>

                                </div>
                                <div className="release-column__track-row">

                                    <div className="release-column__track-item">
                                        <div className="release-column__track-img">
                                            <img src="images/release-slider-music-services4.svg" alt=""/>
                                        </div>
                                        <div className="release-column__track-name">YouTube Music</div>
                                    </div>
                                    <div className="release-column__track-btn tl_btn">СЛУШАТЬ</div>

                                </div>
                            </div>
                            <div className="footer-column__links footer-column__links_release">
                                <a href="#" className="footer-column__link-item release-link-1"/>
                                <a href="#" className="footer-column__link-item release-link-2"/>
                                <a href="#" className="footer-column__link-item release-link-3"/>
                                <a href="#" className="footer-column__link-item release-link-4"/>
                                <a href="#" className="footer-column__link-item release-link-5"/>
                            </div>
                        </div>
                        <div className="release-logo">
                            <img
                                src="data:image/png;base64,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"
                                alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReleasePage;

