import { useEffect, useState } from "react"
import Header from "../components/Header"
import ProfileForm from "../components/ProfileForm"
import { getUser } from "../services/userAPI"
import Loading from "../components/Loading"

function ProfileEdit() {
    const [userInfo, setUserInfo]: any = useState()

    useEffect(() => {
        const retrieveData = async () => {
            setUserInfo(await getUser())
        }
        retrieveData()
    }, [])

    return (
        <div>
            <Header />
            {
                !userInfo ? <Loading /> : <ProfileForm data={userInfo} />
            }
        </div>
    )
}

export default ProfileEdit