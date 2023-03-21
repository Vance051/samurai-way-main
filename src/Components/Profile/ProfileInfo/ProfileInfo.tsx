import React from "react";
import styles from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.freewebheaders.com/wp-content/gallery/animals-size-800x200/royal-leader-penguins-in-ice-lake-banner_size-800x200.jpg"
                    alt="main-banner"
                    className={styles.banner}/>
            </div>
            <div className={styles.descriptionBlock}>ava+description</div>
        </div>
    )
}