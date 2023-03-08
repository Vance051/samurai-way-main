import React from 'react';
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";


const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={styles.posts}>
                <Posts message={'How are u?'} likeCounts={5} disLikeCounts={10}/>
                <Posts message={'WTF?'} likeCounts={20} disLikeCounts={500}/>
                <Posts message={'YO!?'} likeCounts={25} disLikeCounts={1}/>
            </div>

        </div>

    );
};

export default MyPosts;