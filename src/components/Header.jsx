import PathConstants from "../routes/pathConstants"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
        <header>
          <h1>Witamy w GierSzopie!</h1>
          <div className="szukajka">        
         <input type="text" id="szukajka" placeholder="Fraza wyszukiwania..."/> 
          <b><img src="szukajka.png"/></b>
        </div>

        </header>
        <nav>
            <Link to={PathConstants.HOME}>Strona główna</Link>
            <Link to={PathConstants.GAMES}>Gry</Link>
            <Link to={PathConstants.ABOUT}>O nas</Link>
            <Link to={PathConstants.CONTACT}>Kontakt</Link>
            <Link to={PathConstants.ACCOUNT}>Konto</Link>
        </nav>

    </>
  )
}

export default Header

