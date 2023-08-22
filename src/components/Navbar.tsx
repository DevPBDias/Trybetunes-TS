import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to="/search">Pesquisar</NavLink>
            <NavLink to="/favorites">Favoritas</NavLink>
            <NavLink to="/profile">Perfil</NavLink>
        </nav>
    )
}

export default NavBar