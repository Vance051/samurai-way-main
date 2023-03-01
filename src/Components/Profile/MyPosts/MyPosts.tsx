import React from 'react';
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";



const MyPosts = () => {
    return (
        <div className={styles.posts}>
            My Posts
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <button>Remove post</button>
            <Posts message={'How are u?'} likeCounts={5} disLikeCounts={10}/>
            <Posts message={'WTF?'} likeCounts={20} disLikeCounts={500}/>
            <Posts message={'YO!?'} likeCounts={25} disLikeCounts={1}/>

        </div>

    );
};

export default MyPosts;