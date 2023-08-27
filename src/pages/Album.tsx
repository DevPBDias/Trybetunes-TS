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
            {
                !albumInfo ? <Loading /> : (
                    <div>
                        <img src={albumInfo.artworkUrl100} alt={albumInfo.collectionName} />
                        <p>{albumInfo.artistName}</p>
                        <p>{albumInfo.collectionName}</p>
                    </div>
                )
            }
            <MusicCard musicData={musicList} />
        </main>
    )
}

export default Album