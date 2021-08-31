import React from 'react';
import {postModel} from "../../store/Models";
import EditPostForm from "./EditPostForm";
import {createPost} from "../../http/PostsAPI";

const CreatePostPage = () => {

    const addPost =(data:Partial<postModel>)=>{
        createPost(data).then(e=>{
            alert(`Пост успешно сохранён:\n${e}`);
        })

    }
    return (
        <div>
            <div>Создание поста</div>
            <EditPostForm post={new postModel()} onToggle={data=>addPost(data)}/>
        </div>
    );
};

export default CreatePostPage;