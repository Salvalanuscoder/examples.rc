import './Header.css'
// import reactLogo from './assets/react.svg'

export const Header = () => {

    return (
        <header className="Header">
            <div className='header-container'>
                {/* <img src={reactIcon} alt="react Icon" /> */}
                <h1 className='header-logo'>logo</h1>
{/* <img src={reactLogo} alt="logo" /> */}
                    <nav className="navbar">
                        <a className="navbar-link" href="#">shop</a>
                        <a className="navbar-link" href="#">about us</a>
                        <a className="navbar-link" href="#">contact us</a>
                    </nav>
            </div>
        </header>
    )
}

