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
    return fetch(`${API_URL}/answers/new`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/ld+json',
        },
        body: JSON.stringify({
            description: answer,
            question: `/api/questions/${id}`,
        }),
        credentials: 'include',
    })
    .then(
        success => console.log("success postAnswer: ", success)
    ).catch(
        error => console.log("error postAnswer: ", error)
    );
}

export async function getAvatarFromUser(userId) {
    return `${BASE_URL}/api/users/${userId}/avatar`;
}

export async function uploadNewAvatar(formData) {
    /*const formData = new FormData();
    console.log('file: ', file);
    formData.append('file', file);*/

    return fetch(`${API_URL}/me/avatar`, {
        method: 'POST',
        body: formData,
        credentials: 'include'
    }).then(
        success => console.log("success postAvatar: ", success)
    ).catch(
    error => console.log("error postAvatar: ", error)
    );
}

export async function getAllAnimals(URLSearchParams = 1, name = "") {
    return fetch(`${API_URL}/animals/all?page=${URLSearchParams}&name=${name}`)
    .then((res) => res.json());
}

export async function postQuestion(title, description/*formData*/) {
    return fetch(`${API_URL}/questions/new`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/ld+json',
        },
        body: JSON.stringify({
            title: title,
            description: description,
            author: `/api/me`,
            isResolved: false
        }),
        credentials: "include"
    }).then(
        success => console.log("success postQuestion: ", success)
    ).catch(
        error => console.log("error postQuestion: ", error)
    );
}

/*export async function patchUserInformations(data) {
    return fetch(`${API_URL}/me/edit`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
            'Content-Type': 'application/merge-patch+json',
        },
    }).then(
        success => console.log("success patchUserInformations: ", success)
    ).catch(
        error => console.log("error patchUserInformations: ", error)
    );
}
*/
export async function patchUserInformations(data) {
    try {
        const response = await fetch(`${API_URL}/me/edit`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/merge-patch+json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to update user information');
        }

        return response;
    } catch (error) {
        console.error("Error patching user information:", error);
        throw error;
    }
}
