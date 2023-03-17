import React from 'react';
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";



const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi!', likesCount:5},
        {id: 2, message: 'HiThere', likesCount:12},
        {id: 3, message: 'Bye', likesCount:14},
    ]

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
                <Posts message={postsData[0].message} likeCounts={postsData[0].likesCount}/>



            </div>

        </div>

    );
};

export default MyPosts;