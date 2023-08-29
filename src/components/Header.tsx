import { useEffect, useState } from "react";
import userIcon from "../assets/userIcon.png"
import Loading from "./Loading";
import NavBar from "./Navbar";
import Logo from "./Logo";

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
                    <header
                        className="font-mono md:flex flex-col items-center justify-items-center bg-white rounded-xl"
                    >
                        <div
                            className="md:flex flex-row flex-nowrap items-center justify-items-center justify-between bg-green-700 w-full"
                        >
                            <div
                                className="ml-20 mb-6"
                            >
                                <Logo />
                            </div>
                            <div
                                className="mr-20 flex flex-row p-2 justify-items-center items-center bg-white rounded-full"
                            >
                                <img
                                    className="w-8 h-8 mr-2"
                                    src={userIcon} alt="userIcon" />
                                <p
                                    className="font-bold"
                                >{userName}</p>
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