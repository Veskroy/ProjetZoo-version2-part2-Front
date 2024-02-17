/* eslint-disable react/no-unescaped-entities */
// import PropTypes from 'prop-types';

import { Link } from "wouter";

import { loginUrl, registerUrl } from "../../services/api/WildWonderHub";

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
                    <Link href="/" className="menu-link">Accueil</Link>
                    <a href="" className="menu-link">Liste des animaux</a>
                    <a href="" className="menu-link">Evènements</a>
                    <a href={loginUrl()} className="btn button-secondary">Se connecter</a>
                    <a href={registerUrl()} className="btn button-primary">S'inscrire</a>
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
}

Header.defaultProps = {
}