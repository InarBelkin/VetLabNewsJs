import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Button, Col, Row} from "react-bootstrap";
import s from './PostItem.module.css'
import dayjs from "dayjs";
import {postModel} from "../../store/Models";
import {SINGLEPOST_ROUTE} from '../../utils/consts';
import {NavLink} from 'react-router-dom';

type postItemProps = {
    postItem: postModel;
}

const PostItem: React.FC<postItemProps> =
    observer(({postItem}) => {
        const {user} = useContext(Context);

        const delButton = () => {
            return user.isEditMode ?
                <p><Button variant="secondary">Удалить</Button></p>
                : null;
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
                <p className={s.rightPart } > {dayjs(postItem.date).format('DD.MM.YYYY')}</p>
                <NavLink to={SINGLEPOST_ROUTE + '/' + postItem.id} className={s.postTitle}>{postItem.title}</NavLink>
                <div>
                    {delButton()}
                </div>
                <p>{postItem.contentPreview}</p>
                <div></div>
            </div>
        );
    });

export default PostItem;