import { Link } from "wouter";
import {logoutUrl, patchUserInformations, uploadNewAvatar} from "../services/api/WildWonderHub";
import { useAccount, useCurrentUserId, useUserToString } from "../hooks/getAccount";
import ErrorLogin from "../components/commons/ErrorLogin";
import UserAvatar from "../components/user/userAvatar";
import AvatarForm from "../components/user/AvatarForm";
import { useState } from "react";
import UserInformationsForm from "../components/user/UserInformationsForm.jsx";

export default function Profile() {
    
    const { userContext, isLoggedIn, errorLogin } = useAccount();
    const userToString = useUserToString();
    const userId = useCurrentUserId(userContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    if (!userContext || errorLogin || !isLoggedIn) {
        return <ErrorLogin />
    }

    const handleAvatarSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const file = e.target[0].files[0];
        console.log("File:", file);

        if (typeof file === 'undefined') {
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('avatar', file);

        setTimeout(async () => {
            try {
                await uploadNewAvatar(formData);
                setLoading(false);
            } catch (error) {
                console.error("Error uploading avatar:", error);
                setLoading(false);
            }
        }, 3000);
    };

    const handleInformationsSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = {
            firstname: formData.get('firstname') === '' ? userContext.user.firstname : formData.get('firstname'),
            lastname: formData.get('lastname') === '' ? userContext.user.lastname : formData.get('lastname'),
            phone: formData.get('phone') === '' ? userContext.user.phone : formData.get('phone'),
            address: formData.get('address') === '' ? userContext.user.address : formData.get('address'),
            pc: formData.get('pc') === '' ? userContext.user.pc : formData.get('pc'),
            city: formData.get('city') === '' ? userContext.user.city : formData.get('city')
        };

        setLoading(true);
        setError(false);

        setTimeout(async () => {
            try {
                const res = await patchUserInformations(data);
                console.log("Informations updated");
                if (res && res.status === 200) {
                    window.location.reload();
                } else {
                    setError(true);
                }
                // window.location.reload();
            } catch (error) {
                console.error("Error updating informations:", error);
                setError(true);
            }
            setLoading(false);
        }, 3000);
    }

    return (
        <div className="profile">

        <div className="intro-profile">
            <div className="title">
                <h1 className="main-title green">Votre profil</h1>
                <p>Bonjour, {userToString}</p>
            </div>
            <UserAvatar userId={userId} />
        </div>

        <div className="edit-profile">

            <AvatarForm handleAvatarSubmit={handleAvatarSubmit} />

            {error &&
                <p className="message message-error">
                    Une erreur est survenue lors de la modification de vos informations.
                    <br />
                    Veuillez réessayer.
                </p>
            }

            <UserInformationsForm handleInformationsSubmit={handleInformationsSubmit} loading={loading} />

            <div className="btn-actions">
                <a className="btn button-primary" href="">Supprimer mon compte</a>
                <a className="btn button-secondary" href={logoutUrl()}>Me déconnecter</a>
            </div>

        </div>

        <div className="tickets-container mt-50 mb-100">
            <h3>Vos derniers tickets</h3>
            <div className="last-tickets">
                {/* todo: tickets */}
            </div>
            <div className="tickets-infos mt-50">
                <p className="tickets-infos__text" style={{ textAlign: 'center' }}>
                    Vous avez déjà eu l'occasion de découvrir notre Zoo ?
                    <br />
                    Nous vous invitons à rechercher un événement qui pourrait vous plaire à nouveau et réserver votre ou vos places !
                    <br />
                </p>
                <div className="buttons-cta mt-50">
                    <Link href="/" className="btn button-primary">
                        Regarder les prochains événements...
                    </Link>
                    <Link href="/" className="btn button-secondary">
                        Je souhaite réserver !
                    </Link>
                </div>
            </div>
        </div>

    </div>
    )
}
