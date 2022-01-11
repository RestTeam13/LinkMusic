import React from "react";
import '../../styles.css'
import Header from "../../components/Header/Header";
import ReleaseSlider from "../../components/ReleaseSlider/ReleaseSlider";
import News from "../../components/News/News";
import Suggestion from "../../components/Suggestion/Suggestion";
import Catalog from "../../components/Catalog/Catalog";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

function Main() {
    return (
        <div className='wrapper'>
            <Header/>
            <ReleaseSlider/>
            <News/>
            <Suggestion/>
            <Catalog/>
            <Form/>
            <Footer className='block block-footer block-footer_no-lines'/>
        </div>
    );
}

export default Main;

