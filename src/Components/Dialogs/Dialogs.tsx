import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem, Message} from "./Dialog/DialogItem";

type DialogType = {
    name: string
    id: number
}
type DialogsDataType = Array<DialogType>
let dialogsData: DialogsDataType = [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'},
    {id: 4, name: 'User4'},
    {id: 5, name: 'User5'},
    {id: 6, name: 'User6'},
]
let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'HiThere'},
    {id: 3, message: 'Bye'},
    {id: 4, message: 'Uot tak uot'},
    {id: 5, message: 'Tak'},
    {id: 6, message: 'like this'},
]


const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={styles.massages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>

            </div>
        </div>
    );
};

export default Dialogs;