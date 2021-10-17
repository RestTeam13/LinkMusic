import React from "react";
import './style.css'
import avatar from './images/avatar.png'
import logo from './images/logo.png'


function Header() {
    return (
        <header className="header">
            <div className="header__bg-img">
                <svg width="926" height="487" viewBox="0 0 926 487" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M925 47C925 47 786.323 110.094 810.979 266.178C838.622 441.144 678.425 516.347 569.057 472.992C459.688 429.637 467.237 268.957 259.334 264.014C46.7649 258.967 2 56.8698 2 56.8698" stroke="url(#paint0_linear_1242:5)" stroke-width="3" stroke-miterlimit="10"/>
                    <path d="M764 1C764 1 704.057 134.143 725.531 266.626C747.006 399.109 650.228 414.601 611.64 399.109C531.616 366.956 516.24 195.151 386.973 183.978C289.82 175.61 159.189 242.091 90 91.2517" stroke="url(#paint1_linear_1242:5)" stroke-width="3" stroke-miterlimit="10"/>
                    <path d="M699.898 59.3233C699.898 59.3233 721.541 195.419 625.921 171.087C516.359 143.247 518.04 77.8531 379.346 139.604C330.087 161.642 131.224 168.089 171.297 47" stroke="url(#paint2_linear_1242:5)" stroke-width="2" stroke-miterlimit="10"/>
                    <defs>
                        <linearGradient id="paint0_linear_1242:5" x1="463.5" y1="47" x2="463.5" y2="485" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#204CEC"/>
                            <stop offset="1" stop-color="#FD6436"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1242:5" x1="427" y1="1" x2="427" y2="404" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#204CEC"/>
                            <stop offset="1" stop-color="#FD6436"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1242:5" x1="434" y1="47" x2="637.809" y2="377.248" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#204CEC"/>
                            <stop offset="1" stop-color="#FD6436"/>
                        </linearGradient>
                    </defs>
                </svg>


            </div>
            <nav className="main-menu">
                <a href='#' className="main-menu__logo">
                    <img src={logo} alt=""/>
                </a>

                <div className="main-menu__list">
                    <a href="#services" className="main-menu__list-item">Услуги</a>
                    <a href="#artists" className="main-menu__list-item">Артисты</a>
                    <a href="#releases" className="main-menu__list-item">Релизы</a>
                    <a href="#contacts" className="main-menu__list-item">Контакты</a>
                </div>

                <div className="main-menu__personal-area">
                    <button className='main-menu__personal-area-button'>
                        <img src={avatar} alt=""/>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
