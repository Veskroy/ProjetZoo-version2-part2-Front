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
                liens des boutons
                </div>
            </nav>
        </header>
    )
}

Header.PropTypes = {
}

Header.defaultProps = {
}