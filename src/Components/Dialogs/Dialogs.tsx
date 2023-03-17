import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropType = {
    state: DialogsPageType
   }
const Dialogs = (props: DialogsPropType) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>)

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