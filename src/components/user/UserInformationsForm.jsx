import PropTypes from "prop-types";

import Form from "../commons/Form/Form.jsx";
import Element from "../commons/Form/Element.jsx";
import {useUserInformations} from "../../hooks/getAccount.js";

export default function UserInformationsForm({ handleInformationsSubmit, loading }) {
    // console.log("UserInformationsForm loading:", loading)
    const {
        firstname,
        lastname,
        phone,
        address,
        pc,
        city
    } = useUserInformations();
    // console.log("User informations:", firstname.toString(), lastname, phone, address, pc, city);
    return (
        <Form className="change-form" onSubmit={handleInformationsSubmit}>
            <div>
                <Element input={{
                    type: 'label',
                    text: 'Mon nom de famille',
                }}/>
                <Element input={{
                    type: 'input',
                    name: 'lastname',
                    placeholder: lastname
                }}/>
            </div>
            <div>
                <Element input={{
                    type: 'label',
                    text: 'Mon prénom',
                }}/>
                <Element input={{
                    type: 'input',
                    name: 'firstname',
                    placeholder: firstname
                }}/>
            </div>
            <div>
                <Element input={{
                    type: 'label',
                    text: 'Mon numéro de téléphone',
                }}/>
                <Element input={{
                    type: 'input',
                    name: 'phone',
                    placeholder: phone
                }}/>
            </div>
            <div>
                <Element input={{
                    type: 'label',
                    text: 'Ma ville',
                }}/>
                <Element input={{
                    type: 'input',
                    name: 'city',
                    placeholder: city
                }}/>
            </div>
            <div>
                <Element input={{
                    type: 'label',
                    text: 'Mon adresse',
                }}/>
                <Element input={{
                    type: 'input',
                    name: 'address',
                    placeholder: address
                }}/>
            </div>
            <div>
                <Element input={{
                    type: 'label',
                    text: 'Mon code postal',
                }}/>
                <Element input={{
                    type: 'input',
                    name: 'pc',
                    placeholder: pc
                }}/>
            </div>
            <Element input={{
                type: 'submit',
                text: loading ? 'Modification en cours...' : 'Modifier mes informations',
                class: 'btn button-primary full-width',
            }} />
        </Form>
    )
}

UserInformationsForm.propTypes = {
    handleInformationsSubmit: PropTypes.func.isRequired,
};

UserInformationsForm.defaultProps = {
    handleInformationsSubmit: () => {},
};
