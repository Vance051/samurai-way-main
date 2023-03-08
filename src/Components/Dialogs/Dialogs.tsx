import React, {FC} from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
const DialogItem: FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <div className={styles.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}
type MessageType = {
    message: string
}
const Message: FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>

    )
}

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