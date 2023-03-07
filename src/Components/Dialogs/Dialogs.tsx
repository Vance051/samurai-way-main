import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={`${styles.dialog} ${styles.active}`}>
                    <div className={styles.dialog}>
                        <NavLink to={'dialogs/1'}>Ivan</NavLink>
                    </div>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'dialogs/2'}>Dimon </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'dialogs/3'}>Sanya</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'dialogs/4'}> Alesya </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'dialogs/5'}> Mashunya </NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'dialogs/6'}> HUliganes </NavLink>
                </div>
            </div>
            <div className={styles.massages}>
                div <div className={styles.message}>Hi</div>
                div <div className={styles.message}>WTF</div>
                div <div className={styles.message}>Im samurai</div>
            </div>
        </div>
    );
};

export default Dialogs;