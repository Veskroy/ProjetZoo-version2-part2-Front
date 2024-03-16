import { loginUrl } from "../../services/api/WildWonderHub";

export default function ErrorLogin() {
    return (
        <p className="message message-error">
            Vous devez être connecté pour accéder à cette ressource.
            <br />
            <a style={{color: 'black'}} className="link" href={loginUrl()}>
                Connectez-vous ici.
            </a>
        </p>
    )
}
