import {$authHost, $host} from "./index";
import {tagModel} from "../store/Models";

export const createTag = async (type: Partial<tagModel>) =>{
    const {data}= await $authHost.post('/tags', type);
    return data;
}

export const fetchTags = async  ()=>{
    const {data}= await $host.get('/tags');
    return data;
}