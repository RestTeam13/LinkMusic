import React from "react";

function ListItem(props) {
    let {img, trackName, author, years, className="catalog-row__item"} = props
    return (
        <div className={className}>
            <div className="catalog-row__item-img">
                <img src={img} alt=""/>
            </div>
            <a href='#' className="catalog-row__item-name">
                {trackName}
            </a>
            <a href='#' className="catalog-row__item-subtext">
                {author}
            </a>
            <p className="catalog-row__item-years">{years}</p>
        </div>
    );
}


export default ListItem;
