import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendsType} from "../../redux/state";

type NavBarType = {
    state: FriendsType[]
}
const Navbar = (props: NavBarType) => {
    let friend = props.state.map(f => <Friends key={f.name} img={f.img} name={f.name}/>)
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to="/News">
                        News
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to="/music">
                        Music
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink activeClassName={styles.activeLink} to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
            <div>
                <span>FRIENDS</span>
                <div className={styles.wrap}>
                    {friend}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;