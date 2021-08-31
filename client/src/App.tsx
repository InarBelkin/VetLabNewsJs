import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import { Spinner } from 'react-bootstrap';
import {userStore} from "./store/UserStore";

const App: React.FC = observer(() => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data => {

            userStore.setUser(data);
            userStore.setIsAuth(true);
        }).finally(()=>setLoading(false));
    }, [])

    if(loading){
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar/> {/*И как его нормально закрепить?*/}
            <AppRouter/>
        </BrowserRouter>
    );
});
export default App;
