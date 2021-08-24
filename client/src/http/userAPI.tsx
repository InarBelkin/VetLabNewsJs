import {$host,$authHost} from './index';
import jwt_decode from 'jwt-decode';
import {userModel} from "../store/Models";
export const registration= async (email:string,password:string)=>{
    const {data} = await $host.post('/auth/registration',{email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login= async (email:string,password:string)=>{
    const {data} = await $host.post('/auth/login',{email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const check= async ()=>{
    const {data} = await $authHost.post('/auth/check');
    localStorage.setItem('token', data.token);
    console.log(`токен сохранён: ${localStorage.getItem(('token'))}`);
    return jwt_decode(data.token) as userModel;
}