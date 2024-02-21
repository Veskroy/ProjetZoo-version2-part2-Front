import { Link } from "wouter";

function NotFound() {
    return (
        <div className="mt-100 not-found">
            <h1>Erreur 404</h1>
            <p>Désolé, la page que vous recherchez semble introuvable.</p>

            <Link href="/" className="btn button-primary mt-100">Retour à l'accueil</Link>
        </div>
    )
}

export default NotFound;
