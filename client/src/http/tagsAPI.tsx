import {$authHost, $host} from "./index";

export const createTag = async (type: any) =>{
    const {data}= await $authHost.post('/tags', type);
    return data;
}

export const fetchTags = async  ()=>{
    const {data}= await $host.get('/tags');
    return data;
}