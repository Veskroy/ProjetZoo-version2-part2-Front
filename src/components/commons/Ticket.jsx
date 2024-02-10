import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

export default function Ticket({ id, type, price, date }) {
  /* avalaibility: todo */
  const available = true;
  return (
    <div className="ticket planned-ticket">
        <div className="ticket-content">
            <div className="ticket-content__top">
                <p>{/*Passé, aujourd'hui, demain ou bientôt*/}</p>
                {available ? (
                    <Dropdown actions={[
                        {
                            label: 'Récapitulatif',
                            href: {/* todo */}
                        }
                    ]} />
                )
                :
                (
                    <Dropdown actions={[
                        {
                            label: 'Récapitulatif',
                            href: {/* todo */}
                        },
                        {
                            label: 'Modifier',
                            href: {/* todo */}
                        }
                    ]} />
                )}
            </div>
            <div className="ticket-content__middle">
                <img src="{{ asset('images/Sae_Zoo_Image/LogoSAE_Zoo.png') }}" alt="logo" className="logo" />
            </div>
            <div className="ticket-content__bottom">
                <div className="content__bottom-left">
                    <p>{price}€</p>
                </div>
                <div className="content__bottom-right">
                    <p>{date}</p>
                    <p>{type}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

Ticket.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
};
