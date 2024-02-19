/*****************/
/* Base de l'API */
/* WildWonderHub */
/*****************/

export const API_URL = 'http://127.0.0.1:8000';

/* premier test : fonction pour récupérer l'utilisateur connecté */
/* fonctionnel */

export async function testGetLoggedUser() {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then((res) => {
        console.log('api: ', res);
        return res.json();
    });
}

export function loginUrl() {
    return `${API_URL}/login`;
}

export function logoutUrl() {
    return `${API_URL}/logout`;
}

export function registerUrl() {
    return `${API_URL}/register`;
}
