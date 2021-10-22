import React from "react";
import './styles.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import ReleasePage from "./ReleasePage/ReleasePage";
import Releases from "./Releases/Releases";
import Artists from "./Artists/Artists";
import ArtistCard from "./ArtistCard/ArtistCard";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/release" component={ReleasePage}/>
                <Route exact path="/releases" component={Releases}/>
                <Route exact path="/artists" component={Artists}/>
                <Route exact path="/card" component={ArtistCard}/>
            </div>
        </Router>
    );
}

export default App;

