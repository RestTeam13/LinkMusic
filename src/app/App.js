import React from "react";
import './styles.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import ReleasePage from "./ReleasePage/ReleasePage";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/release" component={ReleasePage}/>
            </div>
        </Router>
    );
}

export default App;

