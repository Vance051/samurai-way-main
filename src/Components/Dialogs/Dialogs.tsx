import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem, Message} from "./Dialog/DialogItem";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name={'Ivan'} id={1}/>
                <DialogItem name={'Dimon'} id={2}/>
                <DialogItem name={'Sanya'} id={3}/>
                <DialogItem name={'Alesya'} id={4}/>
                <DialogItem name={'Mashunya'} id={5}/>
                <DialogItem name={'HUliganes'} id={6}/>
            </div>
            <div className={styles.massages}>
                <Message message={'Hi'}/>
                <Message message={'WTF'}/>
                <Message message={'Im samurai'}/>
            </div>
        </div>
    );
};

export default Dialogs;