import React from "react";
import './styles.css'
import Header from "./Header";
import BlockCatalog from "./BlockCatalog";
import BlockForm from "./BlockForm";
import Footer from "./Footer";
import BlockSuggestion from "./BlockSuggestion";
import ReleaseSlider from "./ReleaseSlider/ReleaseSlider";
import News from "./News/News";

function App() {
    return (
        <>
            <Header/>
            <ReleaseSlider/>
            <News/>
            <BlockSuggestion/>
            <BlockCatalog/>
            <BlockForm/>
            <Footer/>h
        </>
    );
}

export default App;

