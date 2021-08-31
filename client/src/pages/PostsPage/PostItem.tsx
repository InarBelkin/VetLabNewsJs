import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Row} from "react-bootstrap";
import s from './PostItem.module.css'
import dayjs from "dayjs";
import {postModel} from "../../store/Models";
import {SINGLEPOST_ROUTE} from '../../utils/consts';
import {NavLink} from 'react-router-dom';
import {cancelDeletePost, deletePost} from "../../http/PostsAPI";
import {userStore} from "../../store/UserStore";

type postItemProps = {
    postItem: postModel;
}

const PostItem: React.FC<postItemProps> =
    observer(({postItem}) => {

        const delThisPost = () => {
            deletePost(postItem.id).then(d => {
               postItem.deleted = true;
            })
        }

        const cancelDelThisPost = () => {
            cancelDeletePost(postItem.id).then(d => {
                postItem.deleted = false;
            })
        }
        return (
            <div className={s.postBlock}>
                <p>
                    <Row className="d-flex">
                        {postItem.tags.map(t =>
                            <Col className={s.tagBlock}>{t.name}</Col>)
                        }
                    </Row>
                </p>
                <p className={s.rightPart}> {dayjs(postItem.date).format('DD.MM.YYYY')}</p>
                <NavLink to={SINGLEPOST_ROUTE + '/' + postItem.id} className={s.postTitle}>{postItem.title}</NavLink>
                <div>
                    {userStore.isEditMode ?
                        <p>{postItem.deleted ? <Button onClick={() => cancelDelThisPost()}>Отменить удаление</Button>
                            : <Button onClick={() => delThisPost()}
                                      variant="danger">Удалить</Button>}
                        </p>
                        : null
                    }
                </div>
                <p className={s.contPreview}>{postItem.contentPreview}</p>

            </div>
        );
    });

export default PostItem;