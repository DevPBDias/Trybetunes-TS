
type msgProps = {
    message: string
}

function MsgError({ message }: msgProps) {
    return (
        <p
            className="font-mono text-center text-sm p-2 my-2 text-red-500 rounded-lg"
        >{message}</p>
    )
}

export default MsgError