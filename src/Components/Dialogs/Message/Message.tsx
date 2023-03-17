import React, {FC} from "react";
import styles from "../Dialogs.module.css";

type MessageType = {
    message: string
}
export const Message: FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}