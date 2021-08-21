import React from 'react';
import {Container, Form, Card, Button, Row} from "react-bootstrap";
import {NavLink,useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth:React.FC = () => {
    const location = useLocation();
const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location);
    return (
        <Container className="d-flex justify-content-center align-items-center "
        style={{height: window.innerHeight-54}}>
            <Card style={{width:600}} className ="p-5">
                <h2 className="m-auto">{isLogin?"Авторизация":'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className = "mt-2"
                    placeholder="Введите email...">
                    </Form.Control>
                    <Form.Control className = "mt-2"
                                  placeholder="Введите пароль...">
                    </Form.Control>
                    {
                        isLogin?
                            <Row className="d-flex justify-content-between mt-3"> {/*оно не работает*/}
                                <div>
                                    <NavLink to={REGISTRATION_ROUTE}>К регистрации </NavLink>
                                </div>
                                <Button  variant={"outline-success"}>
                                    Войти
                                </Button>
                            </Row>
                            :
                            <Row className="d-flex justify-content-between mt-3"> {/*оно не работает*/}
                                <div>
                                    <NavLink to={LOGIN_ROUTE}>К авторизации </NavLink>
                                </div>
                                <Button  variant={"outline-success"}>
                                    Зарегистрироваться
                                </Button>
                            </Row>
                    }



                </Form>
            </Card>
        </Container>
    );
};

export default Auth;