import React from "react";
import {FriendsType} from "../../../redux/state";
import styles from './Friends.module.css'
type Friend = FriendsType
export const Friends = (props:Friend) => {
    return (
        <div className={styles.friend}>
            <img src={props.img} alt="ava"/>
            <p>{props.name}</p>
        </div>
    )
}