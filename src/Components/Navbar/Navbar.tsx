import React from 'react';
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="src/Components#">
                        Profile
                    </a>
                </li>
                <li>
                    <a href="src/Components#">
                        Messages
                    </a>
                </li>
                <li>
                    <a href="src/Components#">
                        News
                    </a>
                </li>
                <li>
                    <a href="src/Components#">
                        Music
                    </a>
                </li>
                <li>
                    <a href="src/Components#">
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;