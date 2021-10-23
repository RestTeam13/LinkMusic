import React from "react";
import ListItem from "../ListItem/ListItem";

function List(props) {
    let {className='catalog-row', itemClass} = props

    return (
        <div className={className}> {/* ToDo Не нужен этот див*/}
            {
                props.data.map(currentItem => {
                    return (
                        <ListItem img={currentItem.img} trackName={currentItem.trackName} author={currentItem.author}
                                  years={currentItem.years} className={itemClass}/>
                    )
                })
            }

        </div>
    );
}

export default List;
