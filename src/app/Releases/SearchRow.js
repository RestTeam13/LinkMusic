import React from "react";
import '../styles.css'
import List from "./List";


function SearchRow() {
    return (
        <section className="block block-search-row">
            <div className="content content_full-screen">
                <div className="search-row__wrapper">
                    <div className="search-row__title">релизы</div>
                    <div className="search-row">
                        <input type="text" className="search-row__input" placeholder="Поиск"/>
                        <div className="search-row__right-bg">
                            <div className="search-row__input-img">
                                <img src="images/search-row_lupa.svg" alt=""/>
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
