//import { Redirect, useLocation } from "wouter";
import { useEffect, useState } from "react";

import { useAccount, useCurrentUser, useRolesUser, useUserToString } from "../../hooks/getAccount"
import { getAllQuestions } from "../../services/api/WildWonderHub";
import { extractPagination } from "../../services/transformers/extractPagination";

import ErrorLogin from "../../components/commons/ErrorLogin";
import Pagination from "../../components/commons/Pagination";

import PropTypes from 'prop-types';
import QuestionList from "../../components/forum/QuestionList";
import SearchBar from "../../components/commons/SearchBar";

export default function Forum({ page, setPage }) {

    const { isLoggedIn, errorLogin } = useAccount();
    const user = useCurrentUser();

    const [forumData, setForumData] = useState([]);
    const [paginationData, setPaginationData] = useState(1);

    const [formSearch, setFormSearch] = useState("");

    const { isEmployee, isAdmin } = useRolesUser();
    const userToString = useUserToString();

    const togglePage = (number) => {
        setPage(number);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        getAllQuestions(page, formSearch).then((value) => {
            setForumData(value["hydra:member"]);
            setPaginationData(extractPagination(value["hydra:view"]));
        });
    }, [page, formSearch]);

    return (
        <div className="forum">
            <h1 className="main-title green">Forum du Zoo de la Palmyre</h1>
            <p className="center mt-50 mb-50">
                Bienvenue sur le forum de notre Zoo ! Ici, vous pouvez poser toutes vos questions sur les animaux, les horaires, les tarifs, etc.
                <br />
                Vous pouvez également répondre aux questions des autres utilisateurs, et même liker les posts qui vous plaisent pour les mettre en avant.
                <br />
                Vous avez donc accès à vos posts et à vos posts favoris.
                <br />
                <br />
                Merci de respecter nos règles de bonne conduite.
            </p>

            {(isEmployee || isAdmin) && (
                <p className="admin-or-employee-only">
                Bonjour, {userToString}, vous êtes un administrateur ou employé de notre Zoo.
                <br />
                Par conséquent, vous avez la possibilité de supprimer un post, de le modifier, de le rendre résolu ou non.
                <br />
                Vous pouvez également supprimer ou modifier un commentaire qui pourrait être offensant, ou non approprié.
            </p>
            )}

            {!user || errorLogin || !isLoggedIn ? (
                <ErrorLogin />
            ) : (
                forumData === null ? (
                    <p className="mt-50">Aucun post n'a été trouvé.</p>
                ) : (
                    <>
                        <SearchBar formSearch={formSearch} setFormSearch={setFormSearch} labelSearch="Rechercher un post" placeholderInput="Saisissez un mot clé..." />
                        {forumData.length === 0 ? (
                            <>
                                <p className="mt-50">Résultats de la recherche pour <strong>{formSearch}</strong></p>
                                <p>Votre recherche n'a donné aucun résultat !</p>
                                <a href="/forum" className="link mbc">Retour à la page d'accueil du forum</a>
                            </>
                        ) :
                        <>
                            <QuestionList page={page} data={forumData} togglePage={togglePage} />
                            <Pagination togglePage={togglePage} paginationData={paginationData} />
                        </>}
                    </>
                )
            )}
        </div>
    )
}

Forum.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired
}

Forum.defaultProps = {
    page: 1,
    setPage: () => {}
}
