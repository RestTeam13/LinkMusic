import React from "react";
import './style.css'
import Counter from "../Counter/Counter";
import Slider from 'react-slick'
import ListItem from "../ListItem/ListItem";

function PrevArrow(props) {
    const {onClick} = props
    return (
        <button className='catalog-slider__arrow catalog-slider__arrow_prev' onClick={onClick}>
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9766 19.0671L3.47656 10.5671L11.9766 2.06714" stroke="#D4AA00" strokeWidth="4"/>
            </svg>
        </button>
    )
}

function NextArrow(props) {
    const {onClick} = props
    return (
        <button className='catalog-slider__arrow catalog-slider__arrow_next' onClick={onClick}>
            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9766 19.0671L3.47656 10.5671L11.9766 2.06714" stroke="#D4AA00" strokeWidth="4"/>
            </svg>
        </button>
    )
}

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
const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,

}

function Catalog() {
    return (
        <div className="block block-catalog">
            <div className="content">
                <div className="catalog-title__part">
                    <h2 className="catalog-title">
                        В нашем каталоге
                    </h2>
                    <div className="catalog-title__numbers catalog-title__numbers_first">
                        <Counter number='5000'/>
                        <span>Релизов</span>
                    </div>
                    <div className="catalog-title__numbers">
                        <Counter number='300'/>
                        <span>Артистов</span>
                    </div>
                </div>
            </div>
            <div className="content_slider">
                <Slider {...settings} className='catalog-row catalog-row_main'>
                    {
                        listData.map(currentItem => {
                            return (
                                <ListItem img={currentItem.img} trackName={currentItem.trackName}/>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className="content_slider">
                <Slider {...settings} className='catalog-row catalog-row_main'>
                    {
                        listData2.map(currentItem => {
                            return (
                                <ListItem img={currentItem.img} trackName={currentItem.trackName} author={currentItem.author}/>
                            )
                        })
                    }
                </Slider>
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
