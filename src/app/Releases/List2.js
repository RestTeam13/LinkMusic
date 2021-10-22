import React from "react";
import '../styles.css'
import ListItem from "../Releases/ListItem";

const listData2 = [
    {
        img: "./images/artist-list-1.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-2.png",
        trackName: "Малиновский"
    }, {
        img: "./images/artist-list-3.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-4.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-5.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-6.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-3.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-2.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-1.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-4.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-5.png",
        trackName: "Малиновский"
    },
    {
        img: "./images/artist-list-4.png",
        trackName: "Малиновский"
    },
]

function List2(props) {
    let {data} = props
    return (
        <div className="catalog-row">
            {
                listData2.map(currentItem => {
                    return (
                        <ListItem img={currentItem.img} trackName={currentItem.trackName} author={currentItem.author}
                                  years={currentItem.years}/>
                    )
                })
            }
        </div>
    );
}

export default List2;
