import React, {useContext, useEffect, useState} from 'react';
import {postModel, tagModel} from "../../store/Models";
import {Button, Dropdown, Form, Row} from "react-bootstrap";
import s from "./EditPostForm.module.css";
import TextareaAutosize from "react-textarea-autosize";
import {observer} from "mobx-react-lite";
import {Col} from 'react-bootstrap';
import {fetchTags} from "../../http/tagsAPI";
import {tagStore} from "../../store/TagsStore";

interface EditPostProps {
    post: postModel;
    onToggle(post: Partial<postModel>): void;
}

const EditPostForm = observer((props: EditPostProps) => {
    const [title, setTitle] = useState(props.post.title);
    const [preview, setPreview] = useState(props.post.contentPreview);
    const [content, setContent] = useState(props.post.content);
    const [postTags, setPostTags] = useState(props.post.tags);

    useEffect(() => {
        fetchTags().then(data => tagStore.setTags(data));
    }, []);

    const addTag = (data: tagModel) => {
        setPostTags([...postTags, data]);
    }

    const deleteTad = (id: string) => {
        setPostTags(postTags.filter(i => i.id !== id));
    }
    return (
        <>
            <Form.Group className="mb-3" controlId="validation">
                <Dropdown>
                    <Dropdown.Toggle>Выберите тег</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {tagStore.tags.map(t =>
                            <Dropdown.Item onClick={()=>addTag(t)}
                            >{t.name}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                {
                    postTags.map(t =>
                        <Row>
                            <Col md={4}>
                                <div className={s.tagBlock}>{t.name}</div>
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => deleteTad(t.id)}
                                        variant={"outline-danger"}>Удалить</Button>
                            </Col>
                        </Row>
                    )
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="validation">
                <Form.Label>Заголовок</Form.Label>
                <Form.Control placeholder="Заголовок"
                              value={title}
                              onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Превью статьи</Form.Label>
                <TextareaAutosize className={s.expandForm}
                                  value={preview}
                                  onChange={e => setPreview(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Остальная статья</Form.Label>
                <TextareaAutosize className={s.expandForm}
                                  value={content}
                                  onChange={e => setContent(e.target.value)}
                />
            </Form.Group>

            <Button onClick={() => props.onToggle(
                {
                    title: title,
                    contentPreview: preview,
                    content: content,
                    tags:postTags
                })}>Подтвердить</Button>
        </>

    );
});

export default EditPostForm;