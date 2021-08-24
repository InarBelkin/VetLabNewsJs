import React, {useContext, useState} from 'react';
import {Container, Form, Card, Button, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {userModel} from "../store/Models";


const Auth: React.FC = observer (() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [message, setMessage] = useState<string|null>(null);

    const click = async ()=>{
        try {
            let data:userModel;
            if(isLogin){
                data = await login(email!,password!) as userModel;
                setMessage(`Вы успешно авторизовались как ${data.email}` );
            }
            else {
                data = await registration(email!,password!) as userModel;
                setMessage(`Вы успешно зарегистрировались как ${data.email}`);
            }
            user.setUser(data);
            user.setIsAuth(true);
            user.setEditMode(false);
        }
        catch (e){
            setMessage(e.response.data.message);
        }

    }


    return (
        <Container className="d-flex justify-content-center align-items-center "
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : 'Регистрация'}</h2>
                <div>{message}</div>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-2" value = {email}
                                  onChange={e=>setEmail(e.target.value)}
                                  placeholder="Введите email...">
                    </Form.Control>
                    <Form.Control className="mt-2" value = {password} type='password'
                                  onChange={e=>setPassword(e.target.value)}
                                  placeholder="Введите пароль...">
                    </Form.Control>
                    {
                        isLogin ?
                            <Row className="d-flex justify-content-between mt-3"> {/*оно не работает*/}
                                <div>
                                    <NavLink to={REGISTRATION_ROUTE}>К регистрации </NavLink>
                                </div>
                                <Button variant={"outline-success"} onClick={click}>
                                    Войти
                                </Button>
                            </Row>
                            :
                            <Row className="d-flex justify-content-between mt-3"> {/*оно не работает*/}
                                <div>
                                    <NavLink to={LOGIN_ROUTE}>К авторизации </NavLink>
                                </div>
                                <Button variant={"outline-success"} onClick={click}>
                                    Зарегистрироваться
                                </Button>
                            </Row>
                    }
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;