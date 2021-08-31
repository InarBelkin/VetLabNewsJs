import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {POSTSLIST_ROUTE} from "../utils/consts";
import s from './AppRouter.module.css'
import classNames from 'classnames';
import {BreadcrumbItem, Container, Row,Button} from "react-bootstrap";
import LeftSideBar from "./LeftSideBar";
import PostsList from "../pages/PostsPage/PostsList";
import {userStore} from "../store/UserStore";

const AppRouter = () => {
    console.log(userStore);
    return (
        <div >
            <div className={classNames('container-fluid')}>
                <div className="row">
                    <div className={classNames("col-1",s.cSide)} id="sticky-sidebar">
                        <LeftSideBar/>
                    </div>
                    <div className={classNames("col  order-2", s.cBasis)} id="main">
                        <Switch >
                            {userStore.isAuth && authRoutes.map(({path, Component}) =>
                                <Route path={path} component={Component} exact/>
                            )}
                            {publicRoutes.map(({path, Component}) =>
                                <Route path={path} component={Component} exact/>
                            )}
                            <Redirect to={POSTSLIST_ROUTE}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppRouter;