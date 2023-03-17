import React from 'react';
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {PostsDataType} from "../../../index";

type MyPostsType ={
    postsData:PostsDataType
}

const MyPosts = (props:MyPostsType) => {


    let postsElements =props.postsData.map(post=><Posts message={post.message} likeCounts={post.likesCount}/>)

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
                {/*<Posts message={postsData[0].message} likeCounts={postsData[0].likesCount}/>*/}
                {postsElements}



            </div>

        </div>

    );
};

export default MyPosts;