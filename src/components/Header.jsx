import PathConstants from "../routes/pathConstants.jsx"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <header>
        <h1>Witamy w GierSzopie!</h1>
        <div class="szukajka">        
        <input type="text" id="szukajka" placeholder="Fraza wyszukiwania..."/> 
        <b><img src="szukajka.png"/></b>
        </div>

        </header>
        <nav>
            <Link to={PathConstants.HOME}>Strona główna</Link>
            <Link to={PathConstants.GAMES}>Gry</Link>
            <Link to={PathConstants.ABOUT}>O nas</Link>
            <Link to={PathConstants.CONTACT}>Kontakt</Link>
        </nav>

    </>
  )
}

export default Header

