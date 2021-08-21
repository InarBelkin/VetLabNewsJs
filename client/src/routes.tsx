import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, POSTSLIST_ROUTE, REGISTRATION_ROUTE, SINGLEPOST_ROUTE} from "./utils/consts";
import PostsList from "./pages/PostsList";
import SinglePost from "./pages/SinglePost";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: POSTSLIST_ROUTE,
        Component: PostsList
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