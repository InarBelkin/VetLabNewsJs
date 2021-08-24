import {makeAutoObservable} from "mobx";
import {userModel} from "./Models";


export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = new userModel(true);
        this._isEditMode = false;
        makeAutoObservable(this);
    }


    private _isAuth: boolean;
    private _isEditMode:boolean;
    private _user: userModel;

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }

    setUser(user: userModel) {
        this._user = user;
    }

    setEditMode(mode:boolean){
        this._isEditMode = mode;
    }

    get isEditMode(){
        return this._isEditMode && this.isAdmin;    //сделать false, если не админ
    }

    get isAdmin() {
        this._user.roles.map(r => {
            if (r.name == 'ADMIN') return true; //надо как-то вынести имя админа
        });
        return false;

    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }




}