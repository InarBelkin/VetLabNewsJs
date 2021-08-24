import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import PostsStore from "./store/PostsStore";
import TagsStore from "./store/TagsStore";
import cors from 'cors';
type LoadContextType =  {
    user:UserStore
    posts:PostsStore
    tags:TagsStore
}

export const Context = createContext<LoadContextType>({
    user: new UserStore(),
    posts : new PostsStore(),
    tags: new TagsStore()
});

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        posts : new PostsStore(),
        tags: new TagsStore()
    }}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
