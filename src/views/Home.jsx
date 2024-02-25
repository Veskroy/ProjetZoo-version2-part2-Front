import { useAccount, useRolesUser, useUserToString } from "../hooks/getAccount";

function Home() {
    const { userContext, isLoggedIn } = useAccount();
    const userToString = useUserToString();
    const { isAdmin, isUser, isEmployee } = useRolesUser();
    console.log('user from home: ', userContext, isLoggedIn);

    return (
        <div className="presentation-base">

            <h1 className="main-title mt-50 mb-50 green">
                Bienvenue sur le site du Zoo de la Palmyre !
            </h1>

            {/* Carousel à implémenter */}

            <div className="presentation-content">

                <div className="presentation-user mb-100">
                    {isLoggedIn && userContext && userContext.user && (
                        <>
                            <h3>Bonjour, {userToString}</h3>
                            <p className="mt-50">N'hésitez pas à réserver un nouveau ticket pour notre Zoo ici, ou à consulter vos tickets déjà réservés ici !</p>
                            <p>Si vous avez la moindre question concernant le fonctionnement de notre Zoo, consultez notre forum ici et créez un post !</p>
                        </>
                    )}
                    {isAdmin && (
                        <a className="btn button-admin" href="/admin">Accès administratif</a>
                    )}
                </div>
                
            </div>

        </div>

    )
}

export default Home;
