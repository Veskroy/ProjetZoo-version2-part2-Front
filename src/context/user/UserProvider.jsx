import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { getUser } from "../../services/api/WildWonderHub";
import { UserContext } from "./index";

export default function UserProvider(props) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await getUser();
                //console.log('réponse API :', response);
                setUser(response);
                setLoading(false);
            } catch (error) {
                console.error('erreur connexion API :', error);
            }
        };
        getCurrentUser();
    }, []);

    //console.log('user from UserProvider: ', user, loading);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {props.children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
