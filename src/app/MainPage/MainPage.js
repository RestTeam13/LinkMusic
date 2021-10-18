import React from "react";
import '../styles.css'
import Header from "../Header/Header";
import BlockCatalog from "../MainPage/BlockCatalog";
import BlockForm from "../MainPage/BlockForm";
import Footer from "../MainPage/Footer";
import BlockSuggestion from "../MainPage/BlockSuggestion";
import ReleaseSlider from "../ReleaseSlider/ReleaseSlider";
import News from "../News/News";

function MainPage() {
    return (
        <div className='wrapper'>
            <Header/>
            <ReleaseSlider/>
            <News/>
            <BlockSuggestion/>
            <BlockCatalog/>
            <BlockForm/>
            <Footer/>
        </div>
    );
}

export default MainPage;

