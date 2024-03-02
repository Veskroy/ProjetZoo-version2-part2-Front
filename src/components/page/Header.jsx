// import PropTypes from 'prop-types';

import { Link } from "wouter";

import { loginUrl, logoutUrl, registerUrl } from "../../services/api/WildWonderHub";
import { useAccount, useRolesUser } from "../../hooks/getAccount";
import { useState } from "react";

// props => {}
export default function Header() {
    const { userContext, isLoggedIn, errorLogin } = useAccount();
    const { isAdmin, isUser, isEmployee } = useRolesUser();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    console.log('roles from header: ', isAdmin, isUser, isEmployee);
    console.log('user from header: ', userContext, isLoggedIn);
    return (
        <header className="header">
            <div className="main-infos">
                <Link href="/">
                    <img src="/public/assets/images/logos/LogoSAE_Zoo.png" className="logo" alt="logo"/>
                    Zoo de la Palmyre
                </Link>
            </div>
            <nav className={`nav-links ${isOpen === true ? 'open' : ''}`}>
                <div>
                    <Link href="/" className="menu-link">Accueil</Link>
                    <a href="" className="menu-link">Liste des animaux</a>
                    <a href="" className="menu-link">Evènements</a>

                    {isLoggedIn && userContext && !errorLogin ? (
                        <>
                            <Link href={() => {}} className="btn button-secondary">Réserver</Link>
                            <Link href={logoutUrl()} className="btn button-primary">Se déconnecter</Link>
                            {isAdmin && (
                                <Link href="/admin" className="btn button-admin">Admin</Link>
                            )}
                        </>
                    ) : (
                        <>
                            <Link href={loginUrl()} className="btn button-secondary">Se connecter</Link>
                            <Link href={registerUrl()} className="btn button-primary">S'inscrire</Link>
                        </>
                    )}
                </div>
            </nav>

            <div id="hamburger-menu" onClick={toggleOpen}>
                <a className="btn button-primary">Menu</a>
            </div>

        </header>
    )
}

Header.propTypes = {
}

Header.defaultProps = {
}