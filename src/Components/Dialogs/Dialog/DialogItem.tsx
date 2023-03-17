import React, {FC} from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number

}

export const DialogItem: FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={`${styles.dialog} ${styles.active}`}>
            <div className={styles.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

