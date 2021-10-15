import React from "react";
import './styles.css'


function Header() {
    return (
        <header className="header">
            <nav className="main-menu">
                <a href='#' className="main-menu__logo">
                    <img src="images/logo.png" alt=""/>
                </a>

                <div className="main-menu__list">
                    <a href="#" className="main-menu__list-item">Услуги</a>
                    <a href="#" className="main-menu__list-item">Артисты</a>
                    <a href="#" className="main-menu__list-item">Релизы</a>
                    <a href="#" className="main-menu__list-item">Контакты</a>
                </div>

                <div className="main-menu__personal-area">
                    <button className='main-menu__personal-area-button'>
                        <img src="images/avatar.png" alt=""/>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
