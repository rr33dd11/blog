import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {MainPage} from "../pages/MainPage";
import {PrivateRouter} from "./privateRouter";
import {LoginPage} from "../pages/LoginPage";
import {RegistrationPage} from "../pages/RegistrationPage";
import {CommunitiesPage} from "../pages/CommunitiesPage";
import {AuthorsPage} from "../pages/AuthorsPage";
import {ProfilePage} from "../pages/ProfilePage";
import {CommunityPage} from "../pages/CommunityPage.tsx";
import {CreatePostPage} from "../pages/CreatePostPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/login',
                element: <PrivateRouter isAuth={false}><LoginPage /></PrivateRouter>
            },
            {
                path: '/registration',
                element: <PrivateRouter isAuth={false}><RegistrationPage /></PrivateRouter>
            },
            {
                path: '/profile',
                element: <PrivateRouter isAuth={true}><ProfilePage /></PrivateRouter>
            },
            {
                path: '/communities',
                element: <CommunitiesPage />
            },
            {
                path: '/authors',
                element: <AuthorsPage />
            },
            {
                path: `/communities/:id`,
                element:<CommunityPage />
            },
            {
                path: '/post/create',
                element: <PrivateRouter isAuth={true}><CreatePostPage /></PrivateRouter>
            },
            {
                path: '/post/:id',
                element: <PostPage/>
            }
        ]
    }
]);
