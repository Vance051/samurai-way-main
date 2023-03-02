import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.freewebheaders.com/wp-content/gallery/animals-size-800x200/royal-leader-penguins-in-ice-lake-banner_size-800x200.jpg"
                    alt="main-banner"
                    className={styles.banner}/>
            </div>
            <div>
                <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg"
                     alt="avatar"
                     className={styles.avatar}/>
                <div>
                    Description
                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;