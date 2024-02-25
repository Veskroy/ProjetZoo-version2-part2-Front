// import PropTypes from 'prop-types';

import { Link } from "wouter";

import { loginUrl, logoutUrl, registerUrl } from "../../services/api/WildWonderHub";
import { useAccount, useRolesUser } from "../../hooks/getAccount";

// props => {}
export default function Header() {
    const { userContext, isLoggedIn, errorLogin } = useAccount();
    const { isAdmin, isUser, isEmployee } = useRolesUser();

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
            <nav className="ul-links">
                <div>
                    <Link href="/" className="menu-link">Accueil</Link>
                    <a href="" className="menu-link">Liste des animaux</a>
                    <a href="" className="menu-link">Evènements</a>

                    {isLoggedIn && userContext && !errorLogin ? (
                        <>
                            <a href={loginUrl()} className="btn button-secondary">Réserver</a>
                            <a href={logoutUrl()} className="btn button-primary">Se déconnecter</a>
                            {isAdmin && (
                                <Link href="/admin" className="btn button-admin">Admin</Link>
                            )}
                        </>
                    ) : (
                        <>
                            <a href={loginUrl()} className="btn button-secondary">Se connecter</a>
                            <a href={registerUrl()} className="btn button-primary">S'inscrire</a>
                        </>
                    )}

                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
}

Header.defaultProps = {
}