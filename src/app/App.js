import React from "react";
import './styles.css'
import Header from "./Header/Header";
import BlockCatalog from "./BlockCatalog";
import BlockForm from "./BlockForm";
import Footer from "./Footer";
import BlockSuggestion from "./BlockSuggestion";
import ReleaseSlider from "./ReleaseSlider/ReleaseSlider";
import News from "./News/News";

function App() {
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

export default App;
