import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import s from './PostsList.module.css'
import {observer} from "mobx-react-lite";
const PostsList =observer (() => {
    return (
        <Container className={s.allContainer}>
            <Row>
                <Col md={9}>
основа
                </Col>
                <Col md={3}>
сайд
                </Col>
            </Row>
        </Container>
    );
});

export default PostsList;