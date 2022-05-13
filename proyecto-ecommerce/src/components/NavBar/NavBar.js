import CartWidget from './../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <Link className='link' to='/'>
                        <p className="navbar-brand ps-3">WE GO GYM <br/> MUSCLE SHOP</p>
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='link' to='/'>
                                    <p className="nav-link text-white" aria-current="page">Inicio</p>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Productos </a>
                                    <ul className="dropdown-menu bg-dark"aria-labelledby="navbarDropdownMenuLink">
                                    <li className="nav-item">
                                        <Link className='link' to='/'>
                                            <p className="nav-link text-white">Pre Entreno</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='link' to='/'>
                                            <p className="nav-link text-white">Creatina</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='link' to='/'>
                                            <p className="nav-link text-white">Proteina</p>
                                        </Link>
                                    </li>
                                    </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='link' to='/about'>
                                    <p className="nav-link text-white">Quiénes somos</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;