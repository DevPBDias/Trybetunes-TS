import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeFav, setActiveFav] = useState(false)
    const [activeProfile, setActiveProfile] = useState(false)

    const location = window.location.pathname

    useEffect(() => {
        if (location === '/search') {
            setActiveSearch(true)
        }
        if (location === '/favorites') {
            setActiveFav(true)
        }
        if (location === '/profile') {
            setActiveProfile(true)
        }
    }, [])


    return (
        <nav
            className="md:flex flex-row flex-nowrap items-center justify-items-center justify-between bg-gray-200 w-full"
        >
            <NavLink
                className={`hover:bg-green-500 ${activeSearch ? 'bg-green-500' : ''} font-bold py-7 w-1/3 text-center`}

                to="/search">Pesquisar</NavLink>
            <NavLink
                className={`hover:bg-green-500 ${activeFav ? 'bg-green-500' : ''} font-bold py-7 w-1/3 text-center`}
                to="/favorites">Favoritos</NavLink>
            <NavLink
                className={`hover:bg-green-500 ${activeProfile ? 'bg-green-500' : ''} font-bold py-7 w-1/3 text-center`}
                to="/profile">Perfil</NavLink>
        </nav>
    )
}

export default NavBar