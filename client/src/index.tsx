import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";

type LoadContextType =  {
    user:UserStore
}

export const Context = createContext<LoadContextType>(new UserStore());

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
