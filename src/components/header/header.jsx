import './Header.css'
import { Link } from 'react-router-dom'
// import reactLogo from './assets/react.svg'

export const Header = () => {

    return (
        <header className="Header">
            <div className='header-container'>
                {/* <img src={reactIcon} alt="react Icon" /> */}
                <h1 className='header-logo'>logo</h1>
{/* <img src={reactLogo} alt="logo" /> */}
                    <nav className="navbar">
                        <Link className="navbar-link" to="/">inicio</Link>
                        <Link className="navbar-link" to="/contacto">contacto</Link>
                        <Link className="navbar-link" to="/pokeapi">pokeApi</Link>
                    </nav>
            </div>
        </header>
    )
}

