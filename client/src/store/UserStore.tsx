import {makeAutoObservable} from "mobx";
import {userModel} from "./Models";
import {observer} from "mobx-react-lite";



class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = new userModel(true);
        this._isEditMode = false;
        this._isAdmin = false;
        makeAutoObservable(this);
    }


    private _isAuth: boolean;
    private _isEditMode:boolean;
    private _user: userModel;
    private _isAdmin:boolean;


    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }

    setUser(user: userModel) {
        this._isAdmin = false;
        user.roles.map(r => {
            if (r.name === 'ADMIN') {this._isAdmin = true;} //надо как-то вынести имя админа
        });
        this._user = user;
    }

    setEditMode(mode:boolean){
        this._isEditMode = mode;
    }

    get isEditMode(){
        return this._isEditMode && this.isAdmin;    //сделать false, если не админ
    }

    get isAdmin() {
        return this._isAdmin;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}

export  const userStore = new UserStore();

