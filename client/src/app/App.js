import React from "react";
import './styles.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import SoloRelease from "./pages/SoloRelease/SoloRelease";
import Releases from "./pages/Releases/Releases";
import Artists from "./pages/Artists/Artists";
import ArtistCard from "./pages/ArtistCard/ArtistCard";
import MyRelease from "./pages/MyRelease/MyRelease";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Statistics from "./pages/Statistics/Statistics";
import CreateProfile from "./pages/СreateProfile/СreateProfile";
import NewRelease from "./pages/NewRelease/NewRelease";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main}/>
                <Route exact path="/release" component={SoloRelease}/>
                <Route exact path="/releases" component={Releases}/>
                <Route exact path="/artists" component={Artists}/>
                <Route exact path="/card" component={ArtistCard}/>
                <Route exact path="/my-release" component={MyRelease}/>
                <Route exact path="/statistics" component={Statistics}/>
                <Route exact path="/create-profile" component={CreateProfile}/>
                <Route exact path="/new-release" component={NewRelease}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/login" component={Login}/>
            </div>
        </Router>
    );
}

export default App;

