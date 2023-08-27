import { useEffect, useState } from "react";
import Logo from "./Logo"
import Loading from "./Loading";
import NavBar from "./Navbar";

const USER_KEY: string = 'user';

function Header() {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const retrieveData = async () => {
            const getUserStorage: any = localStorage.getItem(USER_KEY);
            const readUser = JSON.parse(getUserStorage);
            setUserName(readUser.name)
            setLoading(false)
        }
        retrieveData()
    }, [])

    return (
        <>
            {
                loading ? (<Loading />) : (
                    < header >
                        <div>
                            <Logo />
                            <div>
                                <img src="" alt="" className="" />
                                <p>{userName}</p>
                            </div>
                        </div>
                        <NavBar />
                    </header >
                )
            }
        </>
    )
}

export default Header