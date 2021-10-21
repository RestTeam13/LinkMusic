import React from "react";
import '../styles.css'


function ListItem(props) {
    let {img, trackName, author, years} = props
    return (
        <div className="catalog-row__item">
            <div className="catalog-row__item-img">
                <img src={img} alt=""/>
            </div>
            <p className="catalog-row__item-name">
                {trackName}
            </p>
            <p className="catalog-row__item-subtext">
                {author}
            </p>
            <p className="catalog-row__item-years">{years}</p>

        </div>
    );
}


export default ListItem;
