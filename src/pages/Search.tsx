import { useEffect, useState } from "react";
import Header from "../components/Header"
import SearchForm from "../components/SearchForm"

const USER_KEY: string = 'user';

function Search() {
    const [loading, setLoading] = useState(false);

    const getUserStorage: any = localStorage.getItem(USER_KEY);
    const readUser = JSON.parse(getUserStorage);

    useEffect(() => {
        if (readUser.name) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <div>
            <Header />
            <SearchForm
                loadingForm={loading}
            />
        </div>
    )
}

export default Search