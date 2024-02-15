import PropTypes from 'prop-types';

// props => {}
export default function Header() {
    return (
        <header className="header">
            <div className="main-infos">
                Zoo de la Palmyre
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