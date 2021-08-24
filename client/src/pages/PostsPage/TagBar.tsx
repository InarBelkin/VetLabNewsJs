import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../../index";
import s from './TagBar.module.css'
import {fetchTags} from "../../http/tagsAPI";

const TagBar = observer(() => {

    const {tags} = useContext(Context);

    useEffect(()=>{
        fetchTags().then(data=>tags.setTags(data));
    },[]);
    
    return (
        <ListGroup>
            {tags.tags.map(tag =>
                <ListGroup.Item
                    className={s.tagItem}
                    key={tag.id}
                    active={tag.id === tags.selectedTag.id}
                    onClick={() => tags.setSelectedTag(tag)}>
                    {tag.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TagBar;