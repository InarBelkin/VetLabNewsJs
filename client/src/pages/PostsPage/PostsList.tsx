import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import s from './PostsList.module.css'
import {observer} from "mobx-react-lite";
import PostItem from "./PostItem";
import {fetchPosts} from "../../http/PostsAPI";
import {postStore} from "../../store/PostsStore";
import {tagStore} from "../../store/TagsStore";

const PostsList = observer(() => {

    // useEffect(() => {
    //     fetchPosts(posts.Page, posts.Limit).then(data => {
    //         posts.setPosts(data.data);
    //         posts.setTotalCount(data.pageCount);
    //     });
    // }, []);

    useEffect(() => {
        fetchPosts(postStore.Page, postStore.Limit, tagStore.selectedTag?.id).then(data=>{
            postStore.setPosts(data.data);
            postStore.setTotalCount(data.pageCount);
        });
    },[postStore.Page, tagStore.selectedTag]);

    return (
        <Container className={s.allContainer}>
            <div>
                {postStore.posts.map(p =>
                    <PostItem postItem={p}/>
                )}
            </div>
        </Container>
    );
});

export default PostsList;