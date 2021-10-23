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

function ArtistCard() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-artist-card block_first-on-page">
                <ArtistProfile/>
                <div className="content">
                    <div className="block block-artist-card__releases">
                        <h2 className="title title_artists-card">Релизы</h2>
                        <div className="block-artist-card__releases-list">
                            <List data={listData} className='catalog-row catalog-row_artist-card'
                                  itemClass='catalog-row__item catalog-row__item_artist-card'/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default ArtistCard;

