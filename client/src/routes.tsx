import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    CREATEPOST_ROUTE,
    LOGIN_ROUTE,
    POSTSLIST_ROUTE,
    REGISTRATION_ROUTE,
    SINGLEPOST_ROUTE
} from "./utils/consts";

import SinglePost from "./pages/SinglePostPage/SinglePost";
import Auth from "./pages/Auth";
import PostsPage from "./pages/PostsPage/PostsPage";
import CreatePostPage from "./pages/SinglePostPage/CreatePostPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CREATEPOST_ROUTE,
        Component: CreatePostPage
    }

]

export const publicRoutes = [
    {
        path: POSTSLIST_ROUTE,
        Component: PostsPage
    },
    {
        path: SINGLEPOST_ROUTE + '/:id',
        Component: SinglePost
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }

]