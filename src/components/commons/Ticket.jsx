import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
// import {getTicket} from "../../services/api/WildWonderHub.js";

export default function Ticket({ tickets }) {

  /* avalaibility: todo */
  const available = true;

  // const test = getTicket("api/tickets/1")
    // console.log(test)

  return (
      <>
      {tickets['hydra:member']?.map((ticket,index) => (

        <div  key= {index} className="ticket tickets-future">
        <div className="ticket-content">

            <div className="ticket-content__top">
                <p>{/*Passé, aujourd'hui, demain ou bientôt*/}</p>
            </div>
            <div className="ticket-content__middle">
                <img src="../../../public/assets/images/logos/LogoSAE_Zoo.png" alt="logo" className="logo" />
            </div>
            <div className="ticket-content__bottom">
                <div className="content__bottom-left">
                    <p>{ ticket.price !== null ? ticket.price : 0}€</p>
                </div>
                <div className="content__bottom-right">
                    <p>{ticket.type}</p>
                </div>
                <div className="ticket-content__top">
                </div>
            </div>
        </div>
    </div>
    ))}
    </>
  );
}



Ticket.propTypes = {
    tickets: PropTypes.object.isRequired,
};

Ticket.defaultProps = {
    tickets: {}
};