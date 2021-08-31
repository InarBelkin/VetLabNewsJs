import {$authHost, $host} from "./index";

export const createPost = async (type: any) => {
    const {data} = await $authHost.post('/posts', type);
    return data;
}
export const updatePost = async (id: string, type: any) => {
    const {data} = await $authHost.patch('/posts/' + id, type);
    return data;
}

export const fetchPosts = async (page: number, limit: number, tagId?: string) => {
    const {data} = await $host.get('/posts', {
        params: {page, limit, tagId}
    });
    return data;
}

export const fetchOnePost = async (id: string) => {
    const {data} = await $host.get('/posts/' + id);
    return data;
}

export const deletePost = async (id: string) => {
    const {data} = await $authHost.patch('/posts/marktodel/' + id);
    return data;
}


export const cancelDeletePost = async (id: string) => {
    const {data} = await $authHost.patch('/posts/canceldel/' + id);
    return data;
}