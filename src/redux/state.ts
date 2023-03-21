import {rerenderIntierTree} from "../render";

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    name: string
    id: number
}
export type ProfilePageType = {
    postsData: PostType[]
}
export type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]

}
export type FriendsType = {
    img: string
    name: string
}
export type StateType = {
    dialogPage: DialogsPageType
    profilePage: ProfilePageType
    siteBar: FriendsType[]
}
export let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi!', likesCount: 5},
            {id: 2, message: 'HiThere', likesCount: 12},
            {id: 3, message: 'Bye', likesCount: 14},
        ]
    },
    dialogPage: {
        dialogsData: [
            {id: 1, name: 'User1'},
            {id: 2, name: 'User2'},
            {id: 3, name: 'User3'},
            {id: 4, name: 'User4'},
            {id: 5, name: 'User5'},
            {id: 6, name: 'User6'},
        ],
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'HiThere'},
            {id: 3, message: 'Bye'},
            {id: 4, message: 'Uot tak uot'},
            {id: 5, message: 'Tak'},
            {id: 6, message: 'like this'},
        ]
    },
    siteBar: [
        {
            name: 'Vasya',
            img: 'http://android-obzor.com/wp-content/uploads/2022/03/1601452265_13.jpg'
        },
        {
            name: "Kostya",
            img: 'http://android-obzor.com/wp-content/uploads/2022/03/1601452265_13.jpg'
        },
        {
            name: 'Masha',
            img: 'http://android-obzor.com/wp-content/uploads/2022/03/1601452265_13.jpg'
        },
    ]
}

export type AddPostType = (postMassage: string) => void
export const addPost: AddPostType = (postMassage) => {
    let newPost: PostType = {id: new Date().getDate(), message: postMassage, likesCount: 23}
    state.profilePage.postsData.push(newPost)
    rerenderIntierTree(state)
}