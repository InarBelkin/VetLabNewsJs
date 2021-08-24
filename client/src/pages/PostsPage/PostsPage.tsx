import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import s from "./PostsPage.module.css";
import TagBar from "./TagBar";
import PostsList from "./PostsList";

const PostsPage = () => {
    return (
        <Container className={s.allContainer}>
            <Row className='mt-2'>
                <Col md={9}>
                    <PostsList/>
                </Col>
                <Col md={3}>
                    <TagBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default PostsPage;