/*****************/
/* Base de l'API */
/* WildWonderHub */
/*****************/

export const BASE_URL = 'http://127.0.0.1:8000';
export const API_URL = `${BASE_URL}/api`;

/* premier test : fonction pour récupérer l'utilisateur connecté */
/* fonctionnel */

export async function testGetLoggedUser() {
    return fetch(`${BASE_URL}/login`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then((res) => {
        //console.log('api: ', res);
        return res.json();
    });
}

export function loginUrl() {
    //return `${BASE_URL}/login`;
    return `${BASE_URL}/login?redirect=${window.location.href}`;
}

export function logoutUrl() {
    return `${BASE_URL}/logout`;
}

export function registerUrl() {
    return `${BASE_URL}/register`;
}

export function adminUrl() {
    return `${BASE_URL}/admin`;
}

export async function getUser() {
    return fetch(`${BASE_URL}/api/me`, {
        credentials: 'include',
    })
    .then((res) =>
        //console.log('api getUser: ', res);
        res.json()
    );
}

export async function getAllQuestions(URLSearchParams = 1, searchTitle = "") {
    return fetch(`${API_URL}/questions?page=${URLSearchParams}&title=${searchTitle}`)
    .then((res) => res.json());
}

export async function getQuestion(id) {
    return fetch(`${API_URL}/questions/${id}`)
    .then((res) => res.json());
}

export async function getAllAnswersFromQuestion(id) {
    return fetch(`${API_URL}/questions/${id}/answers`)
    .then((res) => res.json());
}

export async function postAnswerToQuestion(id, answer) {
    return fetch(`${API_URL}/answers`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'content-Type': 'application/ld+json',
        },
        body: JSON.stringify({
            description: answer,
            question: `/api/questions/${id}`,
        }),
    })
    .then((res) => res.json());
}
