import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, Form, ListGroup, Modal} from "react-bootstrap";
import s from './TagBar.module.css'
import {createTag, fetchTags} from "../../http/tagsAPI";
import {useHistory} from "react-router-dom";
import {CREATEPOST_ROUTE} from "../../utils/consts";
import {tagStore} from "../../store/TagsStore";
import {userStore} from "../../store/UserStore";

const TagBar = observer(() => {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchTags().then(data => tagStore.setTags(data));
    }, []);

    const setEmpty = () => {
        setName("");
        setDescription("")
    }

    const addTag = () => {
        if (name.length > 1) {
            createTag({name: name, description: description}).then(data => setEmpty());
            setShowModal(false);
        } else {
            alert("Задайте имя тега");
        }

    }

    return (
        <>
            <ListGroup>
                <ListGroup.Item className={s.tagItem}
                                active={tagStore.selectedTag === null}
                                onClick={() => tagStore.setSelectedTag(null)}
                >
                    Все категории
                </ListGroup.Item>
                {tagStore.tags.map(tag =>
                    <ListGroup.Item
                        className={s.tagItem}
                        key={tag.id}
                        active={tag.id === tagStore.selectedTag?.id}
                        onClick={() => tagStore.setSelectedTag(tag)}>
                        {tag.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
            {
                userStore.isEditMode ?
                    <>

                        <p><Button className="mt-2"
                                   onClick={() => setShowModal(!showModal)} variant={"secondary"}>Добавить тег</Button>
                        </p>
                        <Button
                            onClick={() => history.push(CREATEPOST_ROUTE)} variant={"secondary"}>Добавить
                            страницу</Button>

                        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Добавление тега</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <p>Название тега:</p>
                                    <Form.Control
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder={"Введите название тега"}/>
                                    <p>Описание:</p>
                                    <Form.Control
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        placeholder={"Описание тега"}/>
                                </Form>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => {
                                    setShowModal(false);
                                    setEmpty();
                                }}>
                                    Отмена
                                </Button>
                                <Button variant="primary" onClick={() => addTag()}>
                                    Добавить
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    :
                    <></>
            }


        </>
    );
});

export default TagBar;