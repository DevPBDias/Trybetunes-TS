
type TextProps = {
    text: string,
}

function UserText({ text }: TextProps) {
    return (
        <p
            className="italic font-weigth-200"
        >
            {text}
        </p>
    )
}

export default UserText