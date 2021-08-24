import {$authHost, $host} from "./index";

export const createPost = async (type: any) =>{
    const {data}= await $authHost.post('/posts', type);
    return data;
}

export const fetchPosts = async  ()=>{
    const {data}= await $host.get('/posts');
    return data;
}

export const fetchOnePost = async  (id:string)=>{
    const {data}= await $host.get('/posts/'+ id);
    return data;
}