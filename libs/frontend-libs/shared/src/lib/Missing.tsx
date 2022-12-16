type Props = {
    name: string;
}

function Missing({name}: Props) {
    return (
        <>
            <p className="text-red-700 text-2xl font-bold">{name}</p>
        </>
    )
}

export default Missing