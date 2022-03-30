import React, {useContext} from "react";
import './style.css'
import ArtistProfile from "../ArtistCard/ArtistProfile";
import Albums from "./Albums";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import withStandardLayout from "../../hoc/withStandardLayout";


function MyReleases() {
    const {userInfo, userInfoLoading, userInfoError} = useContext(AuthContext)

    return (
        <section className="block block-artist-card block_first-on-page">
            <ArtistProfile
                {...userInfo}
                btn="Редактировать"
                classNameBtn="artist-card__title-btn tl_btn tl_btn_blue"
            />
            <div className="content">
                <div className="block block-artist-card__my-releases">
                    <h2 className="title title_artists-card">Мои релизы</h2>
                    <Link to='/new-release' className="tl_btn tl_btn_my-releases">Создать новый
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.9" y="6.04286" width="12.2" height="1.91429" fill="white" stroke="white"
                                  strokeWidth="0.2"/>
                            <rect x="7.95547" y="0.9" width="12.2" height="1.91429"
                                  transform="rotate(90 7.95547 0.9)" fill="white" stroke="white"
                                  strokeWidth="0.2"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <Albums/>
        </section>
    );
}

export default withStandardLayout(MyReleases);

