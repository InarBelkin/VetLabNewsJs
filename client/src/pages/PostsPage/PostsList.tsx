import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import s from './PostsList.module.css'
import {observer} from "mobx-react-lite";
import TagBar from "./TagBar";
import {Context} from "../../index";
import PostItem from "./PostItem";
import {fetchPosts} from "../../http/PostsAPI";

const PostsList = observer(() => {
    const {posts} = useContext(Context);
    useEffect(()=>{
        fetchPosts().then(data=>posts.setPosts(data));
    },[]);

    return (
        <Container className={s.allContainer}>
            <div>
                {posts.posts.map(p =>
                    <PostItem postItem={p}/>
                )}
            </div>
        </Container>
    );
});

export default PostsList;