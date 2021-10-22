import React from "react";
import '../styles.css'
import Header from "../Header/Header";
import Footer from "../MainPage/Footer";
import SearchRow from "./SearchRow";
import List from "./List";



function Releases() {
    return (
        <div className='wrapper'>
            <Header/>
            <SearchRow title="релизы" bg="linear-gradient(90deg, #3434FF 0%, #FF6534 100%)"/>
            <div className="block">
                <div className="content">
                    <List/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Releases;

