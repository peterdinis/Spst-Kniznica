import "./Shared.css";

interface Props {
    name: string;
}

function Header({name}: Props) {
    return (
        <>
            <h1 className="header">
                {name}
            </h1>    
        </>
    )
}

export default Header