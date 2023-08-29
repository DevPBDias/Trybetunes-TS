import { Link } from "react-router-dom"

type ArtistProps = {
    id: number
    artistName: string,
    collectionName: string,
    artworkUrl100: string,
}

function AlbumCard(props: ArtistProps) {
    const { artistName, collectionName, artworkUrl100, id } = props

    return (
        <Link
            to={`/album/${id}`}>
            <img
                className="w-full h-48 rounded-t-lg border-solid border-b-2 border-green-500"
                src={artworkUrl100} alt={collectionName} />
            <p
                className="text-sm text-center p-2"
            >{collectionName}</p>
            <p
                className="text-sm text-center font-bold p-2"
            >{artistName}</p>
        </Link>
    )
}

export default AlbumCard