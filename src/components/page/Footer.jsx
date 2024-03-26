import PropTypes from 'prop-types';
import { Link } from 'wouter';


// props => {}
export default function Footer() {
    return (
        <footer className="full-width">
            <div className="container-links-news">
                <div className="container-links">
                    <Link href="/politiques">Politique de confidentialité</Link>
                    <Link href="/reglement">Règlement du Zoo</Link>
                    <Link href="/contact">Nous contacter</Link>
                    <a href="">Forum</a>
                    <a href="">À propos</a>
                </div>

                <div className="newsletter">
                    <p>Newsletter</p>
                    <input className="full-width" type="text" placeholder="Votre adresse e-mail"/>
                    <a className="btn button-primary full-width">S'inscrire</a>
                </div>
            </div>

            <div className="container-infos">
                <p className="infos-title">WildWonderHub, application de gestion de zoo depuis 2023</p>
                <p className="copyright">
                    © Copyright 2023 - All Rights Reserved by WildWonderHub.
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
}

Footer.defaultProps = {
}