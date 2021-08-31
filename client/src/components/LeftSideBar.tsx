import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LeftSideBar.module.css'
import {POSTSLIST_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const LeftSideBar = observer(() => {

    return (
        <div className={s.cAll}>
            <div className="sticky-top">
                <div className="nav flex-column">
                    <NavLink to={POSTSLIST_ROUTE} className="nav-link">Новости</NavLink>
                </div>
            </div>
        </div>
    );
});

export default LeftSideBar;