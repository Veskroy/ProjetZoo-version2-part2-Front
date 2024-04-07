import Ticket from "../../components/commons/Ticket.jsx";
import {getUser} from "../../services/api/WildWonderHub.js";
import {useAccount, useCurrentUser, useCurrentUserId, useUserToString} from "../../hooks/getAccount.js";

export default function Ticket_view() {
    // permet d'optenir tout les infor lie a l'user
    const user = useCurrentUser();

    // permet d'obtenir le non de l'utilisateur
    const userTostring= useUserToString()

    // permet d'obtenir lid de L'user
    const { userContext, isLoggedIn, errorLogin } = useAccount();
    const userId = useCurrentUserId(userContext);

    return (
        <>
        <h1 className="main-title green mt-50 mb-100">Liste de vos tickets achetés</h1>
        <div className="tickets-infos">
        <h3>Bonjour {userTostring}!</h3>
        <p className="tickets-infos__text mt-50">
            Vous pouvez consulter ici vos tickets prévus prochainement et votre historique.
            <br/>
            Vous pouvez également réserver un nouveau ticket, alors <span className="keyword">n'attendez plus</span> !
            <br/>

            Explorez les détails de vos prochaines aventures au zoo et découvrez les événements passionnants qui vous
            attendent.
            <br/>
            Que ce soit pour une visite spéciale, une rencontre avec les animaux ou une journée thématique, nous avons
            une expérience unique qui vous attend !
            <br/>
            Profitez d'une journée mémorable parmi nos habitants exotiques et vivez des moments inoubliables seul(e), en
            famille ou entre amis.
        </p>
        </div>
            <div className="tickets-container">
                <div className="tickets-past mt-50">
                    <Ticket tickets={user.tickets}/>
                </div>
            </div>
            <div className="form-ticket-add" id="réserver">
                <h3 className="mb-50">Je souhaite acheter un nouveau ticket !</h3>

                <p className="tickets-infos__text">Nos tickets diffèrent en fonction du type de propriétaire du
                    ticket. <br/>
                    Vous pouvez acheter un ticket pour vous-même ou pour un membre de votre famille, sans compte.</p>
                <p className="tickets-infos__text mt-50" style={{textDecoration: "underline"}}>Les tarifs sont les
                    suivants :</p>
                <ul className="mb-50 tickets-infos__text">
                    <li>- Tarif classique : 20€</li>
                    <li>- Tarif pour junior (-3 ans) : gratuit</li>
                    <li>- Tarif pour enfant (3-12 ans) : 12€</li>
                    <li>- Tarif pour senior : 16€</li>
                    <li>- Tarif pour étudiants : 15€</li>
                    <li>- Tarif pour personne en situation de handicap : 14€</li>
                </ul>
                <a href="/ticket/reservation" className="btn button-secondary">Je souhaite réserver !</a>
            </div>
        </>
    )
}
