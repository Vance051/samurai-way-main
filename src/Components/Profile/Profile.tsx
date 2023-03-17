import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileType ={
    postsData: PostType[]
}

const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};

export default Profile;