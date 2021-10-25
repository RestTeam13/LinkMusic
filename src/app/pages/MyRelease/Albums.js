import React from "react";
import './style.css'
import AlbumItem from "./AlbumItem";




function Albums() {
    return (
        <div className="block block-albums ">
            <div className="content">
                <div className="albums-column">
                    <AlbumItem/>
                    <AlbumItem/>
                    <AlbumItem/>
                    <AlbumItem/>
                    <AlbumItem/>
                    <AlbumItem/>
                    <AlbumItem/>
                    <AlbumItem/>

                </div>
            </div>

        </div>
    );
}

export default Albums;
