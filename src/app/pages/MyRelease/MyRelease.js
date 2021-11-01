import React from "react";
import './style.css'
import Header from "../../components/Header/Header";
import ArtistProfile from "../ArtistCard/ArtistProfile";
import Footer from "../../components/Footer/Footer";
import Albums from "./Albums";


const artistProfileData = [
    {
        artistName: "Juicy WRLD",
        presentName: "Настоящее имя: Jarad Anthony Higgins",
        label: "Лейбл: Grade A Productions, Interscope Records",
        artistLink: "https://www.juicywrld.com",
        btn: "Редактировать",
        classNameBtn: "artist-card__title-btn tl_btn tl_btn_blue"

    }
]

function MyRelease() {
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
                    <div className="block block-artist-card__my-releases">
                        <h2 className="title title_artists-card">Мои релизы</h2>
                        <button className="tl_btn tl_btn_my-releases">Создать новый</button>
                    </div>
                </div>
                <Albums/>
            </section>
            <Footer/>
        </div>
    );
}

export default MyRelease;

