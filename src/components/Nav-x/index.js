import { NavLink, Link } from 'react-router-dom'
import Searcher from './searcher'
import { ReactComponent as ListButton } from './list-button.svg'
import abaLogoSrc from './aba-logo.png'
import Contents from './contents'
const Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm align-items-center flex-wrap navbar-light">
            <Searcher />
            <div className="container-fluid col-12">
                <Link to="/home" className="navbar-brand" samesite="strict">
                    <img 
                        src={abaLogoSrc}
                        alt=""
                        height="30px"
                        className="d-inline-block align-text-top"
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/home" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contents-modal">
                                <ListButton fill="white" height="15px" width="15px"/>
                                <span className="mx-2">Contenidos</span>
                            </button>
                            <Contents/>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/forum" activeClassName="active">Foro</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav