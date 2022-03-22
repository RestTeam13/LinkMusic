import React, {useContext, useEffect, useState} from "react";
import './style.css'
import login from './images/login.svg'
import Logo from "../Logo/Logo";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import useAvatar from "../../hooks/user.hooks";

export default function Header() {
    const [hasBg, toggleBg] = useState(false)
    const [openMenu, toggleMenu] = useState(false)
    const [getUserAvatar, avatar, loading, error] = useAvatar()

    const headerClasses = hasBg ? 'header header_bg' : 'header'
    const burgerClasses = openMenu ? 'main-menu__burger active' : 'main-menu__burger'
    const menuClasses = openMenu ? 'main-menu__list active' : 'main-menu__list'
    const auth = useContext(AuthContext)
    const isAuthenticated = auth.isAuthenticated

    const addBg = (e) => {
        const isTop = window.scrollY < 100
        !isTop ? toggleBg(true) : toggleBg(false)
        console.log('w')
    }

    useEffect(() => {
        addBg()
        window.addEventListener('scroll', addBg);
        return () => {
            window.removeEventListener('scroll', addBg);
        }
    }, [])

    useEffect(() => {
        if (isAuthenticated) getUserAvatar()
    }, [isAuthenticated])

    return (
        <header className={headerClasses}>
            <nav className="main-menu">
                <Logo className='logo'/>
                <div className={menuClasses}>
                    <Link to={
                        {
                            pathname: "/",
                            hash: "#services",
                            state: null,
                            key: "services-anchor"
                        }
                    } onClick={() => toggleMenu(false)} className="main-menu__list-item">Услуги</Link>
                    <Link to="/artists" onClick={() => toggleMenu(false)}
                          className="main-menu__list-item">Артисты</Link>
                    <Link to="/releases" onClick={() => toggleMenu(false)}
                          className="main-menu__list-item">Релизы</Link>
                    <Link to={
                        {
                            pathname: "/",
                            hash: "#contacts",
                            key: "contacts-anchor"
                        }
                    } onClick={() => toggleMenu(false)} className="main-menu__list-item">Контакты</Link>

                    <div className="main-menu__list-circle">
                        <svg width="380" height="380" viewBox="0 0 380 380" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="190" cy="190" r="125" stroke="#0000FF" strokeWidth="130"/>
                            <mask id="mask0_925:543" style={{"maskType": "alpha"}} maskUnits="userSpaceOnUse" x="0"
                                  y="0" width="380" height="380">
                                <circle cx="190" cy="190" r="125" stroke="white" strokeWidth="130"/>
                            </mask>
                            <g mask="url(#mask0_925:543)">
                                <path
                                    d="M376.371 -128.316C376.371 -128.316 303.58 -122.84 292.508 -52.6439C281.678 16.0109 225.692 6.07159 205.711 40.3013C185.729 74.531 205.076 131.09 267.609 130.031C323.392 129.087 325.659 161.023 339.437 177.955C353.215 194.887 382.001 204 382.001 204"
                                    stroke="#FC6338" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M379.999 137C379.999 137 320.728 98.3397 271.467 99.0048C222.207 99.6698 220.751 67.1584 228.075 55.2392C243.274 30.5226 306.615 33.7541 316.294 -8.13629C323.559 -39.621 304.97 -85.7007 362.995 -101.142"
                                    stroke="#FC6338" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M372.102 102.233C372.102 102.233 287.017 98.5309 301.138 68.6351C317.3 34.3779 344.096 38.4755 324.705 -10.1541C317.775 -27.431 323.701 -92.7022 371.724 -73.0487"
                                    stroke="#FC6338" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M-31.9997 18.8711C-31.9997 18.8711 4.75302 54.4082 50.3981 27.513C101.565 -2.63716 144.744 38.1296 144.688 77.6088C144.631 117.088 93.5875 134.494 117.644 200.013C142.241 267.002 84.7209 305.835 84.7209 305.835"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M-26.9598 74.6975C-26.9598 74.6975 22.0274 77.0354 60.7701 53.999C99.5128 30.9627 116.285 59.3121 116.203 73.2855C116.024 102.267 64.2442 128.241 76.6915 170.033C86.0555 201.439 122.932 234.091 84.3371 274.307"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M-0.451557 87.5896C-0.451557 87.5896 39.4178 64.0602 43.5849 96.9094C48.3721 134.544 27.7277 142.078 64.1009 177.765C77.0524 190.426 103.549 251.713 60.7717 254.127"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M-124.882 77.8946C-124.882 77.8946 -108.333 126.266 -152.077 156.154C-201.114 189.657 -182.563 246.067 -146.802 262.795C-111.042 279.522 -73.593 240.714 -24.509 290.334C25.6755 341.07 85.2726 305.506 85.2726 305.506"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M-108.626 152.072C-108.626 152.072 -108.93 201.114 -134.02 238.56C-159.11 276.005 -131.705 294.28 -117.747 294.951C-88.7987 296.333 -60.0734 246.027 -19.0121 260.708C11.8441 271.75 42.462 310.331 84.6985 273.959"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                                <path
                                    d="M24.5539 428.141C24.5539 428.141 -21.7329 427.288 -8.06814 397.127C7.57593 362.565 30.9267 366.966 18.6485 317.511C14.2525 299.94 23.8015 233.858 61.4994 254.218"
                                    stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <button className={burgerClasses} onClick={() => toggleMenu(prevState => !prevState)}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="2" rx="1" fill="#727272"/>
                        <rect y="4.5" width="18" height="2" rx="1" fill="#727272"/>
                        <rect y="9" width="18" height="2" rx="1" fill="#727272"/>
                    </svg>
                </button>
                <div className="main-menu__personal-area">
                    {
                        isAuthenticated ?
                            <Link to='/my-releases' className='main-menu__personal-area-button'>
                                <img src={avatar} alt=""/> {/*Todo add loading*/}
                            </Link> :
                            <Link to='/login' className='main-menu__personal-area-button'>
                                <img src={login} alt=""/>
                            </Link>
                    }
                </div>
            </nav>
        </header>
    )
}
