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
import {DialogsDataType, MessagesDataType, PostsDataType} from "./index";

type AppType = {
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
    postsData: PostsDataType
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    {/*вместо тэга указываем имя компоненты*/}
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               messagesData={props.messagesData}
                               dialogsData={props.dialogsData}
                           />}
                    />
                    <Route path={'/profile'}
                           render={() => <Profile
                               postsData={props.postsData}/>}/>
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
