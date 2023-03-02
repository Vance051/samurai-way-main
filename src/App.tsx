import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    {/*вместо тэга указываем имя компоненты*/}
                    <Route path={'/dialogs'}
                           component={Dialogs}/>
                    <Route path={'/profile'}
                           component={Profile}/>
                    <Route path={'/news'}
                           component={News}/>

                    <Route path={'/music'}
                           component={Music}/>

                    <Route path={'/settings'}
                           component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
