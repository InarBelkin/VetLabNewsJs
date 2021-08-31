import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {postModel} from "../../store/Models";
import s from './SinglePost.module.css'
import classNames from "classnames";
import {Col, Row, Form, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {createPost, fetchOnePost, updatePost} from "../../http/PostsAPI";
import TextareaAutosize from 'react-textarea-autosize';
import EditPostForm from "./EditPostForm";
import {userStore} from "../../store/UserStore";

const SinglePost = observer(() => {
    const {id} = useParams<{ id: string }>();

    const [post, setPost] = useState(new postModel());
    const [loadPost, setLoadPost] = useState(true);

    useEffect(() => {
        fetchOnePost(id).then(data => {
            setPost(data);
        }).finally(() => setLoadPost(false));
    }, [])

    const updPost=(data:Partial<postModel>)=>{
        updatePost(post.id, data ).then(data=>{alert("пост успешно изменён")});
    }

    return (
        <div className={classNames('container',)}>
            <div className='row'>
                <div className='column col-sm-2'></div>
                <div className={classNames('col-sm', s.centralColumn)}>
                    {
                        userStore.isEditMode ?
                            <>
                                {
                                    loadPost?
                                        <div>Пост загружается</div>
                                        :
                                        <>
                                            <div>Редактирование поста</div>
                                            <EditPostForm post={post} onToggle={data=>updPost(data)}/>
                                        </>
                                }
                            </>
                            :
                            <>
                                <div className={s.Title}>{post.title}</div>
                                <div className={classNames(s.tagList)}>
                                    {post.tags?.map(t =>
                                        <div className={s.tagBlock}>{t.name}</div>)
                                    }
                                </div>
                                <div className={s.slashN}>{post.contentPreview}</div>
                                <div className={s.slashN}>{post.content}</div>
                            </>
                    }
                </div>
                <div className='col-sm-2'></div>
            </div>
        </div>
    );
});

export default SinglePost;