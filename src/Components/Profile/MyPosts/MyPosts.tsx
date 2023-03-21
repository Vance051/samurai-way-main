import React from 'react';
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {AddPostType, PostType} from "../../../redux/state";


type MyPostsType = {
    postsData: PostType[]
    addPost: AddPostType
}

const MyPosts = (props: MyPostsType) => {

    let postsElements =
        props.postsData.map(post => <Posts key={post.id} message={post.message} likeCounts={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onButtonClickHandler = () => {
        let text = newPostElement.current?.value
        props.addPost(text ? text : '');
    }
    return (

        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={onButtonClickHandler}>Add post</button>
            </div>
            <div className={styles.posts}>
                {/*<Posts message={postsData[0].message} likeCounts={postsData[0].likesCount}/>*/}
                {postsElements}
            </div>

        </div>

    );
};

export default MyPosts;