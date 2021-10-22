import React from "react";
import '../styles.css'
import ListItem from "../Releases/ListItem";

const listData = [
    {
        img: "images/catalog-row2__item-1.png",
        trackName: "Забери меня",
        author: "Малиновский",
        years: "2021 Сингл"
    },
    {
        img: "images/catalog-row2__item-2.png",
        trackName: "Ты красивая",
        author: "Николай Басков",
        years: "2021 Альбом"
    },
    {
        img: "images/catalog-row2__item-3.png",
        trackName: "Просто позвони",
        author: "Малиновский",
        years: "2021 Сингл"
    }, {
        img: "images/catalog-row2__item-4.png",
        trackName: "Забывай",
        author: "Николай Басков",
        years: "2021 Альбом"
    },
    {
        img: "images/catalog-row2__item-3.png",
        trackName: "Просто позвони",
        author: "Малиновский",
        years: "2021 Сингл"
    },
    {
        img: "images/catalog-row2__item-4.png",
        trackName: "Забывай",
        author: "Николай Басков",
        years: "2021 Альбом"
    },
    {
        img: "images/catalog-row2__item-2.png",
        trackName: "Ты красивая",
        author: "Николай Басков",
        years: "2021 Альбом"
    },
    {
        img: "images/catalog-row2__item-1.png",
        trackName: "Забери меня",
        author: "Малиновский",
        years: "2021 Сингл"
    },
    {
        img: "images/catalog-row2__item-1.png",
        trackName: "Забери меня",
        author: "Малиновский",
        years: "2021 Сингл"
    },
    {
        img: "images/catalog-row2__item-2.png",
        trackName: "Ты красивая",
        author: "Николай Басков",
        years: "2021 Альбом"
    },
    {
        img: "images/catalog-row2__item-3.png",
        trackName: "Просто позвони",
        author: "Малиновский",
        years: "2021 Сингл"
    }, {
        img: "images/catalog-row2__item-4.png",
        trackName: "Забывай",
        author: "Николай Басков",
        years: "2021 Альбом"
    }
]


function List(props) {
    let {data} = props
    return (
        <div className="catalog-row">
            {
                listData.map(currentItem => {
                    return (
                        <ListItem img={currentItem.img} trackName={currentItem.trackName} author={currentItem.author}
                                  years={currentItem.years}/>
                    )
                })
            }

        </div>
    );
}

export default List;
