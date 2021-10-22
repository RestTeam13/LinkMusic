import React from "react";
import '../styles.css'
import Header from "../Header/Header";
import Footer from "../MainPage/Footer";
import SearchRow from "../Releases/SearchRow";
import List2 from "../Releases/List2";



function Artists() {
    return (
        <div className='wrapper'>
            <Header/>
            <SearchRow title="Артисты" bg="linear-gradient(90deg, #FF3B3B -15.88%, #FFCD1C 133.05%)"/>
            <div className="block">
                <div className="content">
                    <List2/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Artists;

