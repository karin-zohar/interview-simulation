import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export function AppNav() {
    return (
        <nav>
            <NavLink to="/" >home</NavLink>
            <NavLink to="/about" >about</NavLink>
        </nav>
    )
}