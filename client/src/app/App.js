import React, {useContext, useState} from "react";
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
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hooks";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
    const {token, userId, login, logout} = useAuth()//Todo вынести на уровень выше? вместе с AuthContext.Provider
    const isAuthenticated = !!token

    if (isAuthenticated) {
        return (
            <>
                <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="release" element={<SoloRelease/>}/>
                        <Route path="releases" element={<Releases/>}/>
                        <Route path="artists" element={<Artists/>}/>
                        <Route path="card" element={<ArtistCard/>}/>
                        <Route path="my-releases" element={<MyRelease/>}/>
                        <Route path="statistics" element={<Statistics/>}/>
                        <Route path="create-profile" element={<CreateProfile/>}/>
                        <Route path="new-release" element={<NewRelease/>}/>
                        <Route path="registration" element={<Registration/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="forgot-password" element={<ForgotPassword/>}/>
                        <Route path="*" element={<Main/>}/>
                    </Routes>
                </AuthContext.Provider>
            </>
        )
    }

    return (
        <>
            <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="release" element={<SoloRelease/>}/>
                    <Route path="releases" element={<Releases/>}/>
                    <Route path="artists" element={<Artists/>}/>
                    <Route path="card" element={<ArtistCard/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </AuthContext.Provider>
        </>
    )

}

//Todo 404 page
//Todo редирект при неавторизации остается в пути
export default App;

