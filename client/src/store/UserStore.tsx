import {makeAutoObservable} from "mobx";


export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {}
        makeAutoObservable(this);
    }

    private _isAuth: boolean;
    private _user: any;

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }

    setUser(user: any) { //изменить any на тип
        this._user = user;
    }

    get isAuth(){
        return this._isAuth;
    }

    get user(){
        return this._user;
    }

}