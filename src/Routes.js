import Accueil from "./components/Accueil"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signin from "./components/Signin"

export default [
    {path: '/', component: Accueil},
    {path: '/contact', component: Contact},
    {path: '/login', component: Login},
    {path: '/signin', component: Signin}
]