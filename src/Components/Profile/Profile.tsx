import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, PostType} from "../../redux/state";

type ProfileType = {
    postsData: PostType[]
    addPost: AddPostType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;