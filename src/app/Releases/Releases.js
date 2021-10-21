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
            <SearchRow/>
            <div className="content">
                <List/>
            </div>
            <Footer/>
        </div>
    );
}

export default Releases;

