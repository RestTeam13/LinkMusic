import React from "react";
import ListItem from "../ListItem/ListItem";

function List(props) {
    {/* ToDo Cделать более высокий уровень абстракции*/}
    let {itemClass} = props

    return (
        <>
            {
                props.data.map(currentItem => {
                    return (
                        <ListItem img={currentItem.img} trackName={currentItem.trackName} author={currentItem.author}
                                  years={currentItem.years} className={itemClass}/>
                    )
                })
            }
        </>
    );
}

export default List;
