import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, useHistory} from "react-router-dom";
import s from './NavBar.module.css'
import {Button, Nav, Navbar, Form} from "react-bootstrap";

import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE} from "../utils/consts";
import classNames from "classnames";
import {userModel} from "../store/Models";
import {userStore} from "../store/UserStore";

const NavBar = observer(() => {
    const history = useHistory();


    const logOut = () => {
        userStore.setUser(new userModel(true));
        userStore.setIsAuth(false);
        localStorage.setItem('token', '');  //говно

    }


    return (
        <nav className={classNames("navbar navbar-expand-lg navbar-light bg-light ", s.forAll)}>
            <div className="navbar-brand" style={{margin: 0, padding: 0}}>
                <NavLink to={"/"} className={s.LogoStyle}>Ивановская ветлаборатория</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={"navbar-nav" + ' ' + s.forUL}>
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link">Список</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/register"} className="nav-link">Регистрация</NavLink>
                    </li>
                </ul>
            </div>

            <div>Приветствую, {userStore.user.email}</div>
            {userStore.isAuth ?
                <>
                    {userStore.isAdmin ? <> <input type="checkbox" name="myInput" className={s.paddington}
                                              defaultChecked={userStore.isEditMode}
                                              onChange={()=>userStore.setEditMode(!userStore.isEditMode)}
                            />
                        <>Режим редактирования</>
                    </> : <></>}
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-dark mx-2" onClick={() => logOut()}>Выйти</button>
                    </div>

                </>
                :
                <>
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-dark "
                                onClick={() => history.push(LOGIN_ROUTE)}> Авторизация
                        </button>
                    </div>
                </>


            }


        </nav>


    );
});

export default NavBar;