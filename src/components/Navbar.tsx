import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to="/search">Pesquisar</NavLink>
            <NavLink to="/search">Favoritos</NavLink>
            <NavLink to="/profile">Perfil</NavLink>
        </nav>
    )
}

export default NavBar