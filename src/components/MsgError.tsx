
type msgProps = {
    message: string
}

function MsgError({ message }: msgProps) {
    return (
        <p>{message}</p>
    )
}

export default MsgError