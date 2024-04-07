
export default function Reservation_view()
{
    window.onload = function() {
        var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("date")[0].min = today;
        document.getElementsByName("date")[0].value=today
}
    return(

        <form name="Reservation" method="post" action="">
            <h1>Bienvenue dans votre réservation de Ticket</h1>
        <br/>
            <p>Vous pouver reserver votre ticket en remplisant les elment suivant</p>
            <label>
            <div id="inter-flex">
                <h5>Selectioner la date d'application de votre ticket</h5>
                <input type="date" name="date" id="date" />
            </div>
            </label>
            <button type="submit">Soumettre</button>
        </form>
    )
}
/*
  <div id="inter-flex">
                <h5>Selectionner votre type de forfait</h5>
                <select name="type" id="type">
                    <option value="normal">Normal - 20€</option>
                    <option value="enfant">Enfant - 12€</option>
                    <option value="etudiant">Etudiant - 15€</option>
                    <option value="senior">Senior - 16€</option>
                    <option value="junior">Junior - Gratuit</option>
                    <option value="handicape">Handicape - 14€</option>
                </select>
                <i> * Type de forfait (Normal, Enfant, Etudiant, Senior, Junior, Handicape)</i>
            </div>
 */