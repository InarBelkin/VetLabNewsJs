import React, {useContext} from 'react';
import {Context} from "../index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'
import {Button, Nav, Navbar, Form} from "react-bootstrap";
import {Container} from 'react-bootstrap';
import {POSTSLIST_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar =observer( () => {
    const {user} = useContext(Context);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            {user.isAuth ?
                <>
                    <Form.Check type="checkbox" label="Check me out"/>
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-dark mx-2">Выйти</button>
                    </div>

                </>
                :
                <>
                    <div className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-dark " onClick={()=> user.setIsAuth(true)}> Авторизация</button>
                    </div>
                </>


            }


        </nav>


    );
});

export default NavBar;