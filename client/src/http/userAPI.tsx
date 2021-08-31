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
    const decodedToken = jwt_decode(data.token)
    console.log("вот токен расшифрованный");
    console.log(decodedToken);
    const tokenUser = decodedToken as userModel;
    console.log(tokenUser);
    //console.log(`токен сохранён: ${localStorage.getItem(('token'))}`);
    return  tokenUser;
}