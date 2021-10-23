import React from "react";
import './style.css'
import List from "../List/List";

const listData = [
        {
            img: "./images/artist-list-1.png",
            trackName: "Малиновский"
        },
        {
            img: "./images/artist-list-2.png",
            trackName: "Николай Басков "
        }, {
            img: "./images/artist-list-3.png",
            trackName: "BARINOV"
        },
        {
            img: "./images/artist-list-4.png",
            trackName: "Kevin McCoy"
        },
        {
            img: "./images/artist-list-5.png",
            trackName: "Элджей"
        },

    ],
    listData2 = [
        {
            img: "images/catalog-row2__item-1.png",
            trackName: "Забери меня",
            author: "Малиновский",
        },
        {
            img: "images/catalog-row2__item-2.png",
            trackName: "Просто позвони",
            author: "Малиновский",
        },
        {
            img: "images/catalog-row2__item-3.png",
            trackName: "Ты красивая",
            author: "Николай Басков",
        },
        {
            img: "images/catalog-row2__item-4.png",
            trackName: "Забывай",
            author: "Николай Басков",
        },
        {
            img: "images/catalog-row2__item-5.png",
            trackName: "Kevin McCoy - ",
            author: "Kevin McCoy ",
        },

    ]

function Catalog() {
    return (
        <div className="block block-catalog">
            <div className="content">
                <div className="catalog-title__part">
                    <h2 className="catalog-title">
                        В нашем каталоге
                    </h2>
                    <div className="catalog-title__numbers">
                        <p>5000+</p>
                        <span>Релизов</span>
                    </div>
                    <div className="catalog-title__numbers">
                        <p>300+</p>
                        <span>Артистов</span>
                    </div>
                </div>
            </div>
            <div className="content_slider">
                <List data={listData} className='catalog-row catalog-row_main'/>
                <List data={listData2} className='catalog-row catalog-row_main'/>
            </div>
            <div className="content">
                <div className="catalog-videos">
                    <div className="catalog-videos__item">
                        <div className="catalog-videos__img">
                            <img src="images/catalog-videos__img-1.png" alt=""/>
                            <div className="catalog-videos__youtube">
                                <img src="images/youtube.svg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-videos__name">Небесные розы</div>
                    </div>
                    <div className="catalog-videos__item">
                        <div className="catalog-videos__img">
                            <img src="images/catalog-videos__img-2.png" alt=""/>
                            <div className="catalog-videos__youtube">
                                <img src="images/youtube.svg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-videos__name">Parasitic Metamorphosis Manifestation</div>
                    </div>
                    <div className="catalog-videos__item">
                        <div className="catalog-videos__img">
                            <img src="images/catalog-videos__img-3.png" alt=""/>
                            <div className="catalog-videos__youtube">
                                <img src="images/youtube.svg" alt=""/>
                            </div>
                        </div>
                        <div className="catalog-videos__name">Manifestation</div>

                    </div>
                </div>
            </div>
            <div className="vector__bg vector__bg_1">
                <img src="images/vector-bg_catalog-left.svg" alt=""/>
            </div>
            <div className="vector__bg vector__bg_bottom">
                <svg width="593" height="598" viewBox="0 0 593 598" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M53.9867 161.856C53.9867 161.856 149.49 102.873 231.9 183.685C312.502 262.72 372.107 199.037 430.351 225.207C488.595 251.376 519.988 342.146 441.511 397.536C371.505 446.949 399.953 490.344 399.46 524.767C398.968 559.19 372.238 597.115 372.238 597.115"
                        stroke="url(#paint0_linear_1222:3)" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M317.076 508.093C317.076 508.093 349.629 406.43 409.356 364.628C469.083 322.825 438.438 279.245 417.782 270.075C374.934 251.067 302.207 310.137 248.866 263.994C208.789 229.304 185.17 153.223 100.213 183.383"
                        stroke="url(#paint1_linear_1222:3)" strokeWidth="3" strokeMiterlimit="10"/>
                    <defs>
                        <linearGradient id="paint0_linear_1222:3" x1="110.208" y1="107.18" x2="482.446" y2="489.935"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1222:3" x1="135.684" y1="148.886" x2="403.387" y2="424.153"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3434FF"/>
                            <stop offset="1" stopColor="#FF6534"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="vector__bg vector__bg_2">
                <svg width="531" height="732" viewBox="0 0 531 732" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M440.592 659.836C440.592 659.836 302.861 664.116 264.66 527.673C227.294 394.227 124.881 425.488 78.9334 361.981C32.986 298.473 55.1636 182.673 172.578 171.79C277.32 162.08 273.623 98.4896 295.224 62.1652C316.825 25.8408 368.487 1.85648 368.487 1.85648"
                        stroke="#FC6338" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M372.671 130.351C372.671 130.351 275.787 218.587 186.642 226.493C97.497 234.399 103.418 299.532 119.781 321.937C153.732 368.398 267.283 350.079 295.783 431.835C317.184 493.284 295.729 588.696 404.59 608.626"
                        stroke="#FC6338" strokeWidth="3" strokeMiterlimit="10"/>
                    <path
                        d="M368.765 198.857C368.765 198.857 232.712 217.892 264.158 275.629C300.163 341.792 342.158 329.945 325.039 429.661C318.89 465.093 347.41 594.558 419.097 548.758"
                        stroke="#FC6338" strokeWidth="3" strokeMiterlimit="10"/>
                </svg>

            </div>
        </div>
    );
}

export default Catalog;
