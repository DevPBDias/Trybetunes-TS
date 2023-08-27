import { useEffect, useState } from "react"
import Header from "../components/Header"
import Loading from "../components/Loading";
import ProfileCard from "../components/ProfileCard";

function Profile() {
    const [userInfo, setUserInfo]: any = useState()

    useEffect(() => {
        const retrieveData = async () => {
            const getUserStorage: any = localStorage.getItem('user');
            const readUser = () => JSON.parse(getUserStorage);
            setUserInfo(await readUser())
        }
        retrieveData()
    }, [])

    return (
        <div>
            <Header />
            {
                !userInfo ? <Loading /> : <ProfileCard data={userInfo} />
            }
        </div>
    )
}

export default Profile