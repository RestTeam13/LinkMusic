import React from "react";
import './style.css'
import Header from "../../components/Header/Header";
import ArtistProfile from "./ArtistProfile";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

const listData = [
    {
        img: "./images/artist-release-list1.png",
        trackName: "Legends Never Die",
        author: 'Альбом'
    },
    {
        img: "./images/artist-release-list2.png",
        trackName: "Death Race for Love",
        author: 'Альбом'
    }, {
        img: "./images/artist-release-list3.png",
        trackName: "Goodbye & Good Riddance",
        author: 'Альбом'
    },
    {
        img: "./images/artist-release-list4.png",
        trackName: "Let Me Know",
        author: 'Сингл'
    },
    {
        img: "./images/artist-release-list3.png",
        trackName: "Legends Never Die",
        author: 'Сингл'
    },
    {
        img: "./images/artist-release-list4.png",
        trackName: "Death Race for Love",
        author: 'Альбом'
    }, {
        img: "./images/artist-release-list2.png",
        trackName: "Goodbye & Good Riddance",
        author: 'Альбом'
    },
    {
        img: "./images/artist-release-list1.png",
        trackName: "Let Me Know",
        author: 'Сингл'
    },
]


const artistProfileData = [
    {
        artistName: "Juicy WRLD",
        presentName: "Настоящее имя: Jarad Anthony Higgins",
        label: "Лейбл: Grade A Productions, Interscope Records",
        artistLink: "https://www.juicywrld.com",
        btn: "Заказать выступление",
        classNameBtn: "artist-card__title-btn tl_btn "

    }
]

function ArtistCard() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-artist-card block_first-on-page">
                <ArtistProfile artistName={artistProfileData[0].artistName}
                               presentName={artistProfileData[0].presentName} label={artistProfileData[0].label}
                               artistLink={artistProfileData[0].artistLink} btn={artistProfileData[0].btn}
                               classNameBtn={artistProfileData[0].classNameBtn}
                               />
                <div className="content">
                    <div className="block block-artist-card__releases">

                        <h2 className="title title_artists-card">Релизы</h2>
                        <div className="block-artist-card__releases-list">
                            <div className='catalog-row catalog-row_artist-card'>
                                <List data={listData} itemClass='catalog-row__item catalog-row__item_artist-card'/>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <Footer/>
        </div>
    );
}

export default ArtistCard;

