// import PropTypes from 'prop-types';

import { Link } from "wouter";

import {adminUrl, loginUrl, logoutUrl, registerUrl} from "../../services/api/WildWonderHub";
import { useAccount, useCurrentUserId, useRolesUser } from "../../hooks/getAccount";
import { useState } from "react";
import UserAvatar from "../user/userAvatar";

// props => {}
export default function Header() {
    const { userContext, isLoggedIn, errorLogin } = useAccount();
    const { isAdmin } = useRolesUser();
    const userId = useCurrentUserId(userContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

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
                <Link to="/" className="menu-link">Accueil</Link>
                    <Link to="/animals" className="menu-link">Liste des animaux</Link>
                    <a href="" className="menu-link">Evènements</a>
                    <a href="/forum" className="menu-link">Forum</a>

                    {(isLoggedIn && userContext && !errorLogin) ? (
                        <>
                            <Link to={() => {}} className="btn button-secondary">Réserver</Link>
                            <a href={logoutUrl()} className="btn button-primary">Se déconnecter</a>
                            {isAdmin && (
                                <a href={adminUrl()} className="btn button-admin">Admin</a>
                            )}
                            <Link to="/profile" className="profil">
                                <div style={{ display: 'none' }} />
                                <UserAvatar userId={userId} />
                            </Link>
                        </>
                    ) : (
                        <>
                            <a href={loginUrl()} className="btn button-secondary">Se connecter</a>
                            <a href={registerUrl()} className="btn button-primary">S'inscrire</a>
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