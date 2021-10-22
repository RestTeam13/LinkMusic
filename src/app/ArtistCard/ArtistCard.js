import React from "react";
import '../styles.css'
import Header from "../Header/Header";
import Footer from "../MainPage/Footer";
import ArtistProfile from "./ArtistProfile";
import List from "../Releases/List";


function ArtistCard() {
    return (
        <div className='wrapper'>
            <Header/>
            <section className="block block-artist-card">
                <ArtistProfile/>
                <div className="content">
                    <List/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default ArtistCard;

