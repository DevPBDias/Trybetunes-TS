
type ImageProps = {
    image: string,
    nameImg: string
}

function UserImage({ image, nameImg }: ImageProps) {
    return (
        <img
            className="w-28 h-28 m-4"
            src={image} alt={nameImg} />
    )
}

export default UserImage