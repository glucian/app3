import "./header.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">Filmow</Link>
            <Link className="salvos" to="/favoritos">Salvos</Link>
            
        </header>
    )
}