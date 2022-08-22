import Chat from "../ChatBlock/Chat"
import Login from '../Login/Logins'

export const privateRoutes = [
    {path: '/chat', Component: Chat}
]
export const publickRoutes = [
    {path: '/login', Component: Login}
]