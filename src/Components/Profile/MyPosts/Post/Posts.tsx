import React, {FC} from 'react';
import styles from './Posts.module.css'

export type PostsPropsType = {
    message: string
}
const Posts:FC<PostsPropsType> = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg"
                 alt="avatar"
            />
            {props.message}
            <div>
                <span>Like</span>
                <span>Dislike</span>
            </div>
        </div>
    );
};

export default Posts;