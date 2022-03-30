import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const withStandardLayout = PageComponent => props => {

    return (
        <div className='wrapper'>
            <Header/>
            <PageComponent {...props}/>
            <Footer/>
        </div>
    )
}


export default withStandardLayout