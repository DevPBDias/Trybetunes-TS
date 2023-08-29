import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getMusics from "../services/musicsAPI"
import Header from "../components/Header"
import MusicCard from "../components/MusicCard"
import Loading from "../components/Loading"

function Album() {
    const { id } = useParams()
    const [musicList, setMusicList]: any = useState()
    const [albumInfo, setAlbumInfo]: any = useState()

    useEffect(() => {
        try {
            const retrieveMusic = async () => {
                const data: any[] = await getMusics(id)
                setMusicList(data)
                setAlbumInfo(await data[0])
            }
            retrieveMusic()
        } catch (error) {
            console.log('erro no album');
        }
    }, [])

    return (
        <main>
            <Header />
            <section
                className="flex relative flex-row flex-nowrap justify-items-center justify-around p-6"
            >
                {
                    !albumInfo ? <Loading /> : (
                        <div
                            className="border-solid border-2 fixed left-10 border-green-500 w-72 h-80 rounded-xl shadow m-6"
                        >
                            <img
                                className="w-full h-48 rounded-t-lg"
                                src={albumInfo.artworkUrl100} alt={albumInfo.collectionName} />
                            <p
                                className="text-sm text-center p-2"
                            >{albumInfo.artistName}</p>
                            <p
                                className="text-sm text-center font-bold p-2"
                            >{albumInfo.collectionName}</p>
                        </div>
                    )
                }
                <MusicCard musicData={musicList} />
            </section>
        </main>
    )
}

export default Album