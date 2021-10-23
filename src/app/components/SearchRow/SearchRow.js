import React from "react";
import './style.css'


function SearchRow(props) {
    let {title, bg} = props
    return (
        <section className="block block-search-row block_first-on-page">
            <div className="content content_full-screen">
                <div className="search-row__wrapper" style={{background:bg}}>
                    <h1 className="search-row__title">{title}</h1> {/*ToDo Вытащить заголовок в общий формат*/}
                    <div className="search-row">
                        <input type="text" className="search-row__input" placeholder="Поиск"/>
                        <div className="search-row__right-bg">
                            <div className="search-row__input-img">
                            </div>
                        </div>
                    </div>
                    <div className="search-row__vector search-row__vector_left">
                        <img src="images/search-row_vector-left.svg" alt=""/>
                    </div>
                    <div className="search-row__vector search-row__vector_right">
                        <img src="images/search-row_vector-right.svg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchRow;
