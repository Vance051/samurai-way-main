import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink}  to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink}  to="/News">
                        News
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink}  to="/music">
                        Music
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink}  to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;