import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export function AppNav() {
    return (
        <nav className='app-nav'>
            <NavLink to="/" >home</NavLink>
            <NavLink to="/about" >about</NavLink>
        </nav>
    )
}