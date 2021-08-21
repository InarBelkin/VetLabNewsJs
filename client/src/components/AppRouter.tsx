import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {POSTSLIST_ROUTE} from "../utils/consts";
import {Context} from "../index";
import s from './AppRouter.module.css'
import classNames from 'classnames';
import {BreadcrumbItem, Container, Row,Button} from "react-bootstrap";
import LeftSideBar from "./LeftSideBar";
import PostsList from "../pages/PostsList";

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user);
    return (
        <div >
            <div className="container-fluid">
                <div className="row py-3">
                    <div className={classNames("col-1",s.cSide)} id="sticky-sidebar">
                        <LeftSideBar/>
                    </div>
                    <div className={classNames("col  order-2", s.cBasis)} id="main">
                       <PostsList/>
                    </div>
                </div>
            </div>


            {/*<div className={classNames("col-sm-2", s.Side)}></div>*/}
            {/*<div className={classNames("col-sm-10", s.CBasis)}> adfs</div>*/}

            {/*<div className={classNames("col-sm-10")} >*/}
            {/*    <Switch >*/}
            {/*        {user.isAuth && authRoutes.map(({path, Component}) =>*/}
            {/*            <Route path={path} component={Component} exact/>*/}

            {/*        )}*/}
            {/*        {publicRoutes.map(({path, Component}) =>*/}
            {/*            <Route path={path} component={Component} exact/>*/}
            {/*        )}*/}
            {/*        <Redirect to={POSTSLIST_ROUTE}/>*/}
            {/*    </Switch>*/}
            {/*</div>*/}
        </div>
    );
};

export default AppRouter;