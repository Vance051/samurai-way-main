import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


type DialogType = {
    name: string
    id: number
}
export type DialogsDataType = Array<DialogType>
type MessageType = {
    id: number
    message: string
}
export type MessagesDataType = MessageType[]
let dialogsData: DialogsDataType = [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'},
    {id: 4, name: 'User4'},
    {id: 5, name: 'User5'},
    {id: 6, name: 'User6'},
]
let messagesData: MessagesDataType = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'HiThere'},
    {id: 3, message: 'Bye'},
    {id: 4, message: 'Uot tak uot'},
    {id: 5, message: 'Tak'},
    {id: 6, message: 'like this'},
]

type PostType ={
    id:number
    message:string
    likesCount: number
}
export type PostsDataType =PostType[]
let postsData:PostsDataType = [
    {id: 1, message: 'Hi!', likesCount:5},
    {id: 2, message: 'HiThere', likesCount:12},
    {id: 3, message: 'Bye', likesCount:14},
]

ReactDOM.render(
    <App
        messagesData={messagesData}
        dialogsData={dialogsData}
        postsData={postsData}
    />,
  document.getElementById('root')
);