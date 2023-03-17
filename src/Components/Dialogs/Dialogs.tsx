import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";


const Dialogs = () => {
    type DialogType = {
        name: string
        id: number
    }
    type DialogsDataType = Array<DialogType>
    type MessageType = {
        id: number
        message: string
    }
    type MessagesDataType = MessageType[]
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
    let dialogsElements = dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.massages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;