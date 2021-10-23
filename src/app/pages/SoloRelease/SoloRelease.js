import React from "react";
import './style.css'
import releaseBg from "./images/releases__main-bg.png"
import Logo from "../../components/Logo/Logo";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const socialLinksData=[
    {
        link: '#',
        extraClassName: 'social-links__link-item_7'
    },
    {
        link: '#',
        extraClassName: 'social-links__link-item_8'
    },
    {
        link: '#',
        extraClassName: 'social-links__link-item_9'
    },
    {
        link: '#',
        extraClassName: 'social-links__link-item_10'
    },
    {
        link: '#',
        extraClassName: 'social-links__link-item_11'
    },
]

function SoloRelease() {
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
                            <SocialLinks className='social-links social-links_release' data={socialLinksData}/>
                        </div>
                        <Logo className='logo logo_release'/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SoloRelease;

