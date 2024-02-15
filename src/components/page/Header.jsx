import PropTypes from 'prop-types';

// props => {}
export default function Header() {
    return (
        <header className="header">
            <div className="main-infos">
                <a href="">
                    <img src="/public/assets/images/logos/LogoSAE_Zoo.png" className="logo" alt="logo"/>
                    Zoo de la Palmyre
                </a>
            </div>
            <nav className="ul-links">
                <div>
                    <a href="" className="menu-link">Accueil</a>
                    <a href="" className="menu-link">Liste des animaux</a>
                    <a href="" className="menu-link">Evènements</a>
                </div>
            </nav>
        </header>
    )
}

Header.PropTypes = {
}

Header.defaultProps = {
}