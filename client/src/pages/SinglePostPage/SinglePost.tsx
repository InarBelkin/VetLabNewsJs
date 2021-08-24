import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {postModel} from "../../store/Models";
import s from './SinglePost.module.css'
import classNames from "classnames";
import {Col, Row} from "react-bootstrap";
import {Context} from "../../index";
import {useParams} from "react-router-dom";
import {fetchOnePost} from "../../http/PostsAPI";


const SinglePost = observer(() => {
    const {id} = useParams<{id:string}>();

    const [post, setPost] = useState({
        id: 'myid2', title: "заголовок 2", contentPreview: 'превью2',
        date: new Date(2020, 12, 14),
        content: "aadsdfasff", deleted: false,
        tags: [{id: "124", name: "заказы", description: ""},
            {id: "125", name: "праздники", description: ""}]
    });

     const {user} = useContext(Context);
    useEffect(() => {

        fetchOnePost(id).then(data=>{setPost(data)});
    }, [])

    return (
        <div className={classNames('container',)}>
            <div className='row'>
                <div className='column col-sm-2'></div>
                {
                    user.isEditMode ?
                        <div className={classNames('col-sm', s.centralColumn)}>
                            <form>
                                <p>Заголовок</p>
                                <input className={s.PTitle} type=""
                                       value={post.title}
                                       name="title"
                                       onChange={() => {
                                       }}/>
                                <p>Превью статьи</p>
                                <textarea name="content" className={s.PContent} value={post.contentPreview}
                                          onChange={() => {
                                          }}/>
                                <p>Превью статьи</p>
                                <textarea name="content" className={s.PContent} value={post.content}
                                          onChange={() => {
                                          }}/>
                            </form>
                        </div>
                        :
                        <div className={classNames('col-sm', s.centralColumn)}>
                            <div className={s.Title}>{post.title}</div>
                            <div className={classNames(s.tagList)}>
                                {post.tags?.map(t =>
                                    <div className={s.tagBlock}>{t.name}</div>)
                                }
                            </div>
                            <div>{post.contentPreview}</div>
                            <div>{post.content}</div>
                        </div>
                }

                <div className='col-sm-2'></div>
            </div>
        </div>
    );
});

export default SinglePost;