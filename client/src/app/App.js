import React from "react";
import './styles.css'
import {Routes, Route} from "react-router-dom";
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
    const isAuthenticated = false

    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/release" element={<SoloRelease/>}/>
                <Route path="/releases" element={<Releases/>}/>
                <Route path="/artists" element={<Artists/>}/>
                <Route path="/card" element={<ArtistCard/>}/>
                <Route path="/my-release" element={<MyRelease/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/create-profile" element={<CreateProfile/>}/>
                <Route path="/new-release" element={<NewRelease/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<Main/>}/> {/*Todo 404 page*/}
            </Routes>
        </div>
    )
}

export default App;

