import React, from 'react';
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";



const MyPosts = () => {
    return (
        <div className={styles.posts}>
            My Posts
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <button>Remove post</button>
            <Posts message={'How are u?'}/>
            <Posts message={'WTF?'}/>
            <Posts message={'YO!?'}/>

        </div>

    );
};

export default MyPosts;