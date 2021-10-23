import React from "react";
import './style.css'
import avatar from './images/avatar.png'
import Logo from "../Logo/Logo";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bg: false
        }
    }

    addBg = () => {
        const isTop = window.scrollY < 100
        if (!isTop) {
            this.setState({
                bg: true
            })
        } else {
            this.setState({
                bg: false
            })
        }
    }

    componentDidMount = () => { //ToDo оптимизировать
        window.addEventListener('scroll', (event) => {
            this.addBg()
        });
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', (event) => {
            this.addBg()
        });
    };

    render() {
        const {bg} = this.state
        const headerClasses = bg ? 'header header_bg' : 'header'
        return (
            <header className={headerClasses} onClick={this.addBg}>
                <nav className="main-menu">

                    <Logo className='logo'/>

                    <div className="main-menu__list">
                        <a href="/#services" className="main-menu__list-item">Услуги</a>
                        <a href="/artists" className="main-menu__list-item">Артисты</a>
                        <a href="/releases" className="main-menu__list-item">Релизы</a>
                        <a href="/#contacts" className="main-menu__list-item">Контакты</a>
                    </div>

                    <button className="main-menu__burger">
                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="2" rx="1" fill="#727272"/>
                            <rect y="9" width="18" height="2" rx="1" fill="#727272"/>
                            <rect y="4.5" width="18" height="2.3" rx="1.15" fill="#727272"/>
                        </svg>
                    </button>

                    <div className="main-menu__personal-area">
                        <button className='main-menu__personal-area-button'>
                            <img src={avatar} alt=""/>
                        </button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
