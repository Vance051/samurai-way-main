import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {AddPostType, StateType} from "./redux/state";

type AppType = {
    state: StateType
    addPost: AddPostType
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.siteBar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/dialogs'}
                           render={
                               () => <Dialogs
                                   state={props.state.dialogPage}

                               />
                           }
                    />
                    <Route path={'/profile'}
                           render={
                               () => <Profile
                                   postsData={props.state.profilePage.postsData}
                                   addPost ={props.addPost}
                               />
                           }
                    />
                    <Route path={'/news'}
                           render={() => <News/>}/>

                    <Route path={'/music'}
                           render={() => <Music/>}/>

                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
