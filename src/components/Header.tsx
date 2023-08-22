import { useEffect, useState } from "react"
import Logo from "./Logo"
import { getUser } from "../services/userAPI";
import Loading from "./Loading";

function Header() {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const retrieveData = async () => {
            setLoading(true)
            const retrieveName: any = await getUser()
            setUserName(retrieveName.name)
            setLoading(false)
        }
        retrieveData()
    }, [])


    return (
        <>
            {
                loading ? (<Loading />) : (
                    < header >
                        <Logo />
                        <div>
                            <img src="" alt="" className="" />
                            <p>{userName}</p>
                        </div>
                    </header >
                )
            }
        </>
    )
}

export default Header