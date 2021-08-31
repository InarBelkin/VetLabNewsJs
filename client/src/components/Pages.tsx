import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";

import {Pagination} from "react-bootstrap";
import {postStore} from "../store/PostsStore";

const Pages = observer(() => {

    const pages: number[] = [];
    for (let i = 1; i <= postStore.TotalCount; i++) {
        pages.push(i);
    }
    return (
        <Pagination>
            {
                pages.map(page =>
                    <Pagination.Item
                        active={postStore.Page === page}
                        onClick={()=>postStore.setPage(page)}
                    >{page}</Pagination.Item>
                )}
        </Pagination>
    );
});

export default Pages;